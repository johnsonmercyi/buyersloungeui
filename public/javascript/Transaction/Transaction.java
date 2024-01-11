package Transaction;

import java.util.ArrayList;
import java.util.stream.Collectors;

public class Transaction {
    private TransactionObj tObj;
    private ArrayList<TransactionObj> dB = new ArrayList<>();

    public Transaction(){
        //populate Db
        populateDb();
    }

    //Constructor
    public Transaction(TransactionObj tObj) {
        this.tObj = tObj;
    }
    
    public static class TransactionObj {
        private String productName;
        private String transactionType;
        private Double amount;

        public TransactionObj(String productName, String transactionType, Double amount) {
            this.productName = productName;
            this.transactionType = transactionType;
            this.amount = amount;
        }

        @Override
        public String toString() {
            return "TransactionObj [productName=" + productName + ", transactionType=" + transactionType + ", amount="
                    + amount + "]";
        }   
            
    }

    //Getters and Setters
    public TransactionObj getObj() {
        return tObj;
    }

    public void setObj(TransactionObj tObj) {
        this.tObj = tObj;
    }

    public ArrayList<TransactionObj> getdB() {
        return dB;
    }

    public void setdB(ArrayList<TransactionObj> dB) {
        this.dB = dB;
    }

    //populate Db
    public void populateDb(){
        TransactionObj Entry1 = new TransactionObj("Rice", "Expenses",50.00);
        TransactionObj Entry2 = new TransactionObj("beans", "Sales",100.00);
        TransactionObj Entry3 = new TransactionObj("tooth-brush", "Expenses",30.00);
        TransactionObj Entry4 = new TransactionObj("Drugs", "Sales",90.00);
        //save to db
        dB.add(Entry1);
        dB.add(Entry2);
        dB.add(Entry3);
        dB.add(Entry4);

    }
    
    //filterSales
    public ArrayList<TransactionObj> filterSales(){
        // ArrayList sales = new ArrayList<>();
        // for (TransactionObj sale : getdB()) {
        //     if ((sale != null)) {
        //         if (sale.transactionType.equals("Sales")) {
        //             sales.add(sale);
        //         }
        //     }
        // }
        // return sales;

            //using Java Stream
        return getdB().stream()
            .filter(sale -> sale.transactionType.equals("Sales"))
            .collect(Collectors.toCollection(ArrayList::new));
    }

    //filterExpense
    public ArrayList<TransactionObj> filterExpense(){
        // ArrayList expenses = new ArrayList<>();
        // for (TransactionObj expense : getdB()) {
        //     if ((expense != null)) {
        //         if (expense.transactionType.equals("Expenses")) {
        //             expenses.add(expense);
        //         }
        //     }
        // }
        // return expenses;
            
            //using Java Stream
        return getdB().stream()
            .filter(sale -> sale.transactionType.equals("Expenses"))
            .collect(Collectors.toCollection(ArrayList::new));
    }

    //Get Cash at hand
    public Double cashAtHand(){
        Double expenseAmt = 0.0; 
        Double salesAmt = 0.0;
        for(TransactionObj expense : filterExpense()){
            expenseAmt +=  expense.amount;
        }
        for(TransactionObj sale: filterSales()){
            salesAmt +=  sale.amount;
        }
        return salesAmt - expenseAmt;
    }

    //save
    public TransactionObj save(TransactionObj tObj){
        if(tObj != null){
            dB.add(tObj);
            return tObj;                          
        }
        return null;
    }
    public static void main(String[] args) {
        Transaction t = new Transaction();
        TransactionObj tObj = new TransactionObj("Cloth", "Sales", 80.00);
        System.out.println("\nSaved Entry");
        System.out.println(t.save(tObj));
        System.out.println("\nAll Entries from Database");
        System.out.println(t.getdB());
        System.out.println("\nFILTER EXPENSE");
        System.out.println(t.filterExpense());
        System.out.println("\nFILTER SALES");
        System.out.println(t.filterSales());
        System.out.println("\nCASH AT HAND");
        System.out.println(t.cashAtHand());
        
    }
  
}
