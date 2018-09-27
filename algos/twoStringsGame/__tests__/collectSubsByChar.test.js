const assert = require("chai").assert;
import { collectSubsByChar } from "../twoStringsGame";

let resultA = collectSubsByChar("abcabc", 97, []);
let resultB = collectSubsByChar("abcabc", 98, []);
let resultC = collectSubsByChar("abcabc", 99, []);

describe("collectSubsByChar", () => {
  it("returns an array", () => {
    assert.isArray(resultA, "not an array-a");
    assert.isArray(resultB, "not an array-b");
    assert.isArray(resultC, "not an array-c");
  });
  it("returns an array with expected length", () => {
    assert.equal(resultA.length, 2, "not equal length-a");
    assert.equal(resultB.length, 2, "not equal length-b");
    assert.equal(resultC.length, 2, "not equal length-c");
  });
  it("returns an array with expected values", () => {
    assert.isTrue(resultA.includes("abcabc") && resultA.includes("abc"));
    assert.isTrue(resultB.includes("bcabc") && resultB.includes("bc"));
    assert.isTrue(resultC.includes("cabc") && resultC.includes("c"));
  });
});
