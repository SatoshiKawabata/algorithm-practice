const { myCountKdivPairs, countKdivPairs } = require("./count-pairs-in-array-whose-sum-is-divisible-by-k");
describe("count-pairs-in-array-whose-sum-is-divisible-by-k", () => {
  it ("myCountKdivPairs", () => {
    expect(myCountKdivPairs([2, 2, 1, 7, 5, 3], 4)).toEqual(5);
    expect(myCountKdivPairs([5, 9, 36, 74, 52, 31, 42], 3)).toEqual(7);
  });
  it ("countKdivPairs", () => {
    expect(countKdivPairs([2, 2, 1, 7, 5, 3], 4)).toEqual(5);
    expect(countKdivPairs([5, 9, 36, 74, 52, 31, 42], 3)).toEqual(7);
  });
});