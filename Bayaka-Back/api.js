const data = require("./util/bakaya.json");

const jsonServer = require("json-server");
  api = jsonServer.create(),
  router = jsonServer.router(data),
  middlewares = jsonServer.defaults(),
  port = process.env.PORT || 8080;

api.use(middlewares);
api.use(router);

api.listen(port);
