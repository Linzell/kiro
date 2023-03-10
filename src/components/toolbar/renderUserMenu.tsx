import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { useAppSelector } from '$/hooks';
import AvatarModule from '@/modules/avatarModule';

export default function RenderUserMenu(
  props: {
    menuUserId: string;
    anchorUserEl: null | HTMLElement;
    setAnchorUserEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
  },
) {
  const users = useAppSelector((state) => state.userStore.users);
  const handleMenuClose = () => {
    props.setAnchorUserEl(null);
  };
  const isMenuOpen = Boolean(props.anchorUserEl);
  return (
    <Menu
      anchorEl={props.anchorUserEl}
      id={props.menuUserId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 1,
        sx: {
          overflow: 'visible',
          width: 300,
          maxHeight: 450,
          overflowY: 'auto',
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
      <Typography gutterBottom variant="h6" component="div" sx={{ m: 1, ml: 2 }}>
        <strong>Contacts</strong> ({users.length})
      </Typography>
      {
        users.map((user, key) => (
          <MenuItem key={key} onClick={handleMenuClose} sx={{
            ml: 1,
            mr: 1,
            borderRadius: 2,
          }}>
            <AvatarModule user={user} />
            <Tooltip title={`Start a chat with ${user.name}`} placement='top'>
              <ListItemText
                primary={user.name}
                secondary={user.onlineStatus === 'offline' ? 'Offline' : ''}
                sx={{ ml: 1.5 }}
              />
            </Tooltip>
          </MenuItem>
        ))
      }
    </Menu>
  );
}
