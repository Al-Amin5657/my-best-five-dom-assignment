document.getElementById('calculate').addEventListener('click', function () {
    const playerBudget = document.getElementById('input-field-1');
    const playerBudgetValueString = playerBudget.value;
    const playerBudgetValue = parseInt(playerBudgetValueString);
    const totalPlayerCost = playerBudgetValue * 5;

    const playerExpense = document.getElementById('player-expense');
    const playerValueString = playerExpense.innerText;
    const playerValue = parseInt(playerValueString);

    playerExpense.innerText = totalPlayerCost;


    document.getElementById('calculate-total').addEventListener('click', function () {
        const managerCost = document.getElementById('manager-cost');
        const previousManagerCostString = managerCost.value;
        const previousManagerCost = parseInt(previousManagerCostString);

        const coachCost = document.getElementById('coach-cost');
        const previousCoachCostString = coachCost.value;
        const previousCoachCost = parseInt(previousCoachCostString);

        const totalStaffCost = totalPlayerCost + previousManagerCost + previousCoachCost;

        const totalExpense = document.getElementById('total-expense');
        const previousTotalExpense = totalExpense.innerText;
        const previousTotal = parseInt(previousTotalExpense);

        totalExpense.innerText = totalStaffCost;
    })
})