const b = Date.now();

let i = 1000000;

while (i > 0) {
  i--;
}

const a = Date.now();

console.log(((a - b) / 1000).toFixed(2));
