import { createRoot } from 'react-dom/client';

import App from './App';
import { maybeRedirectToCanonical } from './lib/canonical-url';

import './index.css';

// Ensure consistent URL to prevent localStorage conflicts
maybeRedirectToCanonical();

createRoot(document.getElementById('root')!).render(<App />);
