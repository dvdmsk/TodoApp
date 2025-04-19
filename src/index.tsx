import { createRoot } from 'react-dom/client';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

import { App } from './App';
import { UserProvider } from './context/UserContext';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <UserProvider>
    <App />
  </UserProvider>,
);
