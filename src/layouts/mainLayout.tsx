import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MenuDrawerLayout from './menuDrawerlayout';
import ToolbarLayout from './toolbarLayout';

const drawerWidth = 280;

export default function MiniDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <ToolbarLayout drawerWidth={0} />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <ToolbarLayout drawerWidth={drawerWidth} />
        <MenuDrawerLayout drawerWidth={drawerWidth} />
      </Box>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
