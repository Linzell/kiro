import React from 'react';
import {
  CommandButton,
  FloatingToolbar,
  FloatingWrapper,
  ToggleBoldButton,
  ToggleItalicButton,
  ToggleStrikeButton,
  ToggleUnderlineButton,
  useActive,
  useCurrentSelection,
} from '@remirror/react';
import DelayAutoFocusInput from './extensions/delayAutoFocusInput';
import useFloatingLinkState from './extensions/useFloatingLinkState';

export default function FloatingLinkToolbar() {
  const {
    isEditing,
    linkPositioner,
    clickEdit,
    onRemove,
    submitHref,
    href,
    setHref,
    cancelHref,
  } = useFloatingLinkState();
  const active = useActive();
  const activeLink = active.link();
  const { empty } = useCurrentSelection();

  const handleClickEdit = React.useCallback(() => {
    clickEdit();
  }, [clickEdit]);

  const linkEditButtons = activeLink ? (
    <>
      <ToggleBoldButton />
      <ToggleItalicButton />
      <ToggleStrikeButton />
      <ToggleUnderlineButton />
      <CommandButton
        commandName='updateLink'
        onSelect={handleClickEdit}
        icon='pencilLine'
        enabled
      />
      <CommandButton commandName='removeLink' onSelect={onRemove} icon='linkUnlink' enabled />
    </>
  ) : (
    <>
      <ToggleBoldButton />
      <ToggleItalicButton />
      <ToggleStrikeButton />
      <ToggleUnderlineButton />
      <CommandButton commandName='updateLink' onSelect={handleClickEdit} icon='link' enabled />
    </>
  );

  return (
    <>
      {!isEditing && <FloatingToolbar>{linkEditButtons}</FloatingToolbar>}
      {!isEditing && empty && (
        <FloatingToolbar positioner={linkPositioner}>{linkEditButtons}</FloatingToolbar>
      )}

      <FloatingWrapper
        positioner='always'
        placement='bottom'
        enabled={isEditing}
        renderOutsideEditor
      >
        <DelayAutoFocusInput
          style={{ zIndex: 20 }}
          autoFocus
          placeholder='Enter link...'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setHref(event.target.value)}
          value={href}
          onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
            const { code } = event;

            if (code === 'Enter') {
              submitHref();
            }

            if (code === 'Escape') {
              cancelHref();
            }
          }}
        />
      </FloatingWrapper>
    </>
  );
}
