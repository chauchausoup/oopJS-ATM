class Account{
      constructor(accountNumber,pin,availableBalance,totalBalance){
            this.accountNumber=accountNumber;
            this.pin=pin;
            this.availableBalance=availableBalance;
            this.totalBalance=totalBalance;
      }


      validatePIN(userPIN){
            if(userPIN=== this.pin){
                  return true;
            }else{
                  return false;
            }


      }

      getAvailableBalance(){
            return this.availableBalance;

      }
      getTotalBalance(){
            return this.totalBalance;
      }
      credit(amount){
            this.totalBalance+=amount;
      }
      debit(amount){
            this.availableBalance-=amount;
            this.totalBalance-=amount;
      }

      getAccountNumber(){
            return this.accountNumber;
      }

}
