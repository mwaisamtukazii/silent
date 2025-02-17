function calculateRetirementTime() {
    const dob = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');
    
    // Validate if date of birth is provided
    if (!dob) {
        resultDiv.innerHTML = 'Please enter your date of birth!';
        return;
    }

    const birthDate = new Date(dob);
    const currentDate = new Date();
    const retirementAge = 60; // Constant retirement age
    const currentAge = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has already passed this year
    const isBirthdayPassed = currentDate.getMonth() > birthDate.getMonth() || 
                             (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());

    const age = isBirthdayPassed ? currentAge : currentAge - 1;
    const yearsRemaining = retirementAge - age;

    if (yearsRemaining <= 0) {
        resultDiv.innerHTML = 'You are already at or above retirement age!';
        return;
    }

    // Calculate months and days remaining
    const monthsRemaining = yearsRemaining * 12;
    const daysRemaining = yearsRemaining * 365;

    resultDiv.innerHTML = `You have <strong>${yearsRemaining}</strong> years, <strong>${monthsRemaining}</strong> months, or <strong>${daysRemaining}</strong> days until retirement!`;
}