const assert = require("chai").assert;
import { sliceStringIntoAllSubs } from "../twoStringsGame";

let result = sliceStringIntoAllSubs("abc");

describe("sliceStringIntoAllSubs", () => {
  it("returns an array", () => {
    assert.isArray(result, "not an array");
  });
  it("returns an array with expected length", () => {
    assert.equal(result.length, 6, "wrong length");
  });
  it("returns an array with expected values", () => {
    assert.isTrue(
      result.includes("abc") &&
        result.includes("ab") &&
        result.includes("a") &&
        result.includes("bc") &&
        result.includes("b") &&
        result.includes("c"),
      "not all expected values"
    );
  });
});
