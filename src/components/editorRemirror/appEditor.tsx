import React from 'react';
import { YjsExtension } from '@remirror/extension-yjs';
import { AnnotationExtension } from '@remirror/extension-annotation';
import { htmlToProsemirrorNode } from 'remirror';
import css from 'refractor/lang/css.js';
import javascript from 'refractor/lang/javascript.js';
import json from 'refractor/lang/json.js';
import markdown from 'refractor/lang/markdown.js';
import typescript from 'refractor/lang/typescript.js';
import rust from 'refractor/lang/rust.js';
import {
  BlockquoteExtension,
  BoldExtension,
  CalloutExtension,
  CodeBlockExtension,
  CodeExtension
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
  ToggleCodeBlockButton,
  ToggleCodeButton,
  Toolbar,
  useRemirror,
  VerticalDivider,
} from '@remirror/react';

const room = 'test-placeholder-yjs';
const ydoc = new Y.Doc();
const provider = new WebrtcProvider(room, ydoc);

const extensions = () => [
  new YjsExtension({ getProvider: () => provider, disableUndo: true }),
  new AnnotationExtension(),
  new BlockquoteExtension(),
  new BoldExtension(),
  new CalloutExtension(),
  new CodeBlockExtension({
    supportedLanguages: [css, javascript, json, markdown, typescript, rust],
  }),
  new CodeExtension(),
];

export default function appEditor() {
  const { manager, state, onChange } = useRemirror({
    extensions: React.useCallback(extensions, []),
    core: { excludeExtensions: ['history'] },
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
            <Toolbar>
              <ToggleBoldButton />
              <VerticalDivider />
              <VerticalDivider />
              <ToggleBlockquoteButton />
              <ToggleCodeBlockButton />
              <ToggleCodeButton />
              <VerticalDivider />
              <CalloutTypeButtonGroup />
            </Toolbar>
          </Remirror>
        </ThemeProvider>
      </AllStyledComponent>
    </div>
  );
}
