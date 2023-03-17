import React, { useContext, useEffect } from 'react';
import { FireproofCtx } from '@fireproof/core/hooks/use-fireproof';
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
  const { ready, database, addSubscriber } = useContext(FireproofCtx);
  const [user, setUser] = React.useState(props.user);
  const [name, setName] = React.useState(props.user.name);
  const [email, setEmail] = React.useState(props.user.email);
  const [description, setDescription] = React.useState(props.user.description);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  const getDataFn = async () => {
    setUser(await database.get(user.id));
  };

  addSubscriber('users', getDataFn);

  useEffect(() => {
    if (ready) {
      getDataFn();
    }
  }, [ready]);

  const updateFn = async () => {
    await database.put({ _id: user.id, user: user.toJSON() });
  };
  useEffect(() => {
    user.name = name;
    user.email = email;
    props.setUser(user);
    updateFn();
  }, [name, email, description]);
  const emailValidator = (value: string) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(value);
  };
  return (
    <Card
      sx={{
        width: { xs: '85vw', md: '60vw' },
        padding: 2,
      }}>
      <pre>{JSON.stringify(user)}</pre>
      <CardContent
        sx={{
          display: 'flex',
          gap: 2,
        }}>
        <TextField
          id="name"
          label="Name"
          value={name}
          error={user.name.length < 3}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          helperText={user.name.length < 3 ? 'Name must be at least 3 characters long' : ''}
          sx={{ width: '50%' }}
        />
        <TextField
          id="email"
          label="Email"
          value={email}
          error={!emailValidator(user.email)}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
          helperText={!emailValidator(user.email) ? 'Email is not valid' : ''}
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
          id="description"
          label="Description"
          value={description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value);
          }}
          fullWidth
          multiline
          rows={4}
        />
      </CardContent>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <Button
          disabled={user.name.length < 3 || !emailValidator(user.email)}
          variant="contained">
          Save changes
        </Button>
      </CardContent>
    </Card>
  );
}
