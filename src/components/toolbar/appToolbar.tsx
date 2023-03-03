import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import BarToolbar from './barToolbar';
import RenderMenu from './renderMenu';
import RenderMobileMenu from './renderMobileMenu';

const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';

export default function AppToolbar(
  props: {
    drawerWidth: number;
  },
) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
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
          mobileMenuId={mobileMenuId}
          handleProfileMenuOpen={handleProfileMenuOpen}
          handleMobileMenuOpen={handleMobileMenuOpen}
        />
      </AppBar>
      <RenderMenu
        anchorEl={anchorEl}
        menuId={menuId}
        setAnchorEl={setAnchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
      />
      <RenderMobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        handleMobileMenuClose={handleMobileMenuClose}
      />
    </Box>
  );
}
