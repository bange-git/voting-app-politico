import sum from "./Register";

describe("sum function test", () => {
  it("should sum numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
