import React from 'react';
import { EditorComponent, useRemirror, Remirror } from '@remirror/react';
import extensions from './editorManager';
import Menu from './editorMenu';

import 'remirror/styles/all.css';

export default function appEditor() {
  const { manager, state } = useRemirror({
    extensions,
    content: '<p>I love <b>Remirror</b></p>',
    selection: 'start',
    stringHandler: 'html',
  });
  return (
    <div className='remirror-theme'>
      <Remirror manager={manager} initialContent={state}>
        <EditorComponent />
        <Menu />
      </Remirror>
    </div>
  );
}
