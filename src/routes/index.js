/* eslint-disable no-undef */
const router = require("express").Router();
const HttpStatus = require("http-status-codes");
const user = require("./userController");
const { ErrorHandler } = require("../helpers/error");
const auth = require("./authController");
const { jwt } = require("../api/middleware/jwt");

const securityBasic = (req, res, next) => {
  if (!req.isAuthenticated) {
    // eslint-disable-next-line no-underscore-dangle
    throw new ErrorHandler(
      HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
      HttpStatus.UNAUTHORIZED,
      res.__("Password")
    );
  }
  next();
};

router.get("/", user.getUserInfo);
router.post("/API/authentication", auth.signup);

router.put("/API/user/data/:id", [jwt, securityBasic], user.updateUser);
router.get("/API/user/data", [jwt, securityBasic], user.getData);

module.exports = router;
