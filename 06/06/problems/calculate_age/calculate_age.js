function calculateAge(birthdayString) {

    // Create a new Date object for the birthdate
    const birthDate = new Date(birthdayString);
    console.log(birthDate);
    
    // Check if the birthdate is valid
    if (isNaN(birthDate.getTime())) {
        throw new Error("Invalid date string");
    }
    
    // Create a new Date object for today's date
    const today = new Date()

    // Calculate the age in years
    let ageInMillieseconds = today - birthDate
    const ageInYears = Math.floor(ageInMillieseconds / (1000 * 60 * 60 * 24 * 365))

    // Display the age in the console
    console.log(`You are ${ageInYears} years old`);

    // Return age
    return ageInYears
}

calculateAge('1990-03-01')

module.exports = calculateAge;
