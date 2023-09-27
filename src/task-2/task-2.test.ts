import { parallelUploading, ResponseDataType } from "./task-2";
let data: ResponseDataType[] = [];

const fakeFetch = (url: string) =>
  new Promise<ResponseDataType>((resolve) => {
    const delay = Math.random() * 1000;
    setTimeout(() => {
      data.push({ delay, data: "result" + url });
      resolve({ delay, data: "result" + url });
    }, delay);
  });

describe("parallelUploading", () => {
  it("10 and 2 parallels", async () => {
    data = [];

    const fakeUrls = Array.from({ length: 10 }, () => {
      const randomString = Math.random().toString(36).substring(2, 15);
      return `https://www.${randomString}.com`;
    });

    const result = await parallelUploading(fakeUrls, 2, fakeFetch);

    expect(result.length).toEqual(fakeUrls.length);
    expect(result).toEqual(data);
  });

  it("15 and 3 parallels", async () => {
    data = [];

    const fakeUrls = Array.from({ length: 15 }, () => {
      const randomString = Math.random().toString(36).substring(2, 15);
      return `https://www.${randomString}.com`;
    });

    const result = await parallelUploading(fakeUrls, 3, fakeFetch);

    expect(result.length).toEqual(fakeUrls.length);
    expect(result).toEqual(data);
  });

  it("20 and 5 parallels", async () => {
    data = [];

    const fakeUrls = Array.from({ length: 20 }, () => {
      const randomString = Math.random().toString(36).substring(2, 15);
      return `https://www.${randomString}.com`;
    });

    const result = await parallelUploading(fakeUrls, 5, fakeFetch);

    expect(result.length).toEqual(fakeUrls.length);
    expect(result).toEqual(data);
  });
});
