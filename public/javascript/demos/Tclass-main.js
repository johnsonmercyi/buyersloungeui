class Tclass {

    constructor(productName, tType, amount){
        //Global Instance Variables
        this.productName = productName;
        this.tType = tType;
        this.amount = amount;     
    }

    //Getters and Setters
    setProductName(productName){
        this.productName = productName;
    }
    getProductName(){
        return this.productName;
    }
    setTtype(tType){
        this.tType = tType;
    }
    getTtype(){
        return this.tType;
    }
    setAmount(amount){
        this.amount = amount;
    }
    getAmount(){
        return this.amount;
    }
   
    toString(){
        return `[product-name: ${this.productName}, transaction-type: ${this.tType}, amount: ${this.amount}]`;
    }
    
}

class Database {

    constructor(){
       this.db = [];
       this.populateDb();
    }
         
    populateDb(){           
        this.db.push(new Tclass("Rice", "Expenses",50.00));
        this.db.push(new Tclass("Beans", "Sales",100.00));
        this.db.push(new Tclass("tooth-brush", "Expenses",30));
        this.db.push(new Tclass("Drugs", "Sales",90.00));
    }

    getdb(){
        return this.db;
    }

    filterSales(){
        let sales = [];
        for (let index = 0; index < this.getdb().length; index++) {
            if(this.db[index] != null){
                if(this.db[index].getTtype() === "Sales"){
                    sales.push(this.db[index]);
                }
            }  
        }
        return sales;
    }

    filterExpense(){
        let expenses = [];
        for (let index = 0; index < this.getdb().length; index++) {
            if(this.db[index] != null){
                if(this.db[index].getTtype() === "Expenses"){
                    expenses.push(this.db[index]);
                }
            }  
        }
        return expenses;
    }
    cashAtHand(){
        let expenseAmt = 0.0;
        let salesAmt = 0.0;
        for (const expense of this.filterExpense()) {
            expenseAmt += expense.amount;
        }
        for (const sale of this.filterSales()) {
            salesAmt += sale.amount;
        }
        return salesAmt - expenseAmt;
    }
    save(tA){
        if(tA != null){
            this.db.push(tA);
            return tA;
        }
    }
} 


const go = new Tclass();
const database = new Database();
go.setTtype("Sales");
go.setProductName("Cloth");
go.setAmount(80);
console.log(database.save(go));
console.log(database.filterExpense());
console.log(database.filterSales());
console.log(database.cashAtHand());




