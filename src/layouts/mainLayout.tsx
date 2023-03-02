import React from 'react';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MenuDrawerLayout from './menuDrawerlayout';
import ToolbarLayout from './toolbarLayout';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ToolbarLayout open={open} handleDrawerOpen={handleDrawerOpen} />
      <MenuDrawerLayout open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
