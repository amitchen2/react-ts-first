import * as React from 'react';
import { StrictMode } from 'react';
import ReactDOM=require('react-dom');
import { createRoot } from 'react-dom/client';

import App from './App';
// import Hello from './App';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


// ReactDOM.render(
//   <Hello />,
//   document.getElementById('root'),
// );
root.render(
  <StrictMode>
  <App/>
  </StrictMode>
);
