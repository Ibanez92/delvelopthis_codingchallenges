const asyncAwait = require("./asyncAwait.unsolved");
const sumNumbers = require("./promise.unsolved");
const thenCatch = require("./thenCatch.unsolved");
const tryCatchAsync = require("./tryCatchAsync.unsolved");
const tryCatchSync = require("./tryCatchSync.unsolved");

describe("asyncAwait", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("fetches data from the provided URL", async () => {
    const mockResponse = { data: "mock data" };
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const url = "https://example.com";
    const data = await asyncAwait(url);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url);

    expect(data).toEqual(mockResponse);
  });

  it("throws an error if network response is not ok", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
    });

    const url = "https://example.com";

    await expect(asyncAwait(url)).rejects.toThrowError(
      "Network response was not ok"
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url);
  });
});

describe("sumNumbers", () => {
  it("returns the sum of an array of numbers", async () => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = await sumNumbers(numbers);
    expect(sum).toBe(15);
  });

  it("returns an error if input is not an array", async () => {
    const input = "not an array";
    const consoleSpy = jest.spyOn(console, "error");

    await sumNumbers(input);

    expect(consoleSpy).toHaveBeenCalledWith(
      "There was an error:",
      new Error("Input is not an array")
    );
    consoleSpy.mockRestore();
  });

  it("returns 0 for an empty array", async () => {
    const numbers = [];
    const sum = await sumNumbers(numbers);
    expect(sum).toBe(0);
  });

  it("handles negative numbers", async () => {
    const numbers = [-1, 2, -3, 4, -5];
    const sum = await sumNumbers(numbers);
    expect(sum).toBe(-3);
  });

  it("handles decimal numbers", async () => {
    const numbers = [1.5, 2, 2.5];
    const sum = await sumNumbers(numbers);
    expect(sum).toBe(6);
  });
});

describe("thenCatch", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("returns the JSON data from a successful fetch", async () => {
    const mockData = { foo: "bar" };
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve(mockData),
    };
    jest.spyOn(global, "fetch").mockResolvedValue(mockResponse);

    const url = "https://example.com";
    const data = await thenCatch(url);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url);

    expect(data).toEqual(mockData);
  });

  it("handles fetch errors with a catch block", async () => {
    const mockError = new Error("Network response was not ok");
    jest.spyOn(global, "fetch").mockRejectedValue(mockError);
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const url = "https://example.com";
    await thenCatch(url);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(consoleSpy).toHaveBeenCalledWith(
      "There was an error fetching the data:",
      mockError
    );

    consoleSpy.mockRestore();
  });
});

describe("tryCatchAsync", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("returns the JSON data from a successful fetch", async () => {
    const mockData = { foo: "bar" };
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve(mockData),
    };
    jest.spyOn(global, "fetch").mockResolvedValue(mockResponse);
    const url = "https://example.com";
    const data = await tryCatchAsync(url);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(data).toEqual(mockData);
  });

  it("handles fetch errors with a catch block", async () => {
    const mockError = new Error("Network response was not ok");
    jest.spyOn(global, "fetch").mockRejectedValue(mockError);
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const url = "https://example.com";
    await tryCatchAsync(url);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(consoleSpy).toHaveBeenCalledWith(
      "There was an error fetching the data:",
      mockError
    );
  });
});

describe("tryCatchSync", () => {
  it("parses a valid JSON string and returns the parsed object", () => {
    const jsonString = '{"foo": "bar"}';
    const consoleSpy = jest.spyOn(console, "log");
    const expectedObject = { foo: "bar" };
    const parsedObject = tryCatchSync(jsonString);
    expect(parsedObject).toEqual(expectedObject);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Parsed JSON object:",
      expectedObject
    );
  });

  it("handles invalid JSON strings with a catch block", () => {
    const invalidJsonString = '{"foo": "bar"';
    const consoleSpy = jest.spyOn(console, "error");
    const expectedErrorString = "Invalid JSON string:";
    tryCatchSync(invalidJsonString);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedErrorString),
      expect.any(SyntaxError)
    );
    consoleSpy.mockRestore();
  });
});
