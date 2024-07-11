//Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property.
function calculateTotalValue(items) {
  return items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
}

const items = [
  { quantity: 5, price: 6 },
  { quantity: 7, price: 15 },
  { quantity: 6, price: 5 },
];

const totalValue = calculateTotalValue(items);
console.log(totalValue);
