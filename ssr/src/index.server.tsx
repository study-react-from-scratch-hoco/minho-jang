import * as React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import { StaticRouter } from 'react-router-dom/server.js';
import { ServerStyleSheet } from 'styled-components';

import App from './App.js';

export const sheet = new ServerStyleSheet();

export default function render(url: string) {
  return ReactDOMServer.renderToString(
    sheet.collectStyles(
      <React.StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </React.StrictMode>
    )
  )
}