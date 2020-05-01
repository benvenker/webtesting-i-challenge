const { repair, succeed, fail, get } = require("./enhancer.js");
// test away!

describe("enhancement functions", () => {
  describe("repair()", () => {
    it("should return an item with durability: 100", () => {
      const item = { name: "sword", durability: 50 };

      expect(repair(item)).toEqual({ name: "sword", durability: 100 });
    });

    it.todo("should throw an exception if item type is not an object");
  });

  describe("succeed()", () => {
    it("should increase enhancement by 1", () => {
      const item = {
        name: "sword",
        durability: 80,
        enhancement: 5,
      };

      const expected = {
        name: "sword",
        durability: 80,
        enhancement: 6,
      };
      expect(succeed(item)).toEqual(expected);
    });
  });
});
