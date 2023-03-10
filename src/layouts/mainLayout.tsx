import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MenuDrawerLayout from './menuDrawerlayout';
import ToolbarLayout from './toolbarLayout';

const drawerWidth = 15;

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
      <Box component="main" sx={{
        flexGrow: 1,
        /* TODO: Changer pour mettre la couleur primaire du thème */
        background: 'linear-gradient(to right bottom, white 50%, tomato)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: `calc(100% - ${drawerWidth}%)`,
        height: '100vh',
        ml: { xs: 0, md: `calc(${drawerWidth}%)` },
      }}>
        <Toolbar />
        <Box sx={{
          m: 4,
        }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
