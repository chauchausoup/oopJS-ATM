class BalanceInquery{
      constructor(userAccountNumber,atmScreen,atmBankDatabase){

      }
      //also of transaction constructor
      constructor(userAccountNumber,atmScreen,atmBankDatabase){

      }


     // virtual void execute


     execute(){
      getBankDatabase();
      getScreen();
      var availableBalance= bankDatabase.getAvailableBalance(getAccountNumber())
      var totalBalance = bankDatabase.getTotalBalance(getAccountNumber())


      // display the balance info in the screen

      screen.displayMessageLine('\nBalance Information:')
      screen.displayMessage('\nAvailable Balance:')
      screen.displayDollarAmount('Available Balance')
      screen.displayMessage('\nTotal Balance:  ')
      screen.displayDollarAmount('totalBalance')
      screen.displayMessageLine('')


     }

}
