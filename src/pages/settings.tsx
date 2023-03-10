import Box from '@mui/material/Box';
import AppTabs from '@/settings/appTabs';
import BreadCrumbsModule from '@/modules/breadCrumbsModule';

export default function settings() {
  return (
    <Box>
      <BreadCrumbsModule />
      <AppTabs />
    </Box>
  );
}
