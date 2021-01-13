const express = require('express');

const app = express();

app.get('/', (req, _res) => {
  req.status(200).json({});
});

app.listen(() => console.log('ok'));
