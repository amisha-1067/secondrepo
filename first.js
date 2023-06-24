let prices = [7, 1, 5, 3, 6, 4];
let buy = prices[0];
let profit = 0;
for (let i = 0; i < prices.length; i++) {
  if (buy > prices[i]) {
    buy = prices[i];//updating the buy
  } else if (profit < prices[i] - buy) {
    profit = prices[i] - buy;
  }
}
console.log(profit);
