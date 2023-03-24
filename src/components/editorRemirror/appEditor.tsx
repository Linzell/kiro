import React from 'react';
import { YjsExtension } from '@remirror/extension-yjs';
import { AnnotationExtension } from '@remirror/extension-annotation';
import { BlockquoteExtension, BoldExtension } from 'remirror/extensions';
import { AllStyledComponent } from '@remirror/styles/emotion';
import { WebrtcProvider } from 'y-webrtc';
import * as Y from 'yjs';
import {
  Remirror,
  ThemeProvider,
  ToggleBoldButton,
  ToggleBlockquoteButton,
  Toolbar,
  useRemirror,
} from '@remirror/react';

const room = 'test-placeholder-yjs';
const ydoc = new Y.Doc();
const provider = new WebrtcProvider(room, ydoc);

const extensions = () => [
  new YjsExtension({ getProvider: () => provider, disableUndo: true }),
  new AnnotationExtension(),
  new BlockquoteExtension(),
  new BoldExtension(),
];

export default function appEditor() {
  const { manager } = useRemirror({
    extensions,
    core: { excludeExtensions: ['history'] },
  });
  return (
    <div className='remirror-theme'>
      <AllStyledComponent>
        <ThemeProvider>
          <Remirror manager={manager} autoFocus autoRender='end'>
            <Toolbar>
              <ToggleBoldButton />
              <ToggleBlockquoteButton />
            </Toolbar>
          </Remirror>
        </ThemeProvider>
      </AllStyledComponent>
    </div>
  );
}
