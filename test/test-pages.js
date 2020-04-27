/* eslint-disable no-undef */
require("dotenv").config();
const supertest = require("supertest");
const app = require("../src/server");

const apptest = supertest(app);

const user = {
  username: "covinoc",
  password: "eyJ0eXAiOiJKV1QiLCJhbGciOi",
};


describe("POST /authentication", async () => {
  it("Route authentication", (done) => {
    apptest
      .post("/API/authentication")
      .set("Content-Type", "application/json; charset=utf-8")
      .send({ username: user.username })
      .send({ password: user.password })
      .expect(200, done);
  });
});
