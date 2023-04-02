import Box from '@mui/material/Box';
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
} from '@remirror/react';
import FontFamilyButtons from '@/editorRemirror/extensions/fontFamilyButtons';
import FontSizeButtons from '@/editorRemirror/extensions/fontSizeButtons';
import LineHeightButtonDropdown from './extensions/lineHeightButtonDropDown';
import COLUMNS_DATA from '@/editorRemirror/data/columnsData';

export default function toolbar() {
  return (
    <>
      <Box sx={{
        display: { xs: 'flex', sm: 'none', md: 'none' },
        flexDirection: 'column',
        maxWidth: '100%',
        alignItems: 'center',
        width: '100%',
        gap: '0.1rem',
        backgroundColor: 'background.transparent',
      }}>
        <EmojiPopupComponent />
        <Toolbar>
          <HeadingLevelButtonGroup showAll />
          <HistoryButtonGroup />
          <LineHeightButtonDropdown />
        </Toolbar>
        <Toolbar>
          <ToggleBoldButton />
          <ToggleItalicButton />
          <ToggleStrikeButton />
          <ToggleUnderlineButton />
          <CommandButtonGroup>
            <DecreaseFontSizeButton />
            <FontSizeButtons />
            <IncreaseFontSizeButton />
          </CommandButtonGroup>
        </Toolbar>
        <Toolbar>
          <TextAlignmentButtonGroup />
          <ToggleBlockquoteButton />
          <ToggleCodeBlockButton />
          <ToggleCodeButton />
        </Toolbar>
        <Toolbar>
          <ListButtonGroup />
          <CommandButtonGroup>
            <ToggleColumnsButton attrs={COLUMNS_DATA.two} />
            <ToggleColumnsButton attrs={COLUMNS_DATA.three} />
          </CommandButtonGroup>
          <IndentationButtonGroup />
        </Toolbar>
      </Box>
      <Box sx={{
        display: { xs: 'none', sm: 'flex', md: 'flex' },
        flexDirection: 'column',
        maxWidth: '100%',
        width: '100%',
        gap: '0.5rem',
        backgroundColor: 'background.transparent',
      }}>
        <EmojiPopupComponent />
        <Toolbar>
          <HeadingLevelButtonGroup showAll />
          <HistoryButtonGroup />
          <LineHeightButtonDropdown />
          <FontFamilyButtons />
          <ToggleBoldButton />
          <ToggleItalicButton />
          <ToggleStrikeButton />
          <ToggleUnderlineButton />
          <CommandButtonGroup>
            <DecreaseFontSizeButton />
            <FontSizeButtons />
            <IncreaseFontSizeButton />
          </CommandButtonGroup>
        </Toolbar>
        <Toolbar>
          <TextAlignmentButtonGroup />
          <IndentationButtonGroup />
          <ToggleBlockquoteButton />
          <ToggleCodeBlockButton />
          <ToggleCodeButton />
          <ListButtonGroup />
          <CommandButtonGroup>
            <ToggleColumnsButton attrs={COLUMNS_DATA.two} />
            <ToggleColumnsButton attrs={COLUMNS_DATA.three} />
          </CommandButtonGroup>
          <CalloutTypeButtonGroup />
        </Toolbar>
      </Box>
    </>
  );
}
