const { Router } = require("express");
const userRouter = require("./routes/UserRoute");

const router = Router();

router.use(userRouter);

module.exports = router;
