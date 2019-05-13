const { repair } = require("./enhancer.js");

// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.

test("repair() method", () => {
  const item = {
    name: "Valyrian Steel Needle",
    enhancement: 0,
    durability: 90
  };
  expect(repair(item).durability).toBe(100);
});
