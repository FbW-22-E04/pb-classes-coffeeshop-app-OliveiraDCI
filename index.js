console.clear();

class CoffeeShop {
  constructor(name) {
    this.name = name;
    this.menu = [];
    this.orders = [];
  }

  addNewMenuItem(newMenuItem) {
    this.menu.push(newMenuItem);
  }

  addOrder(itemName) {
    if (!this.menu.some((el) => el.name === itemName))
      return ` 🚩 ${itemName} is currently unavailable`;
    this.orders.push(itemName);
    this.dueAmount(itemName);
    return ` ⚡ Your ${itemName} order have been added `;
  }

  fulfillOrder() {
    if (this.orders.length > 0)
      return ` 🏴 The ${this.orders.shift()} is ready!`;
    if (this.orders.length == 0) return ` 🏁 All orders have been fulfilled!`;
  }

  listOrders() {
    return this.orders || [];
  }

  dueAmount() {
    let total = 0;
    for (let order of this.orders) {
      for (let item of this.menu) {
        if (item.name === order) total += item.price;
      }
    }
    return total;
  }

  cheapestItem() {
    return this.menu.sort((a, b) => b.price - a.price).at(-1).name;
  }

  drinksOnly() {
    let drinksList = [];
    for (let item of this.menu) {
      if (item.type === "drink") drinksList.push(item.name);
    }
    return drinksList;
  }

  foodOnly() {
    let foodList = [];
    for (let item of this.menu) {
      if (item.type === "food") foodList.push(item.name);
    }
    return foodList;
  }
}

class MenuItem {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
}

const coffeeShopOne = new CoffeeShop("coffeeShopOne");

const cookie = new MenuItem("cookie", "food", 3);
const cinnamonRoll = new MenuItem("cinnamon roll", "food", 3);
const filterCoffee = new MenuItem("Yirgacheffe", "drink", 5);
const espressoCoffee = new MenuItem("Ristretto", "drink", 2);
const houseSpecial = new MenuItem("Affogato", "food", 4);

coffeeShopOne.addNewMenuItem(cookie);
coffeeShopOne.addNewMenuItem(cinnamonRoll);
coffeeShopOne.addNewMenuItem(filterCoffee);
coffeeShopOne.addNewMenuItem(espressoCoffee);
coffeeShopOne.addNewMenuItem(houseSpecial);

console.log(coffeeShopOne);
console.log("-----------------------------------");

console.log(coffeeShopOne.addOrder("hot cocoa"));
console.log(coffeeShopOne.addOrder("Affogato"));
console.log(coffeeShopOne.addOrder("cinnamon roll"));
console.log(coffeeShopOne.addOrder("cookie"));

console.log(coffeeShopOne.listOrders());

console.log("Due amount:", coffeeShopOne.dueAmount());

console.log(coffeeShopOne.fulfillOrder());
console.log(coffeeShopOne.fulfillOrder());
console.log(coffeeShopOne.fulfillOrder());
console.log(coffeeShopOne.fulfillOrder());

console.log("Orders list: ", coffeeShopOne.listOrders());

console.log("Due amount:", coffeeShopOne.dueAmount());

console.log("Cheapest item:", coffeeShopOne.cheapestItem());

console.log("Drinks list:", coffeeShopOne.drinksOnly());

console.log("Food list:", coffeeShopOne.foodOnly());
