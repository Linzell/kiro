import React from 'react';
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';

export default function appEditor() {
  return (
    <div style={{ padding: 16 }}>
      <WysiwygEditor placeholder='Enter text...' />
    </div>
  );
}
