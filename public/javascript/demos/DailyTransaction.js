const DailyTransaction = {
  storage: [],
  makeTransactions: function() {
    // Make some sales
    this.sale(this.transaction("sale", "Eggs", 500));
    this.sale(this.transaction("sale", "Toothpaste", 150));
    this.sale(this.transaction("sale", "AK 47 Gun", 2000));

    // Do some expenses
    this.expend(this.transaction("expense", "Food", 200));
    this.expend(this.transaction("expense", "Shoes", 1000));
  },
  sale: function (transaction) {
    this.storage.push(transaction);
  },
  expend: function (transaction) {
    this.storage.push(transaction)
  },
  transaction: function (tranXType, product, price) {
    if (tranXType && product && price) {
      return { tranXType, product, price };
    }
    return { tranXType: null, product: null, price: 0};
  },
  expenses: function () {
    const expenses = this.storage.filter(el => el.tranXType === "expense");
    let totalExpenses = expenses.reduce((prevValue, currentValue) => prevValue + currentValue.price, 0);
    return { expenses, totalExpenses };
  },
  sales: function () {
    const sales = this.storage.filter(el => el.tranXType === "sale");
    let totalSales = sales.reduce((prevValue, currentValue) => prevValue + currentValue.price, 0);
    return { sales, totalSales };
  },

  cashAtHand: function () {
    let saleAmt = this.sales().totalSales
    console.log("sale Amt: ", saleAmt);
    let expenseAmt = this.expenses().totalExpenses;
    console.log("Expense Amt: ", expenseAmt);
    return saleAmt - expenseAmt;
  }
}

const dt = DailyTransaction;

dt.makeTransactions();

// Display Transactions
console.log("TRANSACTIONS: \n", dt.storage);

// // Display All Expenses
console.log("EXPENSES: \n", dt.expenses().expenses);
console.log("TOTAL: ", dt.expenses().totalExpenses);

// Display All Expenses
console.log("SALES: \n", dt.sales().sales);
console.log("TOTAL: ", dt.sales().totalSales);

// Display Cash at hand
console.log("CASH AT HAND: ", dt.cashAtHand());