import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import User from '#/user';

export default function userForm(
  props: {
    user: User,
  },
) {
  return (
    <Card
      sx={{
        width: { xs: '85vw', md: '60vw' },
      }}>
      <CardActionArea>
        <CardContent>
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </CardContent>
        <CardContent>
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </CardContent>
        <CardContent>
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </CardContent>
        <CardContent>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            fullWidth
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </CardContent>
        <CardContent>
          <Button variant="contained">Save changes</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
