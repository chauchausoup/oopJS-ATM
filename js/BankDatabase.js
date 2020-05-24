class BankDatabase{
      constructor(){
            account1:(12345,54321,1000,1200);
            account2:(98765,56789,200,2000);
            accounts.push_back(account1)
            accounts.push_back(account2)
      }


      // vector of Account 
       accounts;
      //get pointer to account object
      //Account extends BankDatabase
            getAccount(accountNumber){
                  for(/*size_t*/ i= 0 ;i<account.size();i++ ){
                        if ( account [i].getAccountNumber()=== accountNumber)
                              return accounts[i];
                  }
                  return null;

            }

            // determine wether user specified  account number and PIN match those of an account in database

      authenticateUser(userAccountNumber,userPIN){
            const userAccountPointer = this.getAccount(userAccountNumber)
            if(userAccountPointer!== null){
                  return userAccountPointer=validatePIN(userPIN)
            }
            else{
                  return false;
            }
      }


      getAvailableBalance(userAccountNumber){
            userAccountPointer=this.getAccount(userAccountNumber);
            return userAccountPointer.getAvailableBalance();

      }

      getTotalBalance(userAccountNumber){
            userAccountPointer=this.getAccount(userAccountNumber);
            return userAccountPointer.getTotalBalance();


      }
      credit(userAccountNumber,amount){
            userAccountPointer=this.getAccount(userAccountNumber);
            userAccountPointer.credit(amount);

      }
      debit(userAccountNumber,amount){
            userAccountPointer=this.getAccount(userAccountNumber);
            userAccountPointer.debit(amount);

      }
}


