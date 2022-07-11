function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, price , type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

function addIngredients(ingredient, ingredients) {
  console.log(ingredient)
  if (ingredients.includes(ingredient)) {

  } else {
    return ingredients.push(ingredient)
  }
}

function formatPrice(price) {
  console.log(price)
  return price.price = `$${price}`
}

function decreasePrice(price){
  return (price - (price * .10))
}

function createRecipe() {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return
  }




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
