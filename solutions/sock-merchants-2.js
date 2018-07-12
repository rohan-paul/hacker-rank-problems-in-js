// https://www.hackerrank.com/challenges/sock-merchant/problem - THIS IS MUCH MORE SIMPLER SOLUTION

sockMerchants = (n, ar) => {

  let resultNoOfSales = 0

  let stockHolder = {}
  /* The final data-structure of stockHolder will be like below for dataset ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

  { '10': 4, '20': 3, '30': 1, '50': 1 }

  */

  for ( let i of ar ) {

    if (!stockHolder[i]) {
      stockHolder[i] = 1;
    }
    else if (stockHolder) {
      stockHolder[i] += 1;
    }
  }
  console.log(stockHolder);

  for (let i in stockHolder) {
     resultNoOfSales += Math.floor(stockHolder[i] / 2)
  }
  return resultNoOfSales;

}

console.log(sockMerchants(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));