import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Notification from '#/notification';

export default function AvatarModule(
  props: {
    notification: Notification;
  },
) {
  return (
    <ListItemAvatar>
      <Avatar alt={props.notification.title} src={props.notification.imgUrl} />
    </ListItemAvatar>
  );
}
