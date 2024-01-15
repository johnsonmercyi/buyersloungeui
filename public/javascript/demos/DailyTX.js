class Trade {
  constructor() {
    this.storage = [];
  }

  populateTradeStorage() {
    this.storage.push(new Transaction("sale", "Toothbrush", 500));
    this.storage.push(new Transaction("sale", "Shoes", 2000));
    this.storage.push(new Transaction("expense", "Food", 300));
    this.storage.push(new Transaction("expense", "Rent", 800));
  }

  makeTransaction(transX) {
    this.storage.push(transX);
  }

  expenses() {
    const expenses = this.storage.filter(el => el.transXType === "expense");
    const totalExpenses = expenses.reduce((a, b) => a + b.amount, 0);
    return { expenses, totalExpenses };
  }

  sales() {
    const sales = this.storage.filter(el => el.transXType === "sale");
    const totalSales = sales.reduce((a, b) => a + b.amount, 0);
    return { sales, totalSales };
  }

  cashAtHand() {
    let saleAmt = this.sales().totalSales
    let expenseAmt = this.expenses().totalExpenses;
    return saleAmt - expenseAmt;
  }
}

class Transaction {
  constructor(transXType, item, amount) {
    this.transXType = transXType;
    this.item = item;
    this.amount = amount;
  }
}

const trade = new Trade();

trade.populateTradeStorage();
trade.makeTransaction(new Transaction("sale", "Paper", 300));

console.log("ALL TRANSACTIONS:\n", trade.storage);

const sales = trade.sales();
console.log("\nALL SALES:\n", sales.sales);
console.log("TOTAL: ", sales.totalSales);

const expenses = trade.expenses();
console.log("\nALL EXPENSES:\n", expenses.expenses);
console.log("TOTAL: ", expenses.totalExpenses);

console.log("\nCASH AT HAND: ", trade.cashAtHand());

