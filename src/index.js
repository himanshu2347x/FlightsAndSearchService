const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const { Airport, City } = require('./models/index');
//for synchronizarion
const db = require('./models/index');
const city = require('./models/city');

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`server started on ${PORT}`);    
    //for synchronizatiom
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }


  });
};

setupAndStartServer();
