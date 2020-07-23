const account = {
    name : 'Sivani Jaiswal',
    expenses : [],
    income:[],

    addExpense: function(description,amount){
        this.expenses.push(
            {description:description
            ,amount:amount
        })
    },

    addIncome: function(description,amount){
        this.income.push(
            {description:description
            ,amount:amount
        })
    },

    getSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function(expenses){
            totalExpenses = totalExpenses + expenses.amount
        })

        this.income.forEach(function(incomes){
            totalIncome = totalIncome + incomes.amount
        }) 

        accountBalance = totalIncome - totalExpenses
        console.log(accountBalance)



        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in Income .$${totalExpenses} in expenses`
    }
}

account.addExpense('rent', 200)
console.log(account)
account.addExpense('coffee', 2)
account.addIncome('job', 1000)

console.log(account)
console.log(account.getSummary())