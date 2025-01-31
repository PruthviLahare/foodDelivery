// const deliveringOrder

const packingFood = (obj) => {
  console.log("Packing order...");

  setTimeout(() => {
    obj["packageDetails"] = "Packed in eco-friendly box";
    console.log("Order packed:", obj);
    // deliveringOrder(obj);
  }, 2000);
};

const preparingFood = (orderId, obj, ms) => {
  console.log("preparing food...");

  setTimeout(() => {
    console.log("Food is ready:", obj);
    packingFood(obj);
  }, 3000);
};

const main = () => {
  const ms = Date.now();

  console.log(`[0.00s] Order received: { orderId: 123 }`);

  const obj = { orderId: 123, foodDetails: "Burger & Fries" };
  return preparingFood(123, obj, ms);
};

main();
