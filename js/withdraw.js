document.getElementById('btn-withdraw').addEventListener('click',function(event){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmmount=withdrawField.value;
    withdrawField.value='';
    if(isNaN(newWithdrawAmmount)){
        alert('Invalid Input');
        return;
    }
    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdawTotal=withdrawTotal.innerText;
    withdrawTotal.innerText=parseFloat(previousWithdawTotal) + parseFloat(newWithdrawAmmount);

    const balanceField=document.getElementById('balance-total');
    const previousBalance=parseFloat(balanceField.innerText);
    if(newWithdrawAmmount > previousBalance){
        alert('Insufficient Balance');
        return;
    }
    const currentBalance=previousBalance - parseFloat(newWithdrawAmmount);
    balanceField.innerText=currentBalance;
})