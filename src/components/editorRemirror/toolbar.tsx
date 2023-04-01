import {
  CalloutTypeButtonGroup,
  CommandButtonGroup,
  HeadingLevelButtonGroup,
  DecreaseFontSizeButton,
  EmojiPopupComponent,
  HistoryButtonGroup,
  IncreaseFontSizeButton,
  IndentationButtonGroup,
  ListButtonGroup,
  TextAlignmentButtonGroup,
  ToggleBoldButton,
  ToggleBlockquoteButton,
  ToggleCodeBlockButton,
  ToggleCodeButton,
  ToggleColumnsButton,
  ToggleItalicButton,
  ToggleStrikeButton,
  ToggleUnderlineButton,
  Toolbar,
  VerticalDivider,
} from '@remirror/react';
import FontFamilyButtons from '@/editorRemirror/extensions/fontFamilyButtons';
import FontSizeButtons from '@/editorRemirror/extensions/fontSizeButtons';
import LineHeightButtonDropdown from './extensions/lineHeightButtonDropDown';
import COLUMNS_DATA from '@/editorRemirror/data/columnsData';

export default function toolbar() {
  return (
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
        <ToggleColumnsButton attrs={COLUMNS_DATA.two} />
        <ToggleColumnsButton attrs={COLUMNS_DATA.three} />
      </CommandButtonGroup>
      <VerticalDivider />
      <CalloutTypeButtonGroup />
    </Toolbar>
  );
}
