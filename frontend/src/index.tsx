import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SingleJoke from 'containers/SingleJoke';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <SingleJoke />
  </React.StrictMode>
);
