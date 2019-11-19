import { fmtMSS } from "./functionUtils";

describe("functionUtilities utils file", () => {
  it("should return minute when seconds provided ", () => {
    expect(fmtMSS(422)).toEqual("7:02");
  });
});
