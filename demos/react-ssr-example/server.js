/* eslint no-console: "off" */

import React from 'react';
import ReactDomServer from 'react-dom/server';
import MobileDetect from 'mobile-detect';
import express from 'express';
import browserify from 'browserify';
import babelify from 'babelify';
import App from './components/App.jsx';

const app = express();
const port = 3000;

app.get('/bundle.js', (req, res) => {
  browserify('./client.js', { debug: true }).transform(babelify).bundle().pipe(res);
});

app.get('/', (req, res) => {
  const md = new MobileDetect(req.headers['user-agent']);
  let fallbackScreenClass = 'xxl';
  if (md.phone() !== null) fallbackScreenClass = 'xs';
  if (md.tablet() !== null) fallbackScreenClass = 'md';

  const component = <App fallbackScreenClass={fallbackScreenClass} />;
  const content = ReactDomServer.renderToString(component);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `);
  console.info('react-grid-system example rendered server-side.');
});


app.get("/stream", (req, res) => {
  const md = new MobileDetect(req.headers['user-agent']);
  let fallbackScreenClass = 'xxl';
  if (md.phone() !== null) fallbackScreenClass = 'xs';
  if (md.tablet() !== null) fallbackScreenClass = 'md';

  res.write("<!DOCTYPE html><html><head><title>stream</title></head><body>");
  res.write("<div id='app'>"); 
  const stream = ReactDomServer.renderToNodeStream(<App fallbackScreenClass={fallbackScreenClass} />)
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.write("</div><script src='bundle.js'></script></body></html>");
    res.end()
  });
});


app.listen(port, () => {
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
