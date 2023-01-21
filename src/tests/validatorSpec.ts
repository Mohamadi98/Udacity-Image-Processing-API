import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Suite2: testing server validation endpoint", () => {
  it("get endpoint with invalid values for width and height (non numerical)", async () => {
    const response = await request.get(
      "/images?name=fjord&width=two&height=five"
    );
    expect(response.statusCode).toBe(400);
  });
  it("get endpoint with file name missing", async () => {
    const response = await request.get("/images?width=500&height=400");
    expect(response.statusCode).toBe(400);
  });
  it("get endpoint with width missing", async () => {
    const response = await request.get("/images?name=fjord&height=400");
    expect(response.statusCode).toBe(400);
  });
  it("get endpoint with height missing", async () => {
    const response = await request.get("/images?name=santamonica&width=500");
    expect(response.statusCode).toBe(400);
  });
  it("get the endpoint with valid url parameters", async () => {
    const response = await request.get(
      "/images?name=santamonica&width=750&height=750"
    );
    expect(response.statusCode).toBe(200);
  });
});
