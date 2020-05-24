// this is the main class it works with many other interactive classes


//class Transaction needed

class ATM{
      constructor(){
            this.userAuthenticated = userAuthenticated;
            this.currentAccountNumber= currentAccountNumber;

            //atm's screen
            //atm's keypad
            // atm.s cash dispenser
            // atm's deposit slot
            //bank databse
             
      }

      ATM()

      //userAuthenticated(false),currentAccountNumber(0)
      
      {
           //empty body 
      }
      
      run(){
            while(true){
                  while(!userAuthenticated){
                        screen.displayMessageLine('\nWelcome');
                        authenticateUser();

                  }

                  performTransactions();
                  userAuthenticated=false;
                  currentAccountNumber=0;
                  screen.displayMessageLine('\n Thank You Good Bye!');
            }
      }


      authenticateUser(){
            screen.displayMessage('\n Please Enter your Account Number');
            var accountNumber = keypad.getInput();
            screen.displayMessage('\nEnter your PIN:');
            var pin = keypad.getInput();

            userAuthenticated=bankDatabase.authenticateUser(accountNumber,pin);

            if(userAuthenticated){
                  currentAccountNumber=accountNumber;
            }
            else{
                  screen.displayMessageLine("Invalid Account No or PIN, Please try again!");

            }
      }



      performTransactions(){
            //disaplay the main menu and perform transactions

            // Transaction to local pointer currentTransactionPointer

            let userExited = false;

            // loop while user has not choosen option to exit system

            while(!userExited){
                  var mainMenuSelection = displayMainMenu();

                  // choose how to proceed on the basis of users selection
                  switch(mainMenuSelection){
                        case BALANCE_INQUERY:
                        case WITHDRAWAL:
                        case DEPOSIT:

                              currentTransactionPointer= createTransaction(mainMenuSelection);
                              currentTransactionPointer.execute();
                              delete currentTransactionPointer;
                              break;
                        case EXIT:
                              screen.displayMessageLine('\n Exiting the System...')
                              userExited=true;
                              break;
                        default:
                              screen.displayMessageLine("\nYou didn't entered the valid option please try again");
                              break;



                  }
            }


      }
      displayMainMenu(){
            screen.displayMessageLine('\n Main Menu');
            screen.displayMessageLine('1 - view my balance');
            screen.displayMessageLine('2- withdraw cash');
            screen.displayMessageLine('3- deposit funds');
            screen.displayMessageLine('4- exit');
            screen.displayMessage('enter a choice');


            return keypad.getInput();


      }


      // create a transaction derived class

      //Transaction ATM:: createTransaction(type)
      createTransaction(type){
            //Transaction *tmpPtr

            //determine which type of transaction to create

            switch(type)
            {
                  case BALANCE_INQUERY: // create new balance inquery transaction
                        temPtr = new BalanceInquery(
                              currentAccountNumber,screen,bankDatabase
                        );
                        break;
                  case WITHDRAWAL: // create new balance inquery transaction
                        temPtr = new Withdrawal(
                              currentAccountNumber,screen,bankDatabase,keypad,cashDispenser
                        );
                        break;
                  case DEPOSIT: // create new balance inquery transaction
                        temPtr = new Deposit(
                              currentAccountNumber,screen,bankDatabase,keypad, depositSlot
                        );
                        break;

            }

            return temPtr;

      }

}