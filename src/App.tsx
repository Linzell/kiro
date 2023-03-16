/* eslint-disable import/no-extraneous-dependencies */
// TODO: A rajouter sur le projet une fois le store fonctionnel
/* import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri"; */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FireproofCtx, useFireproof } from '@fireproof/core/hooks/use-fireproof';
import defineIndexes from '$/defineDatabaseFn';
import loadFixtures from '$/setupDatabaseFn';
/* import { useAppDispatch } from '$/hooks';
import { loadPrivateKey } from '$/user'; */

import routes from '§/router/router';

const router = createBrowserRouter(routes);

function App() {
  /* const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState(""); */
  /* const dispatch = useAppDispatch(); */
  const fpCtxValue = useFireproof(defineIndexes, loadFixtures);

  /* async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  } */

  // Load private key from local storage
  /* dispatch(loadPrivateKey()); */

  return (
    <FireproofCtx.Provider value={fpCtxValue}>
      <RouterProvider router={router} fallbackElement={null} />
    </FireproofCtx.Provider>
  );
}

export default App;
