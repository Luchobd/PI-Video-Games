/* eslint-disable import/no-extraneous-dependencies */
// const { Videogame, conn } = require('../../src/db.js');
// const { expect } = require('chai');
const session = require("supertest-session");
const app = require("../../src/app.js");
const agent = session(app);

describe("GET /videogames", function () {
  it("it should has status code 200", function (done) {
    session(app);
    agent
      .get("/videogames")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

describe("GET /gender", function () {
  it("it should has status code 200", function (done) {
    session(app);
    agent
      .get("/gender")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

describe("GET /videogames?name=", function () {
  it("it should has status code 200", function (done) {
    session(app);
    agent
      .get("/videogames?name=auto")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

describe("GET /videogame/:idVideogame", function () {
  it("it should has status code 200", function (done) {
    session(app);
    agent
      .get("/videogame/4200")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});
