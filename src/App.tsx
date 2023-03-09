/* eslint-disable import/no-extraneous-dependencies */
// TODO: A rajouter sur le projet une fois le store fonctionnel
/* import { FireproofCtx, useFireproof } from '@fireproof/core/hooks/use-fireproof'; */
/* import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri"; */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loadPrivateKey } from '$/user';

import routes from '§/router/router';

const router = createBrowserRouter(routes);

function App() {
  /* const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState(""); */

  /* async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  } */

  // Load private key from local storage
  loadPrivateKey();

  return (
    <RouterProvider router={router} fallbackElement={null} />
  );
}

export default App;
