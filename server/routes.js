const clubsRouter = require('./routers/clubsRoute');

function routes(app) {
  app.use('/api/v1/clubs', clubsRouter);
}

module.exports = routes;
