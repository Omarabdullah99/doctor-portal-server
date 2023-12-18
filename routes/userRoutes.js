const express = require("express");
const { loginController, registerController, authController, applyDoctorController, getAllNotificationController, deleteAllNotificationController, getAllDocotrsController } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//APply Doctor || POST 
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notifiaction apply all  Doctor || POST
router.post(
    "/get-all-notification",
    authMiddleware,
    getAllNotificationController
  );

  //Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);


//GET ALL DOCTOR
router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);

module.exports = router;