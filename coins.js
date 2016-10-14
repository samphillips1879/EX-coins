/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/


var quarter = 0.25;
var dime = 0.10;
var nickel = 0.05;
var penny = 0.01;

// console.log(quarter);

function coinCounter (dollars) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  // var iChange = 0;

  // console.log(coinPurse);
 // -= (coinPurse.quarters * .25) - coinPurse.dimes - coinPurse.nickels - coinPurse.pennies)       ignore this line
  for (var i = dollars; i > 0.005; i += 0) {
    if (i >= quarter) {
      coinPurse.quarters += 1;
      i -= 0.25;
      // console.log("i =", i);
    } else if (i < quarter && i >= dime) {
      coinPurse.dimes += 1;
      i -= 0.10;
    } else if (i < dime && i >= nickel) {
      coinPurse.nickels += 1;
      i -= 0.05;
    } else if (i < nickel) {
      coinPurse.pennies += 1;
      i -= 0.01;
    }
  }
// console.log("current i =", i)

  return coinPurse;
}
var dollarInput = 1.00;
console.log("Dollar Input = $", dollarInput);
var coins = coinCounter(dollarInput);
console.log("coins", coins);




var dollarInput = .62;
console.log("Dollar Input = $", dollarInput);
var coins = coinCounter(dollarInput);
console.log("coins", coins);




var dollarInput = 1.41;
console.log("Dollar Input = $", dollarInput);
var coins = coinCounter(dollarInput);
console.log("coins", coins);





var dollarInput = 1.99;
console.log("Dollar Input = $", dollarInput);
var coins = coinCounter(dollarInput);
console.log("coins", coins);




var dollarInput = 2.99;
console.log("Dollar Input = $", dollarInput);
var coins = coinCounter(dollarInput);
console.log("coins", coins);




var dollarInput = 3.99;
console.log("Dollar Input = $", dollarInput);
var coins = coinCounter(dollarInput);
console.log("coins", coins);





var dollarInput = 3.99;
console.log("Dollar Input = $", dollarInput);
var coins = coinCounter(dollarInput);
console.log("coins", coins);  








var dollarInput = 90.99;
console.log("Dollar Input = $", dollarInput);
var coins = coinCounter(dollarInput);
console.log("coins", coins);  