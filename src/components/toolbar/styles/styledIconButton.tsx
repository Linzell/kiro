import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.action.active,
  margin: 2,
  '&:hover': {
    color: theme.palette.primary.main,
    animation: 'pulse 1s infinite',
    '@keyframes pulse': {
      '0%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: 'scale(1.1)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  },
}));

export default StyledIconButton;
