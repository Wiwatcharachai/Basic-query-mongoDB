//1.

db.pizzaOrders.find({
    $and: [
        { quantity: { $lt: 5 } },
        { credit_card_type:'mastercard' }
    ]
});



//2.
db.pizzaOrders.find({
    $and: [
        { size: 'small'},
        { quantity: {$gte: 1 }},
        { quantity: {$lte: 5} }

    ]
}).sort({quantity:1});



//3.
db.pizzaOrders.find({
    $and: [
        { quantity: { $gt: 10 } },
        { credit_card_type: null }
    ]
});


