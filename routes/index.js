const express = require('express');
const createUser = require("../controllers/user");
const router = express.Router();

// router.get("/user/:username", getUserByUsername);
// router.get("/package", getPackage);
// router.get("/package/:id", getPackageById);
// router.get("/order", getOrder);
// router.get("/order/:id", getOrderById);
router.post("/user", createUser);
// router.post("/order", createOrder);
// router.post("/order/:id", deleteOrder);


module.exports = router;