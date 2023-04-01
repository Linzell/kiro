import React from 'react';
import {
  ShortcutHandlerProps,
  LinkExtension,
} from 'remirror/extensions';
import { useExtensionEvent } from '@remirror/react';

export default function useLinkShortcut() {
  const [linkShortcut, setLinkShortcut] = React.useState<ShortcutHandlerProps | undefined>();
  const [isEditing, setIsEditing] = React.useState(false);

  useExtensionEvent(
    LinkExtension,
    'onShortcut',
    React.useCallback(
      (props) => {
        if (!isEditing) {
          setIsEditing(true);
        }

        return setLinkShortcut(props);
      },
      [isEditing],
    ),
  );

  return { linkShortcut, isEditing, setIsEditing };
}
