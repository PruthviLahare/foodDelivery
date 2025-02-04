const process = (next, before, after, timeNeeded) => {
  before();

  setTimeout(() => {
    after();
    next();
  }, timeNeeded);
};

const preparing = () => {
  process(
    packing,
    () => console.log("Preparing food..."),
    () => console.log("food is ready"),
    2000
  );
};

const packing = () => {
  process(
    delivery,
    () => console.log("Packing order..."),
    () => console.log("Order packed"),
    2000
  );
};

const delivery = () => {
  process(
    Deno.exit,
    () => console.log("Delivering order..."),
    () => console.log("Order delivered"),
    2000
  );
};

const main = () => {
  const bill = { orderId: 123 };
  console.log("Order received:", bill);

  preparing(bill);
};

main();
