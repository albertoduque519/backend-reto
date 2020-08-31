const usersService = require("../services/Usuarios");

exports.getUser = async (req, res) => {
  let id = parseInt(req.params.id);
  let user = await usersService.getUserInfo(8);

  res.json(user);
};

exports.getUsers = async (req, res) => {
  let users = await usersService.getUsers();

  res.json(users);
};

exports.updateUser = async (req, res) => {
  var id = parseInt(req.params.id);
  let userInfo = req.body.userInfo;
  let users = await usersService.updateUser(id, userInfo);

  res.json(users);
};

exports.createUser = async (req, res) => {
  let userInfo = req.body.userInfo;
  let users = await usersService.createUser(userInfo);

  res.json(users);
};
