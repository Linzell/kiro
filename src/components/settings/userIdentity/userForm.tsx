import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import User from '#/user';

export default function userForm(
  props: {
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>,
  },
) {
  const [user, setUser] = React.useState(props.user);
  useEffect(() => {
    setUser(props.user);
  }, [props.user]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    user[event.target.id] = event.target.value;
    setUser(user);
    props.setUser(user);
  };
  return (
    <Card
      sx={{
        width: { xs: '85vw', md: '60vw' },
        padding: 2,
      }}>
      <CardContent
        sx={{
          display: 'flex',
          gap: 2,
        }}>
        <TextField
          error={user.name.length < 3}
          onChange={ handleChange}
          id="name"
          label="Name"
          defaultValue={user.name}
          helperText={user.name.length < 3 ? 'Name must be at least 3 characters long' : ''}
          sx={{ width: '50%' }}
        />
        <TextField
          error={user.email.length < 3}
          onChange={ handleChange}
          id="email"
          label="Email"
          defaultValue={user.email}
          helperText={user.email.length < 3 ? 'Email must be at least 3 characters long' : ''}
          sx={{ width: '50%' }}
        />
      </CardContent>
      <CardContent
        sx={{
          display: 'flex',
          gap: 2,
        }}>
        <TextField
          error
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          sx={{ width: '50%' }}
        />
        <TextField
          error
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          sx={{ width: '50%' }}
        />
      </CardContent>
      <CardContent
        sx={{
          display: 'flex',
          gap: 2,
        }}>
        <TextField
          error
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          sx={{ width: '50%' }}
        />
        <TextField
          error
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          sx={{ width: '50%' }}
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
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <Button variant="contained">Save changes</Button>
      </CardContent>
    </Card>
  );
}
