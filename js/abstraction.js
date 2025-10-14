class BankAccount{
    #balance;
    constructor(accountHolder){
        this.accountHolder = accountHolder;
        this.#balance = 0;

    }

    deposit(amount){
        if(amount>0){
           this.#balance+= amount;
           console.log(`deposit`);
           
        }
    }
    
}