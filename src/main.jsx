import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainRoutes } from './MainRoutes.jsx'
import Store from './store/store.js'

const store = new Store();
export const Context = createContext({
  store,
})

const container = document.getElementById('root');

if (!container._reactRootContainer) {
  const root = createRoot(container);
  container._reactRootContainer = root;
  
  root.render(
    <Context.Provider value={{
      store
    }}>
      <StrictMode>
        <MainRoutes />
      </StrictMode>
    </Context.Provider>
  );
}

