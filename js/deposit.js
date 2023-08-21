document.getElementById('btn-deposit').addEventListener('click',function(event){
    const depositField =document.getElementById('deposit-field');
    const newDepositAmmount=depositField.value;
    depositField.value='';
    if(isNaN(newDepositAmmount)){
        alert('Invalid Input');
        return;
    }
    const depositAmmount=document.getElementById('deposit-total');
    const previousDipositAmmount=depositAmmount.innerText;
    const currentDeposit=parseFloat(previousDipositAmmount) + parseFloat(newDepositAmmount);
    depositAmmount.innerText=currentDeposit;

    const balanceField=document.getElementById('balance-total');
    const previousBalance=balanceField.innerText;
    const currentBalance=parseFloat(previousBalance) + parseFloat(newDepositAmmount);
    balanceField.innerText=currentBalance;
    
})