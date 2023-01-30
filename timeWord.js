const Times = require("./times")

function timeWord(num) {
    let stringHour, stringMin
    let timeofDay = 'am'
    let hour = parseInt(num.slice(0,2));
    let min = parseInt(num.slice(3,5));
    
    if(hour === 0 && min === 0) return 'midnight'; /**This will automatically return midnight */

    if(12 <= hour){
        hour = hour - 12 
        timeofDay = 'pm';/**This will set the time of day to PM since the time was over 12pm */
    } 
    stringHour = Times.hours[hour]; /**Sets string our to eqaul the word in the times object */

    if(num[3] === "0" && num[4] === "0"){
        stringMin = ''; /**This will set stringMin to an empty string since there isnt any mins */
    } else if(num[4] === "0"){
        stringMin = ` ${Times.mins[min]}`; /**If the ending of minuites is 0 then you can just get the time from the times obj without deconstructing */
    } else{
        const doubleDigits = parseInt(`${num[3]}0`); /**Get's the minuite without the ending single digit. For example 36 => 30, 45 => 40, etc */
        const singleDigit = parseInt(num[4]); /**This gets digit that was left out in the above variable. For example 36 => 6, 45 => 5, etc */
        stringMin = ` ${Times.mins[doubleDigits]}-${Times.mins[singleDigit]}`;
    }

    if(!stringHour || stringMin.includes('undefined')){ /**This ensures that none of the data came back with undefined. If it did that means someone entered information in wrong and a msg will be sent */
        return 'Need to enter a valid time'
    }
    return `${stringHour}${stringMin} ${timeofDay}`
}



const time = timeWord("10:60");
console.log(time);


module.exports = timeWord