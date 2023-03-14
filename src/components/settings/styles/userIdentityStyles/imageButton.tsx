import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  width: 200,
  height: 200,
  border: '2px dashed lightGrey',
  borderRadius: '50%',
  margin: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 200,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.30,
    },
  },
}));

export default ImageButton;
