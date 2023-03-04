import React from 'react';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import AvatarModule from '@/modules/avatarModule';
import NewUser from '#/factorys/userFactory';

export default function renderMenu(
  props: {
    anchorEl: null | HTMLElement;
    menuId: string;
    setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
    handleMobileMenuClose: () => void;
  },
) {
  // TODO: Replace this with a real user
  const user = new NewUser().factoryMethod(
    '123456789',
    'd4fg56df4g654df65g4d65f4g65df4',
  );
  const handleMenuClose = () => {
    props.setAnchorEl(null);
    props.handleMobileMenuClose();
  };
  const isMenuOpen = Boolean(props.anchorEl);
  return (
    <Menu
      anchorEl={props.anchorEl}
      id={props.menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          maxWidth: 280,
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
      <MenuItem onClick={handleMenuClose} sx={{
        ml: 1,
        mr: 1,
        borderRadius: 2,
      }}>
        <AvatarModule user={user} />
        <Tooltip title={`Go to the ${user.name} page`} placement='top'>
          <ListItemText
            primary={user.name}
            secondary={user.publicKey}
            sx={{ ml: 1.5, overflow: 'hidden' }}
          />
        </Tooltip>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose} sx={{
        ml: 1,
        mr: 1,
        borderRadius: 2,
      }}>
        <ListItemIcon>
          <InfoIcon fontSize="small" color="info" />
        </ListItemIcon>
        About
      </MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{
        ml: 1,
        mr: 1,
        borderRadius: 2,
      }}>
        <ListItemIcon>
          <Settings fontSize="small" color="disabled" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{
        ml: 1,
        mr: 1,
        borderRadius: 2,
      }}>
        <ListItemIcon>
          <Logout fontSize="small" color="error" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}
