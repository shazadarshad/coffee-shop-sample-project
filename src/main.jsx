import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('Main.jsx loaded');
console.log('Root element:', document.getElementById('root'));

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found!');
} else {
  console.log('Creating React root...');
  const root = createRoot(rootElement);
  
  console.log('Rendering App component...');
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log('App rendered successfully');
}
