const DriverController = require("../controllers/driver_controller");


module.exports = (app) => {
    app.get("/api", DriverController.greeting);
};