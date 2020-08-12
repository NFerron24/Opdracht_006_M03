/*function makeHollandsBroodje (){
    cut two slices of bread;
    add a slice of cheese;
    stack bread and cheese;
}
*/
function makeHollandsBroodje(filling) {
  console.log("cut two slices of bread");
  console.log("add" + " " + filling);
  console.log("stack bread and cheese");
}
makeHollandsBroodje("a slice of cheese");

function makeSandwich(topping) {
  console.log("There you go, a sandwich with" + " " + topping);
}
makeSandwich("pastrami en augurken");
makeSandwich("hagelslag");
/* de functie wordt gedeclareert in regel 14 t/m 15
de functie wordt gecalled op regel 17
*/
function calculateDiscountedPrice(totalAmount, discount) {
  return totalAmount - discount;
}
console.log(calculateDiscountedPrice(2, 4));

function calculateDiscountedPriceMax(totalAmount, discount) {
  if (totalAmount >= 25) {
    return totalAmount - discount;
  } else {
    return totalAmount;
  }
}
console.log(calculateDiscountedPriceMax(12, 5));
