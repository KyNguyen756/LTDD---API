const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter.get("/users", userController.getuser);
userRouter.get("/:id", userController.getUserById);

userRouter.post("/add", userController.addUser);

userRouter.put("/update/:id", userController.updateUser);

userRouter.delete("/delete/:id", userController.deleteUser);

module.exports = userRouter;