import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configure} from "mobx";

setTimeout(() =>
    configure({
        enforceActions: "never",
        reactionScheduler: (f) => setTimeout(f),
    })
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

