import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';

const AntTabs = styled(Tabs)({
  maxHeight: 60,
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

export default AntTabs;
