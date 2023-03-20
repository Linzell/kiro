import { BoldExtension, CalloutExtension, ItalicExtension } from 'remirror/extensions';

/**
 * Create the extensions for the editor.
 * @returns the extensions
 */
const extensions = () => [
  new BoldExtension(),
  new ItalicExtension(),
  new CalloutExtension({ defaultType: 'warn' }),
];

/**
 * Export the extensions.
 */
export default extensions;
