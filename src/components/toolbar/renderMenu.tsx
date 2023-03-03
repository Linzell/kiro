import React from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';

export default function renderMenu(
  props: {
    anchorEl: null | HTMLElement;
    menuId: string;
    setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
    handleMobileMenuClose: () => void;
  },
) {
  const handleMenuClose = () => {
    props.setAnchorEl(null);
    props.handleMobileMenuClose();
  };
  const isMenuOpen = Boolean(props.anchorEl);
  return (
    <Menu
      anchorEl={props.anchorEl}
      id="account-menu"
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 42,
            height: 42,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {/* // TODO: Faire un module pour les Avatars */}
      <MenuItem onClick={handleMenuClose}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Charlie Cohen"
              src="src/static/dragon-wiggle.gif"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Charlie Cohen"
            secondary="sdgsdgsdg"
          />
        </ListItem>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <InfoIcon fontSize="small" color="info" />
        </ListItemIcon>
        About
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Settings fontSize="small" color="disabled" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Logout fontSize="small" color="error" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}
