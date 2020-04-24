/* eslint-disable no-undef */
require("dotenv").config();
const supertest = require("supertest");
const app = require("../src/server");

const apptest = supertest(app);

const user = {
  username: "admin",
  password: "admin",
};

describe("GET /datos", () => {
  it("Route Get datos test", (done) => {
    apptest
      .get("/API/user/data")
      .set("Content-Type", "application/json; charset=utf-8")
      .expect(401, done);
  });
});

describe("POST /authentication", () => {
  it("Route authentication", (done) => {
    apptest
      .post("/API/authentication")
      .set("Content-Type", "application/json; charset=utf-8")
      .send({ username: user.username })
      .send({ password: user.password })
      .expect(200, done);
  });
});
