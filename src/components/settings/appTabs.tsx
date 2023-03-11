import React from 'react';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import AntTabs from './styles/antTabs';
import AntTab from './styles/antTab';
import TabPanel from './styles/tabPannel';

export default function appTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <AntTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="ant example"
        >
          <AntTab icon={<PhoneIcon fontSize="inherit" />} label="General" />
          <AntTab icon={<PhoneIcon fontSize="inherit" />} label="Billing" />
          <AntTab icon={<PhoneIcon fontSize="inherit" />} label="Notifications" />
          <AntTab icon={<PhoneIcon fontSize="inherit" />} label="Social links" />
          <AntTab icon={<PhoneIcon fontSize="inherit" />} label="Change password" />
        </AntTabs>
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <h3>General</h3>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h3>Billing</h3>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h3>Notifications</h3>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <h3>Social links</h3>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <h3>Change password</h3>
        </TabPanel>
      </Box>
    </Box>
  );
}
