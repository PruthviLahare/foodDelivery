const process = (before, after, timeNeeded, next) => {
  before();

  setTimeout(() => {
    after();
    next();
  }, timeNeeded);
};

const preparing = () => {
  process(
    () => console.log("Preparing food..."),
    () => console.log("food is ready"),
    2000,
    packing
  );
};

const packing = () => {
  process(
    () => console.log("Packing order..."),
    () => console.log("Order packed"),
    2000,
    delivery
  );
};

const delivery = () => {
  process(
    () => console.log("Delivering order..."),
    () => console.log("Order delivered"),
    2000,
    Deno.exit
  );
};

const main = () => {
  const bill = { orderId: 123 };
  console.log("Order received:", bill);

  preparing(bill);
};

main();
