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

const Database = {
        
    db: [],

    populateDb: function(){           
        this.db.push(new Tclass("Rice", "Expenses",50.00));
        this.db.push(new Tclass("Beans", "Sales",100.00));
        this.db.push(new Tclass("tooth-brush", "Expenses",30));
        this.db.push(new Tclass("Drugs", "Sales",90.00));
    },

    getdb: function(){
        return this.db;
    },

    filterSales: function(){
        let sales = [];
        for (let index = 0; index < this.getdb().length; index++) {
            if(this.db[index] != null){
                if(this.db[index].getTtype() === "Sales"){
                    sales.push(this.db[index]);
                }
            }  
        }
        return sales;
    },

    filterExpense: function(){
        let expenses = [];
        for (let index = 0; index < this.getdb().length; index++) {
            if(this.db[index] != null){
                if(this.db[index].getTtype() === "Expenses"){
                    expenses.push(this.db[index]);
                }
            }  
        }
        return expenses;
    },
    cashAtHand: function(){
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
    save: function(tA){
        if(tA != null){
            this.db.push(tA);
            return tA;
        }
    }
} 


const go = new Tclass();
Database.populateDb();
go.setTtype("Sales");
go.setProductName("Cloth");
go.setAmount(80);
console.log(Database.save(go));
console.log(Database.filterExpense());
console.log(Database.filterSales());
console.log(Database.cashAtHand());




