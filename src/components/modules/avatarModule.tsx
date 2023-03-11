import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import User from '#/user';
import StyledBadge from './styles/styleBadge';

export default function AvatarModule(
  props: {
    user: User;
  },
) {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      color={props.user.getStatusColor()}
    >
      {props.user
        ? <Avatar alt={props.user.name} src={props.user.imgUrl} />
        : <AccountCircle color="action" />
      }
    </StyledBadge>
  );
}
