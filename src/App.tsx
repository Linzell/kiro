/* eslint-disable import/no-extraneous-dependencies */
// import { invoke } from "@tauri-apps/api/tauri";
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FireproofCtx, useFireproof } from '@fireproof/core/hooks/use-fireproof';
import { useAppDispatch } from '$/hooks';
import { updateUser } from '$/user';
import defineIndexes from '$/defineDatabaseFn';
import loadFixtures from '$/setupDatabaseFn';

import routes from '§/router/router';

const router = createBrowserRouter(routes);

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  const fpCtxValue = useFireproof(defineIndexes, loadFixtures);
  const { ready, database, addSubscriber } = React.useContext(FireproofCtx);

  const getUsers = async () => {
    const dispatch = useAppDispatch();
    dispatch(updateUser(await database.get('users')));
  };

  React.useEffect(() => {
    if (ready) {
      getUsers();
    }
  }, [ready]);

  addSubscriber('users', getUsers);

  /* async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  } */

  /* const getDataFn = async () => {
    setUser(await database.get(user.id));
  }; */

  return (
    <FireproofCtx.Provider value={fpCtxValue}>
      <RouterProvider router={router} fallbackElement={null} />
    </FireproofCtx.Provider>
  );
}

export default App;
