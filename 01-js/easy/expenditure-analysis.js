/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var map=new Map();
  transactions.forEach(element => {
    if(!map.has(element.category))
    {
      map.set(element.category,0);
    }
    var temp=map.get(element.category);
    map.set(element.category,temp+element.price);
  });
  var ans=[];
  for(let [key,value] of map)
  {
    ans.push({
      category:key,
      totalSpent:value
    });
  }
  console.log(ans)
  return ans;
}


module.exports = calculateTotalSpentByCategory;
