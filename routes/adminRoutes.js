const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getAllUsersController, getAllDoctorsController, changeAccountStatusController } = require("../controllers/adminController");

//router onject
const router = express.Router();

//GET METHOD || USERS
router.get("/getUserData",authMiddleware,  getAllUsersController);

//GET METHOD || USERS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//POST ACCOUNT STATUS
router.post(
    "/changeAccountStatus",
    authMiddleware,
    changeAccountStatusController
  );

module.exports = router;