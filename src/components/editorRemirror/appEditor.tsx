import React from 'react';
import { YjsExtension } from '@remirror/extension-yjs';
import { EmojiButton } from '@joeattardi/emoji-button';
import { AnnotationExtension } from '@remirror/extension-annotation';
import { htmlToProsemirrorNode, ProsemirrorNode } from 'remirror';
import {
  BlockquoteExtension,
  BoldExtension,
  CalloutExtension,
} from 'remirror/extensions';
import { AllStyledComponent } from '@remirror/styles/emotion';
import { WebrtcProvider } from 'y-webrtc';
import * as Y from 'yjs';
import {
  CalloutTypeButtonGroup,
  Remirror,
  ThemeProvider,
  ToggleBoldButton,
  ToggleBlockquoteButton,
  Toolbar,
  useCommands,
  useRemirror,
  useRemirrorContext,
} from '@remirror/react';

const room = 'test-placeholder-yjs';
const ydoc = new Y.Doc();
const provider = new WebrtcProvider(room, ydoc);

const EmojiPicker = () => {
  const pickerRef = React.useRef(new EmojiButton({ position: 'bottom', autoFocusSearch: false }));
  const { updateCallout } = useCommands();
  const { view } = useRemirrorContext();
  const pos = React.useRef(-1);

  const handleClickEmoji = React.useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      e.preventDefault();

      if (!target.matches('[data-emoji-container]')) {
        return;
      }

      /**
       * Find the document position of the click element.
       */
      pos.current = view.posAtDOM(target, 0);

      pickerRef.current.togglePicker(target);
    },
    [view],
  );

  /**
   * Handle the selected emoji here.
   * Use `updateCallout` commands to update new emoji.
   * Need to pass pos information to commands,
   * otherwise it will update the node where the cursor is located.
   */
  const handleSelectEmoji = React.useCallback(
    (selection: { emoji: string }) => {
      updateCallout({ emoji: selection.emoji }, pos.current);
    },
    [updateCallout],
  );

  React.useEffect(() => {
    const picker = pickerRef.current;
    picker.on('emoji', handleSelectEmoji);
    document.addEventListener('click', handleClickEmoji);

    return () => {
      picker.destroyPicker();
      document.removeEventListener('click', handleClickEmoji);
    };
  }, [handleClickEmoji, handleSelectEmoji]);

  return null;
};

const renderDialogEmoji = (node: ProsemirrorNode) => {
  const { emoji: prevEmoji } = node.attrs;
  const emoji = document.createElement('span');
  emoji.dataset.emojiContainer = '';
  emoji.textContent = prevEmoji;
  emoji.style.cursor = 'pointer';

  // Prevent ProseMirror from handling the `mousedown` event so that the cursor
  // won't move when users click the emoji.
  emoji.addEventListener('mousedown', (e) => e.preventDefault());

  return emoji;
};

const extensions = () => [
  new YjsExtension({ getProvider: () => provider, disableUndo: true }),
  new AnnotationExtension(),
  new BlockquoteExtension(),
  new BoldExtension(),
  new CalloutExtension({ renderEmoji: renderDialogEmoji, defaultEmoji: '💡' }),
];

export default function appEditor() {
  const { manager, state, onChange } = useRemirror({
    extensions: React.useCallback(extensions, []),
    core: { excludeExtensions: ['history'] },
    content:
      '<div data-callout-type="info" data-callout-emoji="💡"><p>Blank callout</p></div><p />'
      + '<div data-callout-type="warning" data-callout-emoji="💡"><p>Warning callout</p></div><p />'
      + '<div data-callout-type="error" data-callout-emoji="💡"><p>Error callout</p></div><p />'
      + '<div data-callout-type="success" data-callout-emoji="💡"><p>Success callout</p></div>',
    stringHandler: htmlToProsemirrorNode,
  });
  return (
    <div className='remirror-theme'>
      <AllStyledComponent>
        <ThemeProvider>
          <Remirror
            manager={manager}
            autoFocus
            onChange={onChange}
            initialContent={state}
            autoRender='end'
          >
            {/* <EmojiPicker />  // TODO: Fix emoji picker */}
            <Toolbar>
              <ToggleBoldButton />
              <ToggleBlockquoteButton />
              <CalloutTypeButtonGroup />
            </Toolbar>
          </Remirror>
        </ThemeProvider>
      </AllStyledComponent>
    </div>
  );
}
