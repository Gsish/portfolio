import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Glitch from './components/Glitch.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    <BrowserRouter>
    <Glitch />
      <div className='pl-50'><App /></div>
    </BrowserRouter>
  </StrictMode>
  </>
);
