import React from 'react';
import { YjsExtension } from '@remirror/extension-yjs';
import { WebrtcProvider } from 'y-webrtc';
import * as Y from 'yjs';
import {
  Remirror,
  ThemeProvider,
  useRemirror,
} from '@remirror/react';

const room = 'test-placeholder-yjs';
const ydoc = new Y.Doc();
const provider = new WebrtcProvider(room, ydoc);

const extensions = () => [
  new YjsExtension({ getProvider: () => provider, disableUndo: true }),
];

export default function appEditor() {
  const { manager } = useRemirror({
    extensions,
    core: { excludeExtensions: ['history'] },
  });
  return (
    <div className='remirror-theme'>
      <ThemeProvider>
        <Remirror manager={manager} autoFocus autoRender='end'>
        </Remirror>
      </ThemeProvider>
    </div>
  );
}
