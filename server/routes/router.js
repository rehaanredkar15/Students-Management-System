const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');




//main server, 
/* 
@description Root Route
@method GET

*/
route.get('/', services.homeRoutes);





/* 
@description adding users
@method GET

*/

route.get('/add_user', services.adduserRoutes);






/* 
@description adding users
@method GET

*/
route.get('/update_user', services.updateuserRoutes);

//REST API
//we passed the id ,which will be receieved as a parameter

route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);



module.exports = route;