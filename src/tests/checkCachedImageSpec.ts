import supertest from "supertest";
import app from "../index";
import checkFile from "../utilities/checkFileExist";
import path from "path";

const request = supertest(app);

/**
 * checking the caching functionality
 * functionality: if the image already processed and stored on disk, should be retrieved from disk
 * without any processing
 */

describe("Suite3: testing caching endpoint", (): void => {
  beforeAll(async (): Promise<void> => {
    const response = await request.get(
      "/images?name=palmtunnel&width=600&height=600"
    );
  });
  it("checkFile function should return true as the file already exist on disk", async (): Promise<void> => {
    const validPath: string = path.resolve("thumbnails", "palmtunnel_600_600.jpg");
    expect(await checkFile(validPath)).toBeTruthy();
  });
  it("checkFile function should return false as the file does not exist on disk", async (): Promise<void> => {
    const invalidPath: string = path.resolve(
      "thumbnails",
      "invalidFileName_600_600.jpg"
    );
    expect(await checkFile(invalidPath)).toBeFalsy();
  });
});
