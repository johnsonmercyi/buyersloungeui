class Tclass {

  constructor(productName, tType, productPrice, noBought, noSold) {
    //Global Instance Variables
    this.productName = productName;
    this.tType = tType;
    this.productStock = 700;
    this.productPrice = productPrice;
    this.noBought = noBought;
    this.noSold = noSold;
  }
  //Getters and Setters
  setProductName(productName) {
    this.productName = productName;
  }
  getProductName() {
    return this.productName;
  }
  setTtype(tType) {
    this.tType = tType;
  }
  getTtype() {
    return this.tType;
  }
  setProductStock(productStock) {
    this.productStock = productStock;
  }
  getProductStock() {
    return this.productStock;
  }
  setProductPrice(productPrice) {
    this.productPrice = productPrice;
  }
  getProductPrice() {
    return this.productPrice;
  }
  setNoBought(noBought) {
    this.noBought = noBought;
  }
  getNoBought() {
    return this.noBought;
  }
  setNoSold(noSold) {
    this.noSold = noSold;
  }
  getNoSold() {
    return this.noSold;
  }
  toString() {
    return `[product-name: ${this.productName}, transaction-type: ${this.tType}, product-price: ${this.productPrice}, number-bought: ${this.noBought}, number-sold: ${this.noSold}]`;
  }


}
//Database class
class Database {

  constructor() {
    this.db = [];
    this.populateDb();
  }

  populateDb() {
    this.db.push(new Tclass("Rice", "Expenses", 50.00, 40, 0));
    this.db.push(new Tclass("Beans", "Sales", 100.00, 0, 10));
    this.db.push(new Tclass("tooth-brush", "Expenses", 30, 50, 0));
    this.db.push(new Tclass("Drugs", "Sales", 90.00, 40, 20));
  }

  getdb() {
    return this.db;
  }

  filterSales() {
    let sales = [];
    for (let index = 0; index < this.db.length; index++) {
      //const element = this.db[index];
      if (this.db[index] != null) {
        if (this.db[index].getTtype() === "Sales") {
          sales.push(this.db[index]);
        }
      }
    }
    return sales;
  }

  filterExpense() {
    
    let expenses = [];
    for (let index = 0; index < this.db.length; index++) {
      
      //const element = this.db[index];
      if (this.db[index] != null) {
        if (this.db[index].getTtype === "Sales") {
          expenses.push(this.db[index]);
        }
      }
    }
    return expenses;
  }

  cashAtHand() {
    let expenseAmt = 0.0;
    let salesAmt = 0.0;
    for (const expense of filterExpense()) {
      expenseAmt += expense.productPrice * expense.noBought;
    }
    for (const sale of filterSales()) {
      salesAmt += sale.productPrice * sale.noSold;
    }
    return salesAmt - expenseAmt;
  }

  save(tA) {
    if (tA) {
      if (tA.gettTtype === "Expenses") {
        tA.productStock += tA.noBought;
        this.db.push(tA);
        return tA;
      } else if (tA.tType === "Sales") {
        if (tA.productStock > tA.noSold) {
          tA.productStock -= tA.noSold
          this.db.push(tA);
          return tA;
        } else {
          console.log("Stock is remaining ", tA.productStock);
        }
      }
    }
  }
}


//Main class
class Main {
  constructor() {
    this.database = new Database();
    this.transaction = new Tclass();
    this.transaction.setTtype("Sales");
    this.transaction.setProductName("Cloth");
    this.transaction.setNoBought(0);
    this.transaction.setNoSold(10);
    this.transaction.setProductPrice(100);
  }
  printDetails() {
    console.log(this.transaction.toString());
  }
  filterSales() {
    console.log(this.database.filterSales());
  }
  filterExpense() {
    console.log(this.database.filterExpense());
  }
  cashAtHand() {
    console.log(this.database.cashAtHand());
  }
  save(tA) {
    console.log(this.database.save());
  }
}

const main = new Main();
main.printDetails();
main.filterExpense();
main.filterSales();


