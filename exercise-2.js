//1.
db.pizzaOrders.findOne({
    customer_name:"Zoe"
  })


  //2.
  db.pizzaOrders.findOne({ total_price: 7901.57 }, { total_price: 1, customer_name: 1})



