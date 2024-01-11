const Tclass = {
    productName: undefined,
    tType: undefined,
    amount: undefined,  

    initializeTransaction: function(productName, tType, amount){   
        const instance = Object.create(this);
        instance.productName = productName;
        instance.tType = tType;
        instance.amount = amount;
        return instance;
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
    }
    
}

const Database = {       
    db: [],
    populateDb: function(){           
        this.db.push(Tclass.initializeTransaction("Rice", "Expenses",50.00));
        this.db.push(Tclass.initializeTransaction("Beans", "Sales",100.00));
        this.db.push(Tclass.initializeTransaction("tooth-brush", "Expenses",30));
        this.db.push(Tclass.initializeTransaction("Drugs", "Sales",90.00));
    },

    getdb: function(){
        return this.db;
    },

    filterSales: function(){
        let sales = [];
        for (let index = 0; index < this.getdb().length; index++) {
            if(this.db[index] != null){
                if(this.db[index].tType === "Sales"){
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
                if(this.db[index].tType === "Expenses"){
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


const go = Tclass.initializeTransaction("Initial Product", "Initial Type", 0);
Database.populateDb();
go.setTtype("Sales");
go.setProductName("Cloth");
go.setAmount(80);
console.log(Database.save(go));
console.log(Database.filterExpense());
console.log(Database.filterSales());
console.log(Database.cashAtHand());




