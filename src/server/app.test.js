import app from "./app";
import request from "supertest";

describe("Tests the server (app)", () => {
  test("Return an json object and statusCode 200 when hit '/' route.", async () => {
    const res = await request(app).get("/");

    expect(res.headers["content-type"]).toMatch(/application\/json/);
    expect(res.statusCode).toEqual(200);
  });
});
