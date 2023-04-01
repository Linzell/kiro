import { YjsExtension } from '@remirror/extension-yjs';
import { AnnotationExtension } from '@remirror/extension-annotation';
import { TableExtension } from '@remirror/extension-react-tables';
import { WebrtcProvider } from 'y-webrtc';
import {
  BlockquoteExtension,
  BoldExtension,
  BulletListExtension,
  CalloutExtension,
  CodeBlockExtension,
  CodeExtension,
  ColumnsExtension,
  DropCursorExtension,
  EmojiExtension,
  FontFamilyExtension,
  FontSizeExtension,
  HardBreakExtension,
  HeadingExtension,
  HistoryExtension,
  ImageExtension,
  ItalicExtension,
  LinkExtension,
  MentionAtomExtension,
  NodeFormattingExtension,
  OrderedListExtension,
  ShortcutsExtension,
  StrikeExtension,
  TaskListExtension,
  TextColorExtension,
  UnderlineExtension,
} from 'remirror/extensions';
import { FindExtension } from '@remirror/extension-find';
import data from 'svgmoji/emoji.json';
import css from 'refractor/lang/css.js';
import javascript from 'refractor/lang/javascript.js';
import json from 'refractor/lang/json.js';
import markdown from 'refractor/lang/markdown.js';
import typescript from 'refractor/lang/typescript.js';
import rust from 'refractor/lang/rust.js';
import * as Y from 'yjs';

const room = 'test-placeholder-yjs';
const ydoc = new Y.Doc();
const provider = new WebrtcProvider(room, ydoc);

const extensions = () => [
  new YjsExtension({ getProvider: () => provider, disableUndo: true }),
  new AnnotationExtension(),
  new BlockquoteExtension(),
  new BoldExtension(),
  new BulletListExtension(),
  new CalloutExtension(),
  new CodeBlockExtension({
    supportedLanguages: [css, javascript, json, markdown, typescript, rust],
  }),
  new CodeExtension(),
  new DropCursorExtension(),
  new ColumnsExtension(),
  new EmojiExtension({ data, moji: 'noto' }),
  new FindExtension(),
  new FontFamilyExtension(),
  new FontSizeExtension({ defaultSize: '16', unit: 'px' }),
  new HardBreakExtension(),
  new HeadingExtension(),
  new HistoryExtension(),
  new ImageExtension({ enableResizing: true }),
  new ItalicExtension(),
  new LinkExtension({ autoLink: true }),
  new OrderedListExtension(),
  new TaskListExtension(),
  new MentionAtomExtension({
    matchers: [
      { name: 'at', char: '@' },
      { name: 'tag', char: '#' },
    ],
  }),
  new NodeFormattingExtension(),
  new ShortcutsExtension(),
  new StrikeExtension(),
  new TableExtension(),
  new TextColorExtension(),
  new UnderlineExtension(),
];

export default extensions;
