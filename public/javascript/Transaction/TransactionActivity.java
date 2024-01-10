package Transaction;

import java.util.ArrayList;

public class TransactionActivity {
  private String productName;
  private String tType;
  private Double productPrice;
  private static int productStock = 700;
  private int noBought;
  private int noSold;

  // Constructors
  public TransactionActivity(String productName, String tType, Double productPrice, int noBought, int noSold) {
    this.productName = productName;
    this.tType = tType;
    this.productPrice = productPrice;
    this.noBought = noBought;
    this.noSold = noSold;
  }
  // Getter and Setters

  public String getProductName() {
    return productName;
  }

  public void setProductName(String productName) {
    this.productName = productName;
  }

  public String gettType() {
    return tType;
  }

  public void settType(String tType) {
    this.tType = tType;
  }

  public Double getProductPrice() {
    return productPrice;
  }

  public void setProductPrice(Double productPrice) {
    this.productPrice = productPrice;
  }

  public int getProductStock() {
    return productStock;
  }

  public void setProductStock(int productStock) {
    TransactionActivity.productStock = productStock;
  }

  public int getNoBought() {
    return noBought;
  }

  public void setNoBought(int noBought) {
    this.noBought = noBought;
  }

  public int getNoSold() {
    return noSold;
  }

  public void setNoSold(int noSold) {
    this.noSold = noSold;
  }

  @Override
  public String toString() {
    return "\nTransactionActivity [productName=" + productName + ",\n tType=" + tType + ",\n productPrice="
        + productPrice
        + ",\n noBought=" + noBought + ",\n noSold=" + noSold + "]\n";
  }

  public enum ActivityType {
    SALES,
    EXPENSES
  }

  public static class Database {
    private ArrayList<TransactionActivity> dB = new ArrayList<>();

    // Constructor
    public Database() {
      // populate Db
      populateDb();
    }

    public void populateDb() {
      TransactionActivity Entry1 = new TransactionActivity("Rice", ActivityType.EXPENSES.toString(), 50.00, 40, 0);
      TransactionActivity Entry2 = new TransactionActivity("beans", ActivityType.SALES.toString(), 100.00, 0, 10);
      TransactionActivity Entry3 = new TransactionActivity("tooth-brush", ActivityType.EXPENSES.toString(), 30.00, 50,
          0);
      TransactionActivity Entry4 = new TransactionActivity("Drugs", ActivityType.SALES.toString(), 90.00, 40, 20);
      // save to db
      dB.add(Entry1);
      dB.add(Entry2);
      dB.add(Entry3);
      dB.add(Entry4);

    }

    // Getter and setters
    public ArrayList<TransactionActivity> getdB() {
      return dB;
    }

    public void setdB(ArrayList<TransactionActivity> dB) {
      this.dB = dB;
    }

    // filterSales
    public ArrayList<TransactionActivity> filterSales() {
      ArrayList sales = new ArrayList<>();
      for (TransactionActivity sale : getdB()) {
        if ((sale != null)) {
          if (sale.tType.equals(ActivityType.SALES.toString())) {
            sales.add(sale);
          }
        }
      }
      return sales;
    }

    // filterExpense
    public ArrayList<TransactionActivity> filterExpense() {
      ArrayList expenses = new ArrayList<>();
      for (TransactionActivity expense : getdB()) {
        if ((expense != null)) {
          if (expense.tType.equals(ActivityType.EXPENSES.toString())) {
            expenses.add(expense);
          }
        }
      }
      return expenses;
    }

    // Get Cash at hand
    public Double cashAtHand() {
      Double expenseAmt = 0.0;
      Double salesAmt = 0.0;
      for (TransactionActivity expense : filterExpense()) {
        expenseAmt += expense.productPrice * expense.noBought;
      }
      for (TransactionActivity sale : filterSales()) {
        salesAmt += sale.productPrice * sale.noSold;
      }
      return salesAmt - expenseAmt;
    }

    // save
    public TransactionActivity save(TransactionActivity tA) {
      if (tA != null) {
        if (tA.tType.equals(ActivityType.EXPENSES.toString())) {
          tA.productStock += tA.noBought;
          dB.add(tA);
          return tA;
        } else if (tA.tType.equals(ActivityType.SALES.toString())) {
          // Check if product Stock is greater than number of requested sale
          if (tA.productStock > tA.noSold) {
            tA.productStock -= tA.noSold;
            dB.add(tA);
            return tA;
          } else {
            System.out.println(String.format("Stock is remaining %i", tA.productStock));
          }
        }
      }
      return null;
    }
  }

  public static void main(String[] args) {
    Database db = new TransactionActivity.Database();
    TransactionActivity t1 = new TransactionActivity("cloth", ActivityType.EXPENSES.toString(), 50.00, 10, 0);
    System.out.println(db.save(t1).toString());
    System.out.println(db.getdB());
    System.out.println("");
    System.out.println("\nfiltered Expenses: " + db.filterExpense());
    System.out.println("");
    System.out.println("\nfiltered Sales: " + db.filterSales());
    System.out.println("");
    System.out.println("\nCash at hand: " + db.cashAtHand());

  }
}
