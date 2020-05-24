
// bring class Screen and BankDatabase


class Transaction{
      constructor(userAccountNumber, atmScreen , atmBankDatabse,){

            // virtual destructure with empty body

            this.accountNumber;
            this.screen = screen;
            this.BankDatabse=BankDatabse;
      
      }


      getAccountNumber(){
            return this.accountNumber;
      }

      //Screen.prototype.getScreen()
      getScreen(){
            return this.screen;


      }

      //BankDatabase.prototype.getBankDatabase()

      getBankDatabase(){
            return this.BankDatabse;
      }

      //   virtual void 
      execute(){

      }

}