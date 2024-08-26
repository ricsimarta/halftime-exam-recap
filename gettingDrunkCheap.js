function gettingDrunkCheap(drinks) {
  for (let i = 0; i < drinks.length; i++) {
    drinks[i].pricePerAbv = drinks[i].price / drinks[i].volume / drinks[i].abv;
  }

  let cheapestDrink = drinks[0];

  for (let i = 1; i < drinks.length; i++) {
    if (drinks[i].pricePerAbv < cheapestDrink.pricePerAbv) {
      cheapestDrink = drinks[i];
    }
  }
  
  return {
    name: cheapestDrink.name,
    pricePerAbv: Math.floor(cheapestDrink.pricePerAbv)
  };
}

module.exports = gettingDrunkCheap
