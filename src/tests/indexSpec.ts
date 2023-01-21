import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Suite1: test server endpoint", (): void => {
  it("get the endpoint without url parameters", async (): Promise<void> => {
    const response = await request.get("/images");
    expect(response.statusCode).toBe(400);
  });
});
