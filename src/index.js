import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const { ErrorBoundary } = Sentry;
Sentry.init({
  dsn: 'https://4f898b6b90b34101b19b804585a8d8e9@o443460.ingest.sentry.io/5417257',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
ReactDOM.render(
  <ErrorBoundary fallback={'An error has occured!!!'}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
