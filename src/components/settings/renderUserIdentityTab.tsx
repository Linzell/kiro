import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function RenderUserIdentityTab() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'center',
      p: { xs: '0', md: '2' },
      gap: 4,
      ariaLabel: 'user identity',
    }}>
      <Card sx={{ maxWidth: { xs: '90vw', md: '30vw' } }}>
        <CardMedia
          component="img"
          sx={{ width: '30vw', p: 2 }}
          image="/static/u1f337_u1f999.png"
          alt="Live from space album cover"
        />
      </Card>
      <Card sx={{ maxWidth: { xs: '90vw', md: '60vw' } }}>
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
