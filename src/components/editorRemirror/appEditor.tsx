import React from 'react';
import { YjsExtension } from '@remirror/extension-yjs';
import { AnnotationExtension } from '@remirror/extension-annotation';
import { htmlToProsemirrorNode } from 'remirror';
import { FindExtension } from '@remirror/extension-find';
import data from 'svgmoji/emoji.json';
import css from 'refractor/lang/css.js';
import javascript from 'refractor/lang/javascript.js';
import json from 'refractor/lang/json.js';
import markdown from 'refractor/lang/markdown.js';
import typescript from 'refractor/lang/typescript.js';
import rust from 'refractor/lang/rust.js';
import {
  BlockquoteExtension,
  FontFamilyExtension,
  BoldExtension,
  CalloutExtension,
  FontSizeExtension,
  DropCursorExtension,
  HistoryExtension,
  HeadingExtension,
  EmojiExtension,
  ColumnAttributes,
  ColumnsExtension,
  CodeBlockExtension,
  CodeExtension,
} from 'remirror/extensions';
import { AllStyledComponent } from '@remirror/styles/emotion';
import { WebrtcProvider } from 'y-webrtc';
import * as Y from 'yjs';
import {
  CommandButtonGroup,
  CommandMenuItem,
  HeadingLevelButtonGroup,
  DropdownButton,
  CalloutTypeButtonGroup,
  HistoryButtonGroup,
  EmojiPopupComponent,
  DecreaseFontSizeButton,
  IncreaseFontSizeButton,
  Remirror,
  /* FindReplaceComponent, */
  ThemeProvider,
  ToggleBoldButton,
  ToggleBlockquoteButton,
  ToggleCodeBlockButton,
  ToggleCodeButton,
  ToggleColumnsButton,
  Toolbar,
  useActive,
  useCommands,
  useRemirror,
  VerticalDivider,
} from '@remirror/react';

const room = 'test-placeholder-yjs';
const ydoc = new Y.Doc();
const provider = new WebrtcProvider(room, ydoc);

const TWO_COLUMNS: ColumnAttributes = {
  count: 2,
  fill: 'balance',
  gap: '2em',
};
const THREE_COLUMNS: ColumnAttributes = {
  count: 3,
  fill: 'balance',
  gap: '2em',
};

const FONT_FAMILIES: Array<[React.CSSProperties['fontFamily'], string]> = [
  ['serif', 'Serif'],
  ['sans-serif', 'San serif'],
  ['cursive', 'Cursive'],
  ['fantasy', 'Fantasy'],
];

const FONT_SIZES = ['8', '10', '12', '14', '16', '18', '24', '30'];

const FontFamilyButtons = () => {
  const { setFontFamily } = useCommands();
  const active = useActive();
  return (
    <CommandButtonGroup>
      <DropdownButton aria-label='Font family' icon='text'>
        {FONT_FAMILIES.map(([fontFamily, label]) => (
          <CommandMenuItem
            key={fontFamily}
            commandName='setFontFamily'
            onSelect={() => setFontFamily(fontFamily as string)}
            enabled={setFontFamily.enabled(fontFamily as string)}
            active={active.fontFamily({ fontFamily })}
            label={<span style={{ fontFamily }}>{label}</span>}
          />
        ))}
      </DropdownButton>
    </CommandButtonGroup>
  );
};

const FontSizeButtons = () => {
  const { setFontSize } = useCommands();
  const { fontSize } = useActive();
  return (
    <DropdownButton aria-label='Set font size' icon='fontSize'>
      {FONT_SIZES.map((size) => (
        <CommandMenuItem
          key={size}
          commandName='setFontSize'
          onSelect={() => setFontSize(size)}
          enabled={setFontSize.enabled(size)}
          active={fontSize({ size })}
          label={size}
          icon={null}
          displayDescription={false}
        />
      ))}
    </DropdownButton>
  );
};

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
  new DropCursorExtension(),
  new ColumnsExtension(),
  new EmojiExtension({ data, moji: 'noto' }),
  new FindExtension(),
  new FontFamilyExtension(),
  new FontSizeExtension({ defaultSize: '16', unit: 'px' }),
  new HeadingExtension(),
  new HistoryExtension(),
];

export default function appEditor() {
  const { manager, state, onChange } = useRemirror({
    extensions: React.useCallback(extensions, []),
    core: { excludeExtensions: ['history'] },
    content:
      '<p>Remirror is a wrapper library for ProseMirror, it is an abstraction layer that makes ProseMirror easier to work with, and provides React and ProseMirror integration. ProseMirror is a toolkit for building rich text editors, it is not an out-the-box solution like Draft.JS for instance. This means ProseMirror has a steep learning curve - there are many concepts and terms to learn, and it can be difficult to structure you codebase in a logic manner. Remirror provides extensions, that abstract over various ProseMirror concepts such as schemas, commands and plugins, making it much simpler to group related logic together. Think of Remirror like Lego, you can follow the instructions to construct an out-of-the-box style editor, or as the basis of something much more bespoke, via its commands, helpers and hooks. This means we can provide both "out-of-the-box" and "bespoke" experiences, maintaining the power and flexibility that ProseMirror is known for.</p>',
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
            placeholder='Enter your text'
          >
            <Toolbar>
              <EmojiPopupComponent />
              <HistoryButtonGroup />
              <HeadingLevelButtonGroup showAll />
              <ToggleBoldButton />
              <VerticalDivider />
              <CommandButtonGroup>
                <DecreaseFontSizeButton />
                <FontSizeButtons />
                <IncreaseFontSizeButton />
              </CommandButtonGroup>
              <VerticalDivider />
              <FontFamilyButtons />
              <VerticalDivider />
              <ToggleBlockquoteButton />
              <ToggleCodeBlockButton />
              <ToggleCodeButton />
              <VerticalDivider />
              <CommandButtonGroup>
                <ToggleColumnsButton attrs={TWO_COLUMNS} />
                <ToggleColumnsButton attrs={THREE_COLUMNS} />
              </CommandButtonGroup>
              <VerticalDivider />
              <CalloutTypeButtonGroup />
            </Toolbar>
            {/* <FindReplaceComponent /> // TODO: Move this is action after text ctrl + F */}
          </Remirror>
        </ThemeProvider>
      </AllStyledComponent>
    </div>
  );
}
