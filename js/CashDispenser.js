class CashDispenser{
      constructor(){
            const INITIAL_COUNT = 500;
            var count; //no of $20 remaining

      }
      // constructor function

      CashDispenser(){
            count = INITIAL_COUNT;
      }

      dispenseCash(amount){
            var billsRequired = amount/20;
            count-=billsRequired;
      }

      isSufficientCashAvailable(amount){
            var billsRequired = amount/20;
            if(count>=billsRequired){
                  return true;
            }else{
                  return false;
            }
            


      }

}