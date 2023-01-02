const express = require("express");
const helmet = require("helmet");
const config = require("./config/index.js");
const loaders = require("./loaders/index.js");
const { UserRoutes, ProjectRoutes } = require("./api-routes/index.js");

config();
loaders();

const app = express();
app.use(express.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
  console.log("sunucu ayağa kalktı");
  app.use("/projects", ProjectRoutes);
  app.use("/users", UserRoutes);
});
