import React from 'react';
import moment from 'moment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Notification from '#/notification';
import NotificationImageModule from '@/modules/notificationImageModule';

export default function renderNotify(
  props: {
    menuNotifyId: string;
    anchorNotifyEl: null | HTMLElement;
    setAnchorNotifyEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
  },
) {
  const notifications = [
    new Notification(
      '',
      'src/static/dragon-wiggle.gif',
      'A super new page has been created',
      'This is a description of the new page',
      new Date(),
    ),
    new Notification(
      '',
      'src/static/dragon-wiggle.gif',
      'A super user has been created',
      'This is a description of the new user',
      new Date(),
    ),
  ];
  const handleMenuClose = () => {
    props.setAnchorNotifyEl(null);
  };
  const isMenuOpen = Boolean(props.anchorNotifyEl);
  return (
    <Menu
      anchorEl={props.anchorNotifyEl}
      id={props.menuNotifyId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 1,
        sx: {
          overflow: 'visible',
          width: 300,
          maxHeight: 450,
          overflowY: 'auto',
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <ListItem>
        <ListItemText
          primary="Notifications"
          secondary={`You have ${notifications.length} new notifications`}
        />
        <ListItemIcon>
          <DoneAllIcon fontSize="small" color="success" />
        </ListItemIcon>
      </ListItem>
      <Divider />
      <Typography variant="caption" sx={{ px: 2, py: 1 }}>
        <strong>NEW</strong>
      </Typography>
      {
        notifications.map((notification, key) => (
          <MenuItem key={key} onClick={handleMenuClose} sx={{
            width: '100%',
            maxWidth: 300,
            whiteSpace: 'normal',
            backgroundColor: 'grey.200',
            mt: 0.1,
          }}>
            <NotificationImageModule notification={notification} />
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="subtitle2"
                    color="text.primary"
                  >
                    <strong>{notification.title}</strong>
                    {' '}
                  </Typography>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="caption"
                    color="grey.600"
                  >
                    {notification.description}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <ListItemIcon sx={{ alignItems: 'center' }}>
                    <AccessTimeFilledIcon fontSize="inherit" color="action" />
                    <Typography variant="caption" color="grey.500" sx={{ ml: 1, fontSize: '0.8rem' }}>
                      {moment(notification.date).fromNow()}
                    </Typography>
                  </ListItemIcon>
                </React.Fragment>
              }
            />
          </MenuItem>
        ))
      }
      <Typography variant="caption" sx={{ px: 2, py: 1 }}>
        <strong>BEFORE THAT</strong>
      </Typography>
      {
        notifications.map((notification, key) => (
          <MenuItem key={key} onClick={handleMenuClose} sx={{
            width: '100%',
            maxWidth: 300,
            whiteSpace: 'normal',
            mt: 0.1,
          }}>
            <NotificationImageModule notification={notification} />
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="subtitle2"
                    color="text.primary"
                  >
                    <strong>{notification.title}</strong>
                    {' '}
                  </Typography>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="caption"
                    color="grey.600"
                  >
                    {notification.description}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <ListItemIcon sx={{ alignItems: 'center' }}>
                    <AccessTimeFilledIcon fontSize="inherit" color="action" />
                    <Typography variant="caption" color="grey.500" sx={{ ml: 1, fontSize: '0.8rem' }}>
                      {moment(notification.date).fromNow()}
                    </Typography>
                  </ListItemIcon>
                </React.Fragment>
              }
            />
          </MenuItem>
        ))
      }
      <Divider />
      <MenuItem onClick={handleMenuClose} sx={{
        ml: 1,
        mr: 1,
        borderRadius: 2,
      }}>
        <Typography
          component="span"
          variant="subtitle2"
          sx={{
            width: '100%',
            color: 'success.main',
            textAlign: 'center',
          }}
        >
          <strong>View all</strong>
        </Typography>
      </MenuItem>
    </Menu>
  );
}
