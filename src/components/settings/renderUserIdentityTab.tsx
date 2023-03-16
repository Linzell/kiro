import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '$/hooks';

import UploadImage from './userIdentity/uploadImage';
import UserForm from './userIdentity/userForm';

export default function RenderUserIdentityTab() {
  const [user, setUser] = React.useState(useAppSelector((state) => state.userStore.currentUser));
  useEffect(() => {
    //
  }, [user]);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'center',
      p: { xs: '0', md: '4' },
      gap: 4,
      ariaLabel: 'user identity',
    }}>
      <UploadImage user={user} setUser={setUser} />
      <UserForm user={user} setUser={setUser} />
    </Box>
  );
}
