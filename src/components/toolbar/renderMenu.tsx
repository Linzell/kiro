import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import { useAppSelector } from '$/hooks';
import AvatarModule from '@/modules/avatarModule';

export default function renderMenu(
  props: {
    anchorEl: null | HTMLElement;
    menuId: string;
    setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
    handleMobileMenuClose: () => void;
  },
) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.userStore.currentUser);
  const redirectTo = (path: string) => navigate(path);
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
      aria-label={`${t('menu.menu')}`}
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
      <Tooltip title={`${t('menu.goToThePageFrom')} ${user.name}`} placement='top'>
        <MenuItem onClick={() => redirectTo(`/user/${user.publicKey}`)}
          aria-label={`Go to the ${user.name} page`}
          role="button"
          sx={{
            ml: 1,
            mr: 1,
            borderRadius: 2,
          }}>
          <AvatarModule user={user} />
          <ListItemText
            primary={user.name}
            secondary={user.publicKey}
            sx={{ ml: 2, mr: 2, overflow: 'hidden' }}
          />
        </MenuItem>
      </Tooltip>
      <Divider />
      <Tooltip title={t('menu.goToTheHomePage')} placement='top'>
        <MenuItem onClick={() => redirectTo('/')}
          aria-label={`${t('menu.goToTheHomePage')}`}
          role="button"
          sx={{
            ml: 1,
            mr: 1,
            borderRadius: 2,
          }}>
          <ListItemIcon>
            <InfoIcon fontSize="small" color="info" />
          </ListItemIcon>
          {t('menu.home')}
        </MenuItem>
      </Tooltip>
      <Tooltip title={t('menu.goToTheAboutPage')} placement='top'>
        <MenuItem onClick={() => redirectTo('about')}
          aria-label={`${t('menu.goToTheAboutPage')}`}
          role="button"
          sx={{
            ml: 1,
            mr: 1,
            borderRadius: 2,
          }}>
          <ListItemIcon>
            <InfoIcon fontSize="small" color="info" />
          </ListItemIcon>
          {t('menu.about')}
        </MenuItem>
      </Tooltip>
      <Tooltip title={t('menu.goToTheSettingsPage')} placement='top'>
        <MenuItem onClick={() => redirectTo('settings')}
          aria-label={`${t('menu.goToTheSettingsPage')}`}
          role="button"
          sx={{
            ml: 1,
            mr: 1,
            borderRadius: 2,
          }}>
          <ListItemIcon>
            <Settings fontSize="small" color="disabled" />
          </ListItemIcon>
          {t('menu.settings')}
        </MenuItem>
      </Tooltip>
      <Divider />
      <Tooltip title={t('menu.logout')} placement='top'>
        <MenuItem onClick={handleMenuClose}
          aria-label={`${t('menu.logout')}`}
          role="button"
          sx={{
            ml: 1,
            mr: 1,
            borderRadius: 2,
          }}>
          <ListItemIcon>
            <Logout fontSize="small" color="error" />
          </ListItemIcon>
          {t('menu.logout')}
        </MenuItem>
      </Tooltip>
    </Menu>
  );
}
