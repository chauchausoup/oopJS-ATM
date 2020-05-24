
/* #include "Withdrawal.h"
#include "Screen.h"
#include "BankDatabase.h"
#include "Keypad.h"
#include "CashDispenser.h"
 */

static const  CANCELED = 6;

Withdrawal Withdrawal(  userAccountNumber, Screen &atmScreen,
                        BankDatabase &atmBankDatabase, Keypad &atmKeypad,
                        CashDispenser &atmCashDispenser )
    : Transaction( userAccountNumber, atmScreen, atmBankDatabase ),
      keypad( atmKeypad ), cashDispenser( atmCashDispenser )
{

}
void Withdrawal execute()
{
    var cashDispensed = false;
    var transactionCanceled = false;

    BankDatabase &bankDatabase = getBankDatabase();
    Screen &screen = getScreen();

    do
    {

         selection = displayMenuOfAmounts();

        if ( selection != CANCELED )
        {
            amount = selection;


            var availableBalance =
                bankDatabase.getAvailableBalance( getAccountNumber() );

            if ( amount <= availableBalance )
            {

                if ( cashDispenser.isSufficientCashAvailable( amount ) )
                {

                    bankDatabase.debit( getAccountNumber(), amount );
                    cashDispenser.dispenseCash( amount );
                    cashDispensed = true;

                    screen.displayMessageLine(
                        "\nPlease take your cash from the cash dispenser." );
                }
                else
                    screen.displayMessageLine(
                        "\nInsufficient cash available in the ATM.",
                        "\n\nPlease choose a smaller amount." );
            }
            else
            {
                screen.displayMessageLine(
                    "\nInsufficient funds in your account.",
                    "\n\nPlease choose a smaller amount." );
            }
        }
        else
        {
            screen.displayMessageLine( "\nCanceling transaction..." );
            transactionCanceled = true;
        }
    }
    while ( !cashDispensed && !transactionCanceled );
    }
     Withdrawal displayMenuOfAmounts() const
    {
         userChoice = 0;
        Screen &screen = getScreen();

         amounts[] = { 0, 20, 40, 60, 100, 200 };

        while ( userChoice == 0 )
        {

            screen.displayMessageLine( "\nWithdrawal options:" );
            screen.displayMessageLine( "1 - $20" );
            screen.displayMessageLine( "2 - $40" );
            screen.displayMessageLine( "3 - $60" );
            screen.displayMessageLine( "4 - $100" );
            screen.displayMessageLine( "5 - $200" );
            screen.displayMessageLine( "6 - Cancel transaction" );
            screen.displayMessage( "\nChoose a withdrawal option (1-6): " );
             input = keypad.getInput();

            switch ( input )

            {

            case 1:

            case 2:

            case 3:
            case 4:

            case 5:

                userChoice = amounts[ input ];

                break;

            case CANCELED:

                userChoice = CANCELED;

                break;

            default:

                screen.displayMessageLine(

                    "\nIvalid selection. Try again." );

            }

        }


        return userChoice;
    }

