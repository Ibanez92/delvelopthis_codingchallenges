const date = new Date();

const dayOfWeek = (date.toLocaleString(undefined, {weekday: 'long'}))
const time = date.toLocaleTimeString((undefined, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}));

console.log(`Today is : ${dayOfWeek}`)
console.log(`Current time is : ${time} : `);
// ${minSec}