import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ShareIcon from '@mui/icons-material/Share';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BadgeIcon from '@mui/icons-material/Badge';
import AntTabs from './styles/antTabs';
import AntTab from './styles/antTab';
import TabPanel from './styles/tabPannel';
import RenderUserIdentityTab from './renderUserIdentityTab';
import RenderBillingTab from './renderBillingTab';
import RenderNotificationsTab from './renderNotificationsTab';
import RenderSocialTab from './renderSocialTab';
import RenderAppidentityTab from './renderAppidentityTab';

export default function appTabs() {
  const { t } = useTranslation();
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
          <AntTab icon={<BadgeIcon fontSize="inherit" />} label={t('settings.userIdentity')} />
          <AntTab icon={<CreditCardIcon fontSize="inherit" />} label={t('settings.billing')} />
          <AntTab icon={<NotificationsActiveIcon fontSize="inherit" />} label={t('settings.notifications')} />
          <AntTab icon={<ShareIcon fontSize="inherit" />} label={t('settings.social')} />
          <AntTab icon={<FingerprintIcon fontSize="inherit" />} label={t('settings.appIdentity')} />
        </AntTabs>
      </Box>
      <Box sx={{ mt: 2 }}>
        <TabPanel value={value} index={0}>
          <RenderUserIdentityTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RenderBillingTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <RenderNotificationsTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <RenderSocialTab />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <RenderAppidentityTab />
        </TabPanel>
      </Box>
    </Box>
  );
}
