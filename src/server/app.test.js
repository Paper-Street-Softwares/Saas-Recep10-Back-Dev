const app = require("./app");
const request = require("supertest");

describe("Tests the server (app)", () => {
  test("Return an json object and statusCode 200 when hit '/' route.", async () => {
    const res = await request(app).get("/");

    expect(res.headers["content-type"]).toMatch(/application\/json/);
    expect(res.statusCode).toEqual(200);
  });
});
