let loan_amount = document.querySelector('#loan_amount');
let interest_rate = document.querySelector('#interest_rate');
let loan_term = document.querySelector('#loan_term');


// Calculate the monthly payment
function calculateMonthlyPayment() {
    let principal = parseFloat(loan_amount.value);
    let calculatedInterestRate = parseFloat(interest_rate.value) / 100 / 12;
    let calculatedLoanTerm = parseFloat(loan_term.value) * 12;

    let x = Math.pow(1 + calculatedInterestRate, calculatedLoanTerm);
    let monthly = (principal*x*calculatedInterestRate)/(x-1);
    // Calculate the total payment
    let total = monthly * calculatedLoanTerm;
    if (isFinite(total)) {
        document.querySelector('#total_payment').value = total.toFixed(2);
    } else {
        document.querySelector('#total_payment').value = '';
    }

    // Calculate the total interest
    let totalInterest = total - principal;
    if (isFinite(totalInterest)) {
        document.querySelector('#total_interest').value = totalInterest.toFixed(2);
    } else {
        document.querySelector('#total_interest').value = '';
    }


}