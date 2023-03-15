function calculateAge(birthdayString) {

    // Create a new Date object for the birthdate
    const birthDate = new Date(birthdayString);
    
    // Check if the birthdate is valid
    if (isNaN(birthDate.getTime())) {
        throw new Error("Invalid date string");
    }
    
    const today = new Date()
    let ageInMillieseconds = today - birthDate
    const ageInYears = Math.floor(ageInMillieseconds / (1000 * 60 * 60 * 24 * 365))
    console.log(`You are ${ageInYears} years old`);
    return ageInYears
}

calculateAge('1990-03-01')

module.exports = calculateAge;
