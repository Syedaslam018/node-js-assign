const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expense')

router.post('/add-expense', expenseController.addExpense);

router.get('/add-expense', expenseController.getExpense);

router.use('/delete-expense/:productId', expenseController.deleteExpense)

module.exports = router;