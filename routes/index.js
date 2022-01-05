const express = require('express');
const { createUser, userValidate } = require("../controllers/user");
const { getPackage, getPackageById } = require("../controllers/package");
const { createOrder, getOrder, getOrderById, getOrderByUserId } = require("../controllers/order");
const router = express.Router();

router.get("/package", getPackage);
router.get("/package/:id", getPackageById);
router.get("/order", getOrder);
router.get("/order/:id", getOrderById);
router.get("/order/user/:id", getOrderByUserId);
router.post("/user/validate", userValidate);
router.post("/user", createUser);
router.post("/order", createOrder);
// router.post("/order/:id", deleteOrder);


module.exports = router;