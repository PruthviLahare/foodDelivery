const process = (before, update, complete, timeNeeded, next) => (bill) => {
  before();

  setTimeout(() => {
    update(bill);
    complete(bill);

    next(bill);
  }, timeNeeded);
};

const delivery = process(
  () => console.log("Delivering order..."),
  (bill) => (bill["deliveryDetailss"] = "'Delivered by John at 7:30 PM"),
  (bill) => console.log("deliveryDetails", bill),
  5000,
  Deno.exit
);

const packing = process(
  () => console.log("Packing order..."),
  (bill) => (bill["packageDetails"] = "Packed in eco-friendly box"),
  (bill) => console.log("Order packed", bill),
  2000,
  delivery
);

const preparing = process(
  () => console.log("Preparing food..."),
  (bill) => (bill["foodDetails"] = "Burger & Fries"),
  (bill) => console.log("food is ready:", bill),
  3000,
  packing
);

const orderRecived = process(
  () => {},
  (bill) => (bill["id"] = 123),
  (bill) => console.log("Order received:", bill),
  0,
  preparing
);

const main = () => {
  orderRecived({});
};

main();
