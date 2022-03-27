const { getMeal } = require("./demo01.js")

test("今天没钱少吃点： 10元套餐,两菜一肉", () => {
  expect(getMeal(10)).toBe("两菜一肉")
})

test("今天没钱少吃点： 12元套餐,两菜两肉", () => {
  expect(getMeal(12)).toBe("两菜一肉")
})