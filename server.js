const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 3001; // Replace with the desired port number
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
