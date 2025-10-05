const makeChange = (c) => {
  let cents = parseInt(c);

  if (isNaN(cents) || cents < 1 || cents > 99) {
    return null; // Invalid input
  }

  const quarter = 25;
  const dime = 10;
  const nickel = 5;
  const penny = 1;

  const q = Math.floor(cents / quarter);
  cents = cents % quarter;

  const d = Math.floor(cents / dime);
  cents = cents % dime;

  const n = Math.floor(cents / nickel);
  cents = cents % nickel;

  const p = cents;

  return { q, d, n, p };
};

// DOM Elements
const input = document.getElementById("cents");
const button = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const value = input.value;
  const change = makeChange(value);

  if (!change) {
    resultDiv.textContent = "Please enter a valid amount between 1 and 99 cents.";
    return;
  }

  resultDiv.textContent = `Quarters: ${change.q}, Dimes: ${change.d}, Nickels: ${change.n}, Pennies: ${change.p}`;
});
