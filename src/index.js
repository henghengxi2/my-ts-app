import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


Sentry.init({
  dsn: "https://ee4e1da796884dc88b5ec7a5df111c11@o443460.ingest.sentry.io/5417240",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
