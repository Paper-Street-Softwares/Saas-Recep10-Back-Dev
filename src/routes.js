const { Router } = require("express");
const userRouter = require("./routes/user-route");

const router = Router();

router.use(userRouter);

module.exports = router;
