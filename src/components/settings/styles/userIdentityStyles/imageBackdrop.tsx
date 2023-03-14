import { styled } from '@mui/material/styles';

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  left: 4,
  right: 4,
  top: 4,
  bottom: 4,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}));

export default ImageBackdrop;
