const TclassObj = {

    transaction: function(productName, tType, amount){ 
        return {productName, tType, amount};
    },

    //Getters and Setters
    setProductName: function(productName){
        this.productName = productName;
    },

    getProductName: function(){
        return this.productName;
    },

    setTtype: function(tType){
        this.tType = tType;
    },

    getTtype: function(){
        return this.tType;
    },

    setAmount: function(amount){
        this.amount = amount;
    },

    getAmount: function(){
        return this.amount;
    },
   
    toString: function(){
        return `[product-name: ${this.productName}, transaction-type: ${this.tType}, amount: ${this.amount}]`;
    },
    
    db: [],
    populateDb: function() {
      // this.db.push();
      this.db.push(this.transaction("Rice", "Expenses", 50.00));
      this.db.push(this.transaction("Beans", "Sales", 100.00));
      this.db.push(this.transaction("tooth-brush", "Expenses", 30));
      this.db.push(this.transaction("Drugs", "Sales", 90.00));
    },

    getdb: function () {
      return this.db;
    },

    filterSales: function () {
      let sales = [];
      for (let index = 0; index < this.getdb().length; index++) {
        if (this.db[index] != null) {
          if (this.db[index].tType === "Sales") {
            sales.push(this.db[index]);
          }
        }
      }
      return sales;
    },

    filterExpense: function () {
      let expenses = [];
      for (let index = 0; index < this.getdb().length; index++) {
        if (this.db[index] != null) {
          if (this.db[index].tType === "Expenses") {
            expenses.push(this.db[index]);
          }
        }
      }
      return expenses;
    },

    cashAtHand: function () {
      let expenseAmt = 0.0;
      let salesAmt = 0.0;
      for (const expense of this.filterExpense()) {
        expenseAmt += expense.amount;
      }
      for (const sale of this.filterSales()) {
        salesAmt += sale.amount;
      }
      return salesAmt - expenseAmt;
    },

    save: function (tA) {
      if (tA != null) {
        this.db.push(tA);
        return tA;
      }
    }
}


TclassObj.populateDb();
console.log(TclassObj.save(TclassObj.transaction("Cloth", "Sales", 80)));
console.log(TclassObj.filterExpense());
console.log(TclassObj.filterSales());
console.log(TclassObj.cashAtHand());



