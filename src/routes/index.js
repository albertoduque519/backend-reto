/* eslint-disable no-undef */
const router = require("express").Router();
const HttpStatus = require("http-status-codes");
const user = require("./userController");
const clients = require("./clientController");
const stats = require("./statsController");
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
};

router.get("/", user.getUser);
router.post("/API/authentication", auth.signup);

router.put("/API/user/:id", [jwt, securityBasic], user.updateUser);
router.post("/API/user", [jwt, securityBasic], user.createUser);
router.get("/API/user/:id", [jwt, securityBasic], user.getUser);
router.get("/API/users", [jwt, securityBasic], user.getUsers);
router.get("/API/clients", [jwt, securityBasic], clients.getClients);
router.get(
  "/API/stats/client-disk-usage",
  [jwt, securityBasic],
  stats.getDiskSpaceStatsByClient
);
router.get(
  "/API/stats/client-disk-usage-date",
  [jwt, securityBasic],
  stats.getDiskSpaceStatsByDate
);

module.exports = router;
