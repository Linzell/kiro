import React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

interface StyledTabProps {
  label: string;
  icon: React.ReactElement;
  iconPosition: string;
}

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {
    children,
    value,
    index,
    ...other
  } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function appTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab icon={<PhoneIcon />} iconPosition="start" label="General" />
          <AntTab icon={<PhoneIcon />} iconPosition="start" label="Billing" />
          <AntTab icon={<PhoneIcon />} iconPosition="start" label="Notifications" />
          <AntTab icon={<PhoneIcon />} iconPosition="start" label="Social links" />
          <AntTab icon={<PhoneIcon />} iconPosition="start" label="Change password" />
        </AntTabs>
      </Box>
      <Box sx={{ bgcolor: '#fff' }}>
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
