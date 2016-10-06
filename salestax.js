var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//FYI: console.log(companySalesData[0]['sales']); === companySalesData[0].sales because they are both objects

//finding total sales


//finding total taxes 



// for earlier
  // var sales = companySalesData[0].sales
  // var totalSales = 0

var salesTaxReport = function(companySalesData, salesTaxRates){

  var results = {}

  for (var i = 0; i < companySalesData.length; i++) {
   
    var company = companySalesData[i]
    results[company.name] = {totalSales: 0, totalTaxes: 0}

  }

  // var telusTotalSales = 0
  // var telusTotalTax = 0

  for (var i = 0; i < companySalesData.length; i++) {
   
    var company = companySalesData[i]
  

    // console.log(salesTaxRates[company.province])

    var sales = company.sales
    var totalSales = 0
    for (var j = 0; j < sales.length; j++) {
      totalSales += sales[j]
    }
    // console.log(totalSales)

    var totalTaxes = totalSales * salesTaxRates[company.province]

    // console.log(totalTax)

    results[company.name].totalSales += totalSales
    results[company.name].totalTaxes += totalTaxes

  }

  // console.log(telusTotalTax);

return results

}


var results = salesTaxReport(companySalesData, salesTaxRates);

console.log(results)




// /* Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }
// }
// */