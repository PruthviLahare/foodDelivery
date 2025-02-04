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
  (bill) => (bill["packageDetails"] = "'Delivered by John at 7:30 PM"),
  () => console.log("deliveryDetails"),
  5000,
  Deno.exit
);

const packing = process(
  () => console.log("Packing order..."),
  (bill) => (bill["packageDetails"] = "Packed in eco-friendly box"),
  () => console.log("Order packed"),
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
  () => console.log("Delivering order..."),
  (bill) => (bill["id"] = 123),
  (bill) => console.log("Order received", bill),
  0,
  preparing
);

const main = () => {
  orderRecived({ id: 123 });
};

main();
