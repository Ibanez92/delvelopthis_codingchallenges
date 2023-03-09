

const totalComp = (salary, bonus, stock) => {
    // The output of the function should return what your first year total compensation will be (stock grant included) and what the next two years will be assuming a 3 percent merit increase each year. All values should be rounded up to the nearest integer digit.
   
    let year_1 = Math.ceil(helper_adding_function(salary, bonus, stock))
    let year_2 = Math.ceil(helper_adding_function(salary * 1.03, bonus))
    let year_3 = Math.ceil(helper_adding_function((salary * 1.03) * 1.03, bonus))

    return year_1 , year_2, year_3;

    
}
const helper_adding_function = (salary, bonus, stock) => {
    return salary + salary * bonus + stock
}



module.exports = totalComp;