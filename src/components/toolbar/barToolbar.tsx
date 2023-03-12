import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import GroupIcon from '@mui/icons-material/Group';
import { useAppSelector } from '$/hooks';
import AvatarModule from '@/modules/avatarModule';
import LanguageName from '#/enums/languageEnum';
import Search from './styles/search';
import SearchIconWrapper from './styles/searchIconWrapper';
import StyledInputBase from './styles/styledInputBase';
import StyledIconButton from './styles/styledIconButton';

export default function BarToolbar(
  props: {
    menuId: string;
    mobileMenuId: string;
    menuUserId: string;
    menuNotifyId: string;
    menuTranslateId: string;
    language: LanguageName;
    languages: { name: string; code: LanguageName; icon: string; }[]
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleUserMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleNotifyMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleTranslateMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  },
) {
  const [user] = React.useState(useAppSelector((state) => state.userStore.currentUser));
  const [usersLength] = React.useState(useAppSelector((state) => state.userStore.users.length));
  return (
    <Toolbar sx={{
      display: 'flex',
      m: 1.5,
      gap: 1.5,
    }} >
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="open menu"
          aria-haspopup="true"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <StyledIconButton
          aria-label="change language"
          aria-controls={props.menuTranslateId}
          aria-haspopup="true"
          onClick={props.handleTranslateMenuOpen}
        >
          {props.languages.find((language) => language.code === props.language)?.icon}
        </StyledIconButton>
        <StyledIconButton
          aria-label="show 2 new notifications"
          aria-controls={props.menuNotifyId}
          aria-haspopup="true"
          onClick={props.handleNotifyMenuOpen}
        >
          <Badge badgeContent={2} color="warning">
            <NotificationsIcon />
          </Badge>
        </StyledIconButton>
        <StyledIconButton
          aria-label="show users online"
          aria-controls={props.menuUserId}
          aria-haspopup="true"
          onClick={props.handleUserMenuOpen}
        >
          <Badge badgeContent={usersLength} color="warning">
            <GroupIcon />
          </Badge>
        </StyledIconButton>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <StyledIconButton
          aria-label="account of current user"
          aria-controls={props.menuId}
          aria-haspopup="true"
          onClick={props.handleProfileMenuOpen}
          sx={{ p: 0 }}
        >
          <AvatarModule user={user} />
        </StyledIconButton>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={props.mobileMenuId}
          aria-haspopup="true"
          onClick={props.handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
    </Toolbar>
  );
}
