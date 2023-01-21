import supertest from "supertest";
import app from "../index";
import resize from "../utilities/imageProcessing";
import checkFile from "../utilities/checkFileExist";
import path from "path";
const request = supertest(app);

describe("Suite4: testing the image resizing functionality", () => {
  it("resize function should return true as the image is processed", async () => {
    const imagePath = path.resolve("images", "icelandwaterfall.jpg");
    const width = 320;
    const height = 320;
    const outputPath = path.resolve(
      "thumbnails",
      "icelandwaterfall_320_320.jpg"
    );

    expect(await resize(imagePath, width, height, outputPath)).toBeTruthy();
  });
  it("a file in the thumbnails folder should now exist", async () => {
    const outputPath = path.resolve(
      "thumbnails",
      "icelandwaterfall_320_320.jpg"
    );
    expect(checkFile(outputPath)).toBeTruthy();
  });
});
