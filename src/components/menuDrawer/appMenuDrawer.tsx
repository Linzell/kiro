import React from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';

export default function AppMenuDrawer(
  props: {
    drawerWidth: number;
  },
) {
  const navigate = useNavigate();
  const redirectTo = (path: string) => navigate(path);
  const generalRoutes = [
    {
      name: 'Home',
      icon: <InboxIcon />,
      path: '/',
    },
    {
      name: 'items',
      icon: <MailIcon />,
      path: '/items',
    },
    {
      name: 'About',
      icon: <MailIcon />,
      path: '/about',
    },
  ];
  return (
    <Drawer
      sx={{
        width: `${props.drawerWidth}%`,
        maxWidth: '20rem',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: `${props.drawerWidth}%`,
          maxWidth: '20rem',
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar
        onClick={() => redirectTo('/')}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          bgcolor: 'background.paper',
          color: 'text.primary',
          cursor: 'pointer',
          mt: 1.5,
          mb: 1.5,
          '& svg': {
            m: 1,
          },
          '& hr': {
            mx: 0.5,
          },
        }}>
        <img src="src/static/u1f337_u1f999.png" alt="Logo" width={40} height={40} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemText
          primary={
            <React.Fragment>
              <Typography variant='body1'>
                キロ (Kiro)
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography variant='caption'>
                A decentralized social editor
              </Typography>
            </React.Fragment>
          }
          sx={{
            ml: 2,
          }}
        />
      </Toolbar>
      <List>
        <Typography variant="overline" sx={{
          px: 2,
          py: 0,
          color: 'text.secondary',
          fontSize: '0.6rem',
        }}>
          <strong>Général</strong>
        </Typography>
        {generalRoutes.map((value, key) => (
          <ListItem key={key} disablePadding
            sx={{
              backgroundColor: value.path === window.location.pathname ? 'primary.light' : 'transparent',
              ml: 1,
              mr: 1,
              mt: 0.2,
              mb: 0.2,
              width: 'calc(100% - 1rem)',
              borderRadius: 2,
            }}
            onClick={() => redirectTo(value.path)}
          >
            <ListItemButton>
              <ListItemIcon sx={{
                color: value.path === window.location.pathname ? 'primary.contrastText' : 'text.primary',
                opacity: 1,
              }}>
                {value.icon}
              </ListItemIcon>
              <ListItemText primary={value.name} sx={{
                color: value.path === window.location.pathname ? 'primary.contrastText' : 'text.primary',
              }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Typography variant="overline" sx={{
          px: 2,
          py: 0,
          color: 'text.secondary',
          fontSize: '0.6rem',
        }}>
          <strong>Applications</strong>
        </Typography>
        {generalRoutes.map((value, key) => (
          <ListItem key={key} disablePadding
            sx={{
              backgroundColor: value.path === window.location.pathname ? 'primary.light' : 'transparent',
              ml: 1,
              mr: 1,
              mt: 0.2,
              mb: 0.2,
              width: 'calc(100% - 1rem)',
              borderRadius: 2,
            }}
            onClick={() => redirectTo(value.path)}
          >
            <ListItemButton>
              <ListItemIcon sx={{
                color: value.path === window.location.pathname ? 'primary.contrastText' : 'text.primary',
                opacity: 1,
              }}>
                {value.icon}
              </ListItemIcon>
              <ListItemText primary={value.name} sx={{
                color: value.path === window.location.pathname ? 'primary.contrastText' : 'text.primary',
              }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
