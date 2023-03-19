import { BoldExtension, CalloutExtension, ItalicExtension } from 'remirror/extensions';
import { useRemirror } from '@remirror/react';

/**
 * Create the manager and state for the editor.
 */
const { manager, state } = useRemirror({
  extensions: () => [
    new BoldExtension(),
    new ItalicExtension(),
    new CalloutExtension({ defaultType: 'warn' }),
  ],

  // Set the initial content.
  content: '<p>I love <b>Remirror</b></p>',

  // Place the cursor at the start of the document. This can also be set to
  // `end`, `all` or a numbered position.
  selection: 'start',

  // Set the string handler which means the content provided will be
  // automatically handled as html.
  // `markdown` is also available when the `MarkdownExtension`
  // is added to the editor.
  stringHandler: 'html',
});

export default { manager, state };
