import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import { useAppSelector } from '$/hooks';

export default function renderMobileMenu(
  props: {
    mobileMoreAnchorEl: null | HTMLElement;
    mobileMenuId: string;
    handleMobileMenuClose: () => void;
  },
) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const usersLength = useAppSelector((state) => state.userStore.users).length;
  const user = useAppSelector((state) => state.userStore.currentUser);
  const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl);
  const redirectTo = (path: string) => navigate(path);
  return (
    <Menu
      anchorEl={props.mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={props.mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={props.handleMobileMenuClose}
      aria-label={`${t('menu.menu')}`}
    >
      <MenuItem onClick={() => redirectTo('notifications')}
        aria-label={`${t('menu.notifications')}`}
        role="button"
      >
        <IconButton
          size="large"
          aria-label={`${t('menu.notifications')}`}
          color="inherit"
        >
          <Badge badgeContent={2} color="warning">
            <NotificationsIcon color="action" />
          </Badge>
        </IconButton>
        <p>{t('menu.notifications')}</p>
      </MenuItem>
      <MenuItem onClick={() => redirectTo('contacts')}
        aria-label={`${t('menu.contacts')}`}
        role="button"
      >
        <IconButton
          size="large"
          aria-label={`${t('menu.contacts')}`}
          color="inherit"
        >
          <Badge badgeContent={usersLength} color="warning">
            <GroupIcon color="action" />
          </Badge>
        </IconButton>
        <p>{t('menu.contacts')}</p>
      </MenuItem>
      <MenuItem onClick={() => redirectTo(`/user/${user.publicKey}`)}
        aria-label={`${t('menu.goToThePageFrom')} ${user.name}`}
        role="button"
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle color="action" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={() => redirectTo('about')}
        aria-label={`${t('menu.goToTheAboutPage')}`}
        role="button"
      >
        <IconButton
          size="large"
          aria-label={`${t('menu.about')}`}
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <InfoIcon color="info" />
        </IconButton>
        <p>{t('menu.about')}</p>
      </MenuItem>
      <MenuItem onClick={() => redirectTo('settings')}
        aria-label={`${t('menu.goToTheSettingsPage')}`}
        role="button"
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Settings color="disabled" />
        </IconButton>
        <p>{t('menu.settings')}</p>
      </MenuItem>
      <MenuItem
        aria-label={`${t('menu.logout')}`}
        role="button"
      >
        <IconButton
          size="large"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Logout color="error" />
        </IconButton>
        <p>{t('menu.logout')}</p>
      </MenuItem>
    </Menu>
  );
}
