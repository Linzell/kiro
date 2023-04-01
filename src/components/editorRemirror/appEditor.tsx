import React from 'react';
import { htmlToProsemirrorNode } from 'remirror';
import { TableComponents } from '@remirror/extension-react-tables';
import {
  ColumnAttributes,
} from 'remirror/extensions';
import { AllStyledComponent } from '@remirror/styles/emotion';
import {
  CalloutTypeButtonGroup,
  CommandButtonGroup,
  HeadingLevelButtonGroup,
  DecreaseFontSizeButton,
  EmojiPopupComponent,
  /* FindReplaceComponent, */
  HistoryButtonGroup,
  IncreaseFontSizeButton,
  IndentationButtonGroup,
  ListButtonGroup,
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
  useRemirror,
  VerticalDivider,
} from '@remirror/react';
import FontFamilyButtons from '@/editorRemirror/extensions/fontFamilyButtons';
import FontSizeButtons from '@/editorRemirror/extensions/fontSizeButtons';
import FloatingLinkToolbar from '@/editorRemirror/floatingLinkToolbar';
import LineHeightButtonDropdown from './extensions/lineHeightButtonDropDown';
import MentionSuggestor from '@/editorRemirror/extensions/mentionSuggestor';
import extensions from './extensions';

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
