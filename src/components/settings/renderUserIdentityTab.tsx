import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '$/hooks';
import UploadImage from './userIdentity/uploadImage';

export default function RenderUserIdentityTab() {
  const currentUser = useAppSelector((state) => state.userStore.currentUser);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'center',
      p: { xs: '0', md: '4' },
      gap: 4,
      ariaLabel: 'user identity',
    }}>
      <UploadImage user={currentUser} />
      <Card sx={{ width: { xs: '85vw', md: '60vw' } }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
