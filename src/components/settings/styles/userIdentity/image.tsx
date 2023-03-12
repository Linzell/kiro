import { styled } from '@mui/material/styles';

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  left: 4,
  right: 4,
  top: 4,
  bottom: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

export default Image;
