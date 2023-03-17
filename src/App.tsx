/* eslint-disable import/no-extraneous-dependencies */
// import { invoke } from "@tauri-apps/api/tauri";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FireproofCtx, useFireproof } from '@fireproof/core/hooks/use-fireproof';
import { Provider } from 'react-redux';
import defineIndexes from '$/defineDatabaseFn';
import loadFixtures from '$/setupDatabaseFn';
import store from './stores';

import routes from '§/router/router';

const router = createBrowserRouter(routes);

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  const fpCtxValue = useFireproof(defineIndexes, loadFixtures);

  /* async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  } */

  return (
    <FireproofCtx.Provider value={fpCtxValue}>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={null} />
      </Provider>
    </FireproofCtx.Provider>
  );
}

export default App;
