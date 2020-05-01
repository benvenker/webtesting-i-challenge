const { repair } = require("./enhancer.js");
// test away!

describe("enhancement functions", () => {
  describe("repair()", () => {
    it("should return an item with durability: 100", () => {
      const item = { name: "sword", durability: 50 };

      expect(repair(item)).toEqual({ name: "sword", durability: 100 });
    });
  });
});
