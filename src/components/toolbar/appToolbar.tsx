import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import BarToolbar from './barToolbar';
import RenderMenu from './renderMenu';
import RenderUserMenu from './renderUserMenu';
import RenderNotifyMenu from './renderNotifyMenu';
import RenderTranslateMenu from './renderTranslateMenu';
import RenderMobileMenu from './renderMobileMenu';
import LanguageName from '#/enums/languageEnum';

const menuId = 'primary-search-account-menu';
const menuUserId = 'primary-search-user-menu';
const menuNotifyId = 'primary-search-notify-menu';
const menuTranslateId = 'primary-search-translate-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';

export default function AppToolbar(
  props: {
    drawerWidth: number;
  },
) {
  const [language, setLanguage] = React.useState<LanguageName>(LanguageName.ENGLISH);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorUserEl, setAnchorUserEl] = React.useState<null | HTMLElement>(null);
  const [anchorNotifyEl, setAnchorNotifyEl] = React.useState<null | HTMLElement>(null);
  const [anchorTranslateEl, setAnchorTranslateEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorUserEl(event.currentTarget);
  };
  const handleNotifyMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNotifyEl(event.currentTarget);
  };
  const handleTranslateMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorTranslateEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const languages = [
    {
      name: 'English',
      code: LanguageName.ENGLISH,
      icon: '🇺🇸',
    },
    {
      name: 'Français',
      code: LanguageName.FRENCH,
      icon: '🇫🇷',
    },
    {
      name: 'Español',
      code: LanguageName.SPANISH,
      icon: '🇪🇸',
    },
    {
      name: '日本',
      code: LanguageName.JAPANESE,
      icon: '🇯🇵',
    },
    {
      name: '中文',
      code: LanguageName.CHINESE,
      icon: '🇨🇳',
    },
  ];
  return (
    <Box>
      <AppBar position="fixed"
        color="transparent"
        sx={{
          boxShadow: 'none',
          width: `calc(100% - ${props.drawerWidth}px)`,
          ml: `${props.drawerWidth}px`,
        }}>
        <BarToolbar
          menuId={menuId}
          menuUserId={menuUserId}
          menuNotifyId={menuNotifyId}
          menuTranslateId={menuTranslateId}
          mobileMenuId={mobileMenuId}
          language={language}
          languages={languages}
          handleProfileMenuOpen={handleProfileMenuOpen}
          handleUserMenuOpen={handleUserMenuOpen}
          handleNotifyMenuOpen={handleNotifyMenuOpen}
          handleTranslateMenuOpen={handleTranslateMenuOpen}
          handleMobileMenuOpen={handleMobileMenuOpen}
        />
      </AppBar>
      <RenderMenu
        menuId={menuId}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
      />
      <RenderUserMenu
        menuUserId={menuUserId}
        anchorUserEl={anchorUserEl}
        setAnchorUserEl={setAnchorUserEl}
      />
      <RenderNotifyMenu
        menuNotifyId={menuNotifyId}
        anchorNotifyEl={anchorNotifyEl}
        setAnchorNotifyEl={setAnchorNotifyEl}
      />
      <RenderTranslateMenu
        menuTranslateId={menuTranslateId}
        anchorTranslateEl={anchorTranslateEl}
        language={language}
        languages={languages}
        setLanguage={setLanguage}
        setAnchorTranslateEl={setAnchorTranslateEl}
      />
      <RenderMobileMenu
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
      />
    </Box>
  );
}
