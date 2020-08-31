const ServiceError = require("../helpers/error");
const { API_AUTHENTICATION } = process.env;
const axios = require("axios");
const apiAuth = axios.create({
  baseURL: API_AUTHENTICATION,
});

const getAuth = async function (usuario, contrasena) {
  try {
    let {
      data: { datos },
    } = await apiAuth.post("/autenticacion", { usuario, contrasena });
    return datos || false;
  } catch (e) {
    console.log("error", e);
  }
};

const getUsers = async function () {
  try {
    let { data: datos } = await apiAuth.get("/users");
    return datos || false;
  } catch (e) {
    console.log("error", e);
  }
};

const getUserInfo = async function (token) {
  token =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTg4MzE1MDcsImF1ZCI6ImQxOGUyY2EyZDZkY2U2ODZkNmNjM2ZlZjBjMzVlODljNWNiZTdkODciLCJkYXRhIjp7ImVtcHJlc2EiOiJzb2xhdGkiLCJiZCI6ImNvdmlub2NfYXNzZXQiLCJ1cmwiOiJodHRwczpcL1wvaW1wbGVtZW50YWNpb24uYWRtaW5mby5uZXRcL3JlcV8xMDQ3OTM0X3YzIn19.DsJv8uu1cyCNN4Z7HRc0ljcMlMy1IIbKv3bW5W1REO4";

  try {
    let { data } = await apiAuth.get("/verificacion", {
      headers: { Authorization: token },
    });
    return data || false;
  } catch (e) {
    console.log("error", e);
  }
};

const getUser = async function (id) {
  try {
    let { data } = await apiAuth.get(`/user/${id}`);
    return data || false;
  } catch (e) {
    console.log("error", e);
  }
};

const updateUser = async function (id, userInfo) {
  try {
    let { data } = await apiAuth.put(`/user/${id}`, { userInfo });
    return data || false;
  } catch (e) {
    console.log("error", e);
  }
};

const createUser = async function (userInfo) {
  let { usuario, bd, url, empresa, contrasena } = userInfo;
  try {
    let { data } = await apiAuth.post(`/user`, {
      usuario,
      bd,
      url,
      empresa,
      contrasena,
    });
    return data || false;
  } catch (e) {
    console.log("error", e);
  }
};

module.exports = {
  getAuth,
  getUsers,
  getUser,
  updateUser,
  createUser,
  getUserInfo,
};
