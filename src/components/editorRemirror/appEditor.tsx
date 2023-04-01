import React from 'react';
import { YjsExtension } from '@remirror/extension-yjs';
import { AnnotationExtension } from '@remirror/extension-annotation';
import { htmlToProsemirrorNode } from 'remirror';
import { FindExtension } from '@remirror/extension-find';
import Box from '@mui/material/Box';
import data from 'svgmoji/emoji.json';
import css from 'refractor/lang/css.js';
import javascript from 'refractor/lang/javascript.js';
import json from 'refractor/lang/json.js';
import markdown from 'refractor/lang/markdown.js';
import typescript from 'refractor/lang/typescript.js';
import rust from 'refractor/lang/rust.js';
import { cx } from '@remirror/core';
import { TableComponents, TableExtension } from '@remirror/extension-react-tables';
import {
  BlockquoteExtension,
  BoldExtension,
  BulletListExtension,
  CalloutExtension,
  CodeBlockExtension,
  CodeExtension,
  ColumnAttributes,
  ColumnsExtension,
  createMarkPositioner,
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
  ShortcutHandlerProps,
  ShortcutsExtension,
  StrikeExtension,
  TaskListExtension,
  TextColorExtension,
  UnderlineExtension,
} from 'remirror/extensions';
import { AllStyledComponent } from '@remirror/styles/emotion';
import { WebrtcProvider } from 'y-webrtc';
import * as Y from 'yjs';
import {
  CalloutTypeButtonGroup,
  CommandButton,
  CommandButtonGroup,
  CommandMenuItem,
  HeadingLevelButtonGroup,
  DecreaseFontSizeButton,
  DropdownButton,
  EmojiPopupComponent,
  FloatingToolbar,
  FloatingWrapper,
  /* FindReplaceComponent, */
  HistoryButtonGroup,
  IncreaseFontSizeButton,
  IndentationButtonGroup,
  ListButtonGroup,
  MentionAtomNodeAttributes,
  Remirror,
  TextAlignmentButtonGroup,
  ThemeProvider,
  ToggleBoldButton,
  ToggleBlockquoteButton,
  ToggleCodeBlockButton,
  ToggleCodeButton,
  ToggleColumnsButton,
  ToggleItalicButton,
  ToggleStrikeButton,
  ToggleUnderlineButton,
  Toolbar,
  useActive,
  useAttrs,
  useChainedCommands,
  useCommands,
  useCurrentSelection,
  useExtensionEvent,
  useMentionAtom,
  useUpdateReason,
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

const ALL_USERS = [
  { id: 'joe', label: 'Joe' },
  { id: 'sue', label: 'Sue' },
  { id: 'pat', label: 'Pat' },
  { id: 'tom', label: 'Tom' },
  { id: 'jim', label: 'Jim' },
];

const ALL_TAGS = [
  { id: 'cel', label: 'Celebrity' },
  { id: 'ed', label: 'Education' },
  { id: 'tech', label: 'Tech' },
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

function useLinkShortcut() {
  const [linkShortcut, setLinkShortcut] = React.useState<ShortcutHandlerProps | undefined>();
  const [isEditing, setIsEditing] = React.useState(false);

  useExtensionEvent(
    LinkExtension,
    'onShortcut',
    React.useCallback(
      (props) => {
        if (!isEditing) {
          setIsEditing(true);
        }

        return setLinkShortcut(props);
      },
      [isEditing],
    ),
  );

  return { linkShortcut, isEditing, setIsEditing };
}

function useFloatingLinkState() {
  const chain = useChainedCommands();
  const { isEditing, linkShortcut, setIsEditing } = useLinkShortcut();
  const { to, empty } = useCurrentSelection();

  const url = (useAttrs().link()?.href as string) ?? '';
  const [href, setHref] = React.useState<string>(url);

  // A positioner which only shows for links.
  const linkPositioner = React.useMemo(() => createMarkPositioner({ type: 'link' }), []);

  const onRemove = React.useCallback(() => chain.removeLink().focus().run(), [chain]);
  const updateReason = useUpdateReason();

  React.useLayoutEffect(() => {
    if (!isEditing) {
      return;
    }

    if (updateReason.doc || updateReason.selection) {
      setIsEditing(false);
    }
  }, [isEditing, setIsEditing, updateReason.doc, updateReason.selection]);

  React.useEffect(() => {
    setHref(url);
  }, [url]);

  const submitHref = React.useCallback(() => {
    setIsEditing(false);
    const range = linkShortcut ?? undefined;

    if (href === '') {
      chain.removeLink();
    } else {
      chain.updateLink({ href, auto: false }, range);
    }

    chain.focus(range?.to ?? to).run();
  }, [setIsEditing, linkShortcut, chain, href, to]);

  const cancelHref = React.useCallback(() => {
    setIsEditing(false);
  }, [setIsEditing]);

  const clickEdit = React.useCallback(() => {
    if (empty) {
      chain.selectLink();
    }

    setIsEditing(true);
  }, [chain, empty, setIsEditing]);

  return React.useMemo(
    () => ({
      href,
      setHref,
      linkShortcut,
      linkPositioner,
      isEditing,
      clickEdit,
      onRemove,
      submitHref,
      cancelHref,
    }),
    [href, linkShortcut, linkPositioner, isEditing, clickEdit, onRemove, submitHref, cancelHref],
  );
}

// eslint-disable-next-line react/prop-types
const DelayAutoFocusInput = ({ autoFocus, ...rest }: React.HTMLProps<HTMLInputElement>) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!autoFocus) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    // eslint-disable-next-line consistent-return
    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [autoFocus]);

  return <input ref={inputRef} {...rest} />;
};

const FloatingLinkToolbar = () => {
  const {
    isEditing,
    linkPositioner,
    clickEdit,
    onRemove,
    submitHref,
    href,
    setHref,
    cancelHref,
  } = useFloatingLinkState();
  const active = useActive();
  const activeLink = active.link();
  const { empty } = useCurrentSelection();

  const handleClickEdit = React.useCallback(() => {
    clickEdit();
  }, [clickEdit]);

  const linkEditButtons = activeLink ? (
    <>
      <ToggleBoldButton />
      <ToggleItalicButton />
      <ToggleStrikeButton />
      <ToggleUnderlineButton />
      <CommandButton
        commandName='updateLink'
        onSelect={handleClickEdit}
        icon='pencilLine'
        enabled
      />
      <CommandButton commandName='removeLink' onSelect={onRemove} icon='linkUnlink' enabled />
    </>
  ) : (
    <>
      <ToggleBoldButton />
      <ToggleItalicButton />
      <ToggleStrikeButton />
      <ToggleUnderlineButton />
      <CommandButton commandName='updateLink' onSelect={handleClickEdit} icon='link' enabled />
    </>
  );

  return (
    <>
      {!isEditing && <FloatingToolbar>{linkEditButtons}</FloatingToolbar>}
      {!isEditing && empty && (
        <FloatingToolbar positioner={linkPositioner}>{linkEditButtons}</FloatingToolbar>
      )}

      <FloatingWrapper
        positioner='always'
        placement='bottom'
        enabled={isEditing}
        renderOutsideEditor
      >
        <DelayAutoFocusInput
          style={{ zIndex: 20 }}
          autoFocus
          placeholder='Enter link...'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setHref(event.target.value)}
          value={href}
          onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
            const { code } = event;

            if (code === 'Enter') {
              submitHref();
            }

            if (code === 'Escape') {
              cancelHref();
            }
          }}
        />
      </FloatingWrapper>
    </>
  );
};

const MentionSuggestor: React.FC = () => {
  const [options, setOptions] = React.useState<MentionAtomNodeAttributes[]>([]);
  const {
    state,
    getMenuProps,
    getItemProps,
    indexIsHovered,
    indexIsSelected,
  } = useMentionAtom({
    items: options,
  });

  React.useEffect(() => {
    if (!state) {
      return;
    }

    const searchTerm = state.query.full.toLowerCase();
    let filteredOptions: MentionAtomNodeAttributes[] = [];

    if (state.name === 'tag') {
      filteredOptions = ALL_TAGS.filter((tag) => tag.label.toLowerCase().includes(searchTerm));
    } else if (state.name === 'at') {
      filteredOptions = ALL_USERS.filter((user) => user.label.toLowerCase().includes(searchTerm));
    }

    filteredOptions = filteredOptions.sort().slice(0, 5);
    setOptions(filteredOptions);
  }, [state]);

  const enabled = Boolean(state);

  return (
    <FloatingWrapper positioner='cursor' enabled={enabled} placement='bottom-start'>
      <div {...getMenuProps()} className='suggestions'>
        {enabled && options.map((user: { id: string, label: string }, index: number) => {
          const isHighlighted = indexIsSelected(index);
          const isHovered = indexIsHovered(index);

          return (
            <div
              key={user.id}
              className={cx('suggestion', isHighlighted && 'highlighted', isHovered && 'hovered')}
              {...getItemProps({
                item: user,
                index,
              })}
            >
              {user.label}
            </div>
          );
        })}
      </div>
    </FloatingWrapper>
  );
};

const LineHeightButtonDropdown = () => {
  const { setLineHeight } = useCommands();
  return (
    <CommandButtonGroup>
      <DropdownButton aria-label='Line height' icon='lineHeight'>
        <CommandMenuItem
          commandName='setLineHeight'
          onSelect={() => setLineHeight(1)}
          enabled={setLineHeight.enabled(1)}
          label='Narrow'
        />
        <CommandMenuItem
          commandName='setLineHeight'
          onSelect={() => setLineHeight(2)}
          enabled={setLineHeight.enabled(2)}
          label='Wide'
        />
      </DropdownButton>
    </CommandButtonGroup>
  );
};

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

export default function appEditor() {
  const { manager, state, setState } = useRemirror({
    extensions: React.useCallback(extensions, []),
    core: { excludeExtensions: ['history'] },
    selection: 'start',
    content:
      '<table><tbody><tr><td class="sidebar-pretitle">Part of <a href="https://en.wikipedia.org/wiki/Category:Law" title="Category:Law">a series</a> on</td></tr><tr><th class="sidebar-title-with-pretitle"><a class="mw-selflink selflink">Law</a></th></tr><tr><td class="sidebar-image"><a href="/wiki/File:Imbalanced_justice_scale_silhouette.svg" class="image"><img alt="Imbalanced justice scale silhouette.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Imbalanced_justice_scale_silhouette.svg/125px-Imbalanced_justice_scale_silhouette.svg.png" decoding="async" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Imbalanced_justice_scale_silhouette.svg/188px-Imbalanced_justice_scale_silhouette.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Imbalanced_justice_scale_silhouette.svg/250px-Imbalanced_justice_scale_silhouette.svg.png 2x" data-file-width="512" data-file-height="522" width="125" height="127"></a></td></tr><tr><th class="sidebar-heading" style="background:#aaddff; color:#000;">Foundations and Philosophy</th></tr><tr><td class="sidebar-content"><ul><li><a href="/wiki/Definition_of_law" class="mw-redirect" title="Definition of law">Definition</a></li><li><a href="/wiki/Philosophy_of_law" title="Philosophy of law">Philosophy</a></li><li><a href="/wiki/Legal_history" title="Legal history">History</a></li></ul></td></tr><tr><th class="sidebar-heading" style="background:#aaddff; color:#000;">Legal theory</th></tr><tr><td class="sidebar-content"><ul><li><a href="/wiki/Jurisprudence" title="Jurisprudence">Jurisprudence</a></li><li><a href="/wiki/Judicial_interpretation" title="Judicial interpretation">Judicial interpretation</a></li><li><a href="/wiki/Positive_law" title="Positive law">Positive law</a></li><li><a href="/wiki/Law_and_economics" title="Law and economics">Law and economics</a></li><li><a href="/wiki/Sociology_of_law" title="Sociology of law">Sociology of law</a></li></ul></td></tr><tr><th class="sidebar-heading" style="background:#aaddff; color:#000;">Methodological background</th></tr><tr><td class="sidebar-content"><ul><li><a href="/wiki/Normative" class="mw-redirect" title="Normative">Normative</a></li><li><a href="/wiki/Prescriptive" class="mw-redirect" title="Prescriptive">Prescriptive</a></li></ul></td></tr><tr><td class="sidebar-navbar"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><style data-mw-deduplicate="TemplateStyles:r1063604349">.mw-parser-output .navbar{display:inline;font-size:88%;font-weight:normal}.mw-parser-output .navbar-collapse{float:left;text-align:left}.mw-parser-output .navbar-boxtext{word-spacing:0}.mw-parser-output .navbar ul{display:inline-block;white-space:nowrap;line-height:inherit}.mw-parser-output .navbar-brackets::before{margin-right:-0.125em;content:"[ "}.mw-parser-output .navbar-brackets::after{margin-left:-0.125em;content:" ]"}.mw-parser-output .navbar li{word-spacing:-0.125em}.mw-parser-output .navbar a>span,.mw-parser-output .navbar a>abbr{text-decoration:inherit}.mw-parser-output .navbar-mini abbr{font-variant:small-caps;border-bottom:none;text-decoration:none;cursor:inherit}.mw-parser-output .navbar-ct-full{font-size:114%;margin:0 7em}.mw-parser-output .navbar-ct-mini{font-size:114%;margin:0 4em}</style><div class="navbar plainlinks hlist navbar-mini"><ul><li class="nv-view"><a href="/wiki/Template:Law_sidebar" title="Template:Law sidebar"><abbr title="View this template">v</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:Law_sidebar" title="Template talk:Law sidebar"><abbr title="Discuss this template">t</abbr></a></li><li class="nv-edit"><a class="external text" href="https://en.wikipedia.org/w/index.php?title=Template:Law_sidebar&amp;action=edit"><abbr title="Edit this template">e</abbr></a></li></ul></div></td></tr></tbody></table>',
    stringHandler: htmlToProsemirrorNode,
  });
  return (
    <div className='remirror-theme'>
      <AllStyledComponent>
        <ThemeProvider>
          <Remirror
            manager={manager}
            autoFocus
            onChange={(parameter) => {
              let nextState = parameter.state;
              // Check if the document content for the editor changed.
              if (parameter.tr?.docChanged) {
                // Insert text into the editor via a new state.
                nextState = state.applyTransaction(state.tr.insertText(' NO!!!')).state;
              }
              // Update the state to the latest value.
              setState(nextState);
            }}
            initialContent={state}
            autoRender='end'
            placeholder='Enter your text'
          >
            <Toolbar>
              <EmojiPopupComponent />
              <HistoryButtonGroup />
              <HeadingLevelButtonGroup showAll />
              <ToggleBoldButton />
              <ToggleItalicButton />
              <ToggleStrikeButton />
              <ToggleUnderlineButton />
              <VerticalDivider />
              <CommandButtonGroup>
                <DecreaseFontSizeButton />
                <FontSizeButtons />
                <IncreaseFontSizeButton />
              </CommandButtonGroup>
              <VerticalDivider />
              <TextAlignmentButtonGroup />
              <IndentationButtonGroup />
              <LineHeightButtonDropdown />
              <FontFamilyButtons />
              <VerticalDivider />
              <ToggleBlockquoteButton />
              <ToggleCodeBlockButton />
              <ToggleCodeButton />
              <ListButtonGroup />
              <VerticalDivider />
              <CommandButtonGroup>
                <ToggleColumnsButton attrs={TWO_COLUMNS} />
                <ToggleColumnsButton attrs={THREE_COLUMNS} />
              </CommandButtonGroup>
              <VerticalDivider />
              <CalloutTypeButtonGroup />
            </Toolbar>
            <MentionSuggestor />
            <FloatingLinkToolbar />
            <TableComponents />
            {/* <FindReplaceComponent /> // TODO: Move this is action after text ctrl + F */}
          </Remirror>
        </ThemeProvider>
      </AllStyledComponent>
    </div>
  );
}
