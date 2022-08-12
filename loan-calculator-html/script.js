// Get Inputs
let loan_amount = document.querySelector('#loan-amount');
let interest_rate = document.querySelector('#interest-rate');
let loan_term = document.querySelector('#loan-term');

// On load calculate the monthly payment
calculateMonthlyPayment();

// set on keyup event listener to loan amount
loan_amount.addEventListener('keyup', calculateMonthlyPayment);

// Calculate the monthly payment
function calculateMonthlyPayment() {
    console.log('calculateMonthlyPayment');
    // get the values from the inputs
    let principal = parseFloat(loan_amount.value) ? parseFloat(loan_amount.value) : 500000;
    let calculatedInterestRate = parseFloat(interest_rate.value)? ( parseFloat(interest_rate.value) / 100 ) : (15 / 100) ;
    let calculatedLoanTerm = parseFloat(loan_term.value)?  parseFloat(loan_term.value) * 12 : 60 * 12;
    
    console.log({principal, calculatedInterestRate, calculatedLoanTerm});
    let x = Math.pow(1 + calculatedInterestRate, calculatedLoanTerm);
    let monthly = (principal*x*calculatedInterestRate)/(x-1);

    // Calculate the total payment
    let total = monthly * calculatedLoanTerm;
    // if (isFinite(total)) {
    //     document.querySelector('#monthly_payment').innerHTML = total.toFixed(2);
    // } else {
    //     document.querySelector('#monthly_payment').innerHTML = '';
    // }

    // calculate monthly payment
    let monthlyPayment = principal * (calculatedInterestRate / 12);
    if (isFinite(monthlyPayment)) {
        // set number to 2 decimal places and separate with commas

        document.querySelector('#monthly_payment').innerHTML = monthlyPayment.toLocaleString('en-US', {maximumFractionDigits: 2});
    } else {
        document.querySelector('#monthly_payment').innerHTML = '';
    }

    // Calculate the total interest
    let totalInterest = principal * calculatedInterestRate;
    if (isFinite(totalInterest)) {
        document.querySelector('#total-interest').innerHTML = totalInterest.toLocaleString('en-US', {maximumFractionDigits: 2});
    } else {
        document.querySelector('#total-interest').innerHTML = '';
    }

    // Total principal interest
    let totalPrincipalInterest = total + totalInterest;
    if (isFinite(totalPrincipalInterest)) {
        document.querySelector('#total-principal-interest').innerHTML = totalPrincipalInterest.toLocaleString('en-US', {maximumFractionDigits: 2});
    } else {
        document.querySelector('#total-principal-interest').innerHTML = '';
    }
}