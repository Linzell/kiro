import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import GroupIcon from '@mui/icons-material/Group';
import Translate from '@mui/icons-material/Translate';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// TODO: A remplacer par module avatar
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: 'action',
  margin: 2,
  '&:hover': {
    color: theme.palette.primary.main,
    animation: 'pulse 1s infinite',
    '@keyframes pulse': {
      '0%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: 'scale(1.1)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  },
}));

export default function BarToolbar(
  props: {
    menuId: string;
    mobileMenuId: string;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  },
) {
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
        <StyledIconButton aria-label="change language">
          <Translate />
        </StyledIconButton>
        <StyledIconButton aria-label="show 17 new notifications">
          <Badge badgeContent={17} color="warning">
            <NotificationsIcon />
          </Badge>
        </StyledIconButton>
        <StyledIconButton aria-label="show 4 messages">
          <Badge badgeContent={4} color="warning">
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
        > {/* // TODO: Remplacer par le module Avatar */}
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar
              alt="Charlie Cohen"
              src="src/static/dragon-wiggle.gif"
            />
          </StyledBadge>
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
