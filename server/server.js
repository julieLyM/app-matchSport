const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const middlewares = require('./middlewares');
const routes = require('./routes');

middlewares(app);
routes(app);

app.listen(PORT, () => console.log(`listen on ${PORT}`));
