const express = require('express');

const app = express();
const SUCCESS = 200;

app.get('/', (req, _res) => {
  req.status(SUCCESS).json({});
});

app.listen(() => console.log('ok'));
