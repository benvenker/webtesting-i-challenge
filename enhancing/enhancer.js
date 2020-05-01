module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement >= 20) {
    return item;
  }
  const updatedEnhancement = item.enhancement + 1;
  return { ...item, enhancement: updatedEnhancement };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  console.log(typeof item);
  if (typeof item !== "object") {
    throw new Error("Item must be an object");
  }
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
