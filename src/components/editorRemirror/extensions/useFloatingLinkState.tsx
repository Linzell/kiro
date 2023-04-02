import React from 'react';
import { createMarkPositioner } from 'remirror/extensions';
import {
  useChainedCommands,
  useCurrentSelection,
  useUpdateReason,
  useAttrs,
} from '@remirror/react';
import useLinkShortcut from '@/editorRemirror/extensions/useLinkShortcut';

export default function useFloatingLinkState() {
  const chain = useChainedCommands();
  const { isEditing, linkShortcut, setIsEditing } = useLinkShortcut();
  const { to, empty } = useCurrentSelection();

  const url = (useAttrs().link()?.href as string) ?? '';
  const [href, setHref] = React.useState<string>(url);

  // A positioner which only shows for links.
  const linkPositioner = React.useMemo(() => createMarkPositioner({ type: 'link' }), []);

  const onRemove = React.useCallback(() => chain.removeLink().focus().run(), [chain]);
  const updateReason = useUpdateReason();

  React.useLayoutEffect(() => {
    if (!isEditing) {
      return;
    }

    if (updateReason.doc || updateReason.selection) {
      setIsEditing(false);
    }
  }, [isEditing, setIsEditing, updateReason.doc, updateReason.selection]);

  React.useEffect(() => {
    setHref(url);
  }, [url]);

  const submitHref = React.useCallback(() => {
    setIsEditing(false);
    const range = linkShortcut ?? undefined;

    if (href === '') {
      chain.removeLink();
    } else {
      chain.updateLink({ href, auto: false }, range);
    }

    chain.focus(range?.to ?? to).run();
  }, [setIsEditing, linkShortcut, chain, href, to]);

  const cancelHref = React.useCallback(() => {
    setIsEditing(false);
  }, [setIsEditing]);

  const clickEdit = React.useCallback(() => {
    if (empty) {
      chain.selectLink();
    }

    setIsEditing(true);
  }, [chain, empty, setIsEditing]);

  return React.useMemo(
    () => ({
      href,
      setHref,
      linkShortcut,
      linkPositioner,
      isEditing,
      clickEdit,
      onRemove,
      submitHref,
      cancelHref,
    }),
    [href, linkShortcut, linkPositioner, isEditing, clickEdit, onRemove, submitHref, cancelHref],
  );
}
