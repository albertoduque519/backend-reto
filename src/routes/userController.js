const refreshTokens = {};

exports.getUserInfo = (req, res) => {
  res.json({ message: "recurso de entrada changes", response: refreshTokens });
};

exports.updateUser = (req, res) => {
  const { id: company } = req.params;
  const datos = [{ id: company, nombre: "Asfo" }];

  res.json(datos);
};

exports.getData = (req, res) => {
  const datos = [
    { id: 1, nombre: "Clients" },
    { id: 2, nombre: "Denisse" },
    { id: 3, nombre: "Carlos" }
  ];

  res.json(datos);
};
