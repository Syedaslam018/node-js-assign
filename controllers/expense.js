const Expense = require('../models/expense')

exports.addExpense = async (req, res, next) => {
   try{ 
    //console.log(req.body);
    const name = req.body.iname;
    const desc = req.body.idesc;
    const price = +req.body.iprice;
    const quantity = +req.body.iquant;

    const postData = await Expense.create({name: name, description: desc, price: price, quantity: quantity});
    res.status(201).json(postData);
}
catch(err){
    console.log(err)
}
}

exports.getExpense = async (req, res, next) => {
    try{
    const allExpenses = await Expense.findAll()
    res.status(201).json(allExpenses);
}
catch(err){
    console.log(err);
}
}

exports.deleteExpense = async (req, res, next) => {
    const num = req.query.buy;
    console.log(num);
    const prodId = req.params.productId;
    Expense.findByPk(prodId)
    .then(item => {
        if(num == 1){
            item.quantity = item.quantity-1;
            item.save();
        }
        else if(num == 2){
            item.quantity = item.quantity-2;
            item.save();
        }
        else if(num == 3){
            item.quantity = item.quantity-3;
            item.save();
        }
    })
    
    // 
    // .then(item => {
    //     
    // })
}   