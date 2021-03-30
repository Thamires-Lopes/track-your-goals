const { Router } = require("express");
const UserController = require("../controllers/user.controller");

const router = Router();

router.post("/user", UserController.store);
router.post("/signin", UserController.auth);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.remove);
router.post('/me', UserController.me)
