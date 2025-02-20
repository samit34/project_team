import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import ThemeProvider from './utils/ThemeContext.jsx';
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </React.StrictMode>
)
