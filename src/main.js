const calculateTimeRequird = (timePassed) => {
  const remainingTime = ((Date.now() - timePassed) / 1000).toFixed(2);

  return `[${remainingTime}s]`;
};

const deliveringOrder = (obj, time) => {
  console.log("Delivering order...");

  setTimeout(() => {
    obj["deliveryDetails"] = "Delivered by John at 7:30 PM";
    console.log(`${calculateTimeRequird(time)} Order delivered:`, obj);
  }, 5000);
};

const packingFood = (obj, time) => {
  console.log("Packing order...");

  setTimeout(() => {
    obj["packageDetails"] = "Packed in eco-friendly box";

    console.log(`${calculateTimeRequird(time)} Order packed:`, obj);
    deliveringOrder(obj, time);
  }, 2000);
};

const preparingFood = (obj, time) => {
  console.log("preparing food...");

  setTimeout(() => {
    console.log(`${calculateTimeRequird(time)} Food is ready:`, obj);
    packingFood(obj, time);
  }, 3000);
};

const main = () => {
  const time = Date.now();

  console.log(`[0.00s] Order received: { orderId: 123 }`);

  const obj = { orderId: 123, foodDetails: "Burger & Fries" };
  return preparingFood(obj, time);
};

main();
