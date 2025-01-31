const preparingFood = (orderId, obj, ms) => {
  console.log("preparing food...");

  setTimeout(() => {
    console.log("Food is ready:", obj);
  }, 3000);
};

const main = () => {
  const ms = Date.now();

  console.log(`[0.00s] Order received: { orderId: 123 }`);

  const obj = { orderId: 123, foodDetails: "Burger & Fries" };
  preparingFood(123, obj, ms);
};

main();
