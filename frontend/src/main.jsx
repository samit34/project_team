
import React, { StrictMode } from 'react' 

import { createRoot } from 'react-dom/client'
import ThemeProvider from './utils/ThemeContext.jsx';
import './index.css'
import App from './App.jsx'
import ThemeProvider from './utils/ThemeContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
      <App />
    </ThemeProvider>
    </StrictMode>

)
