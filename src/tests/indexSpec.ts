import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Suite1: test server endpoint", () => {
  it("get the endpoint without url parameters", async () => {
    const response = await request.get("/images");
    expect(response.statusCode).toBe(400);
  });
});
