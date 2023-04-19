
//First Function (not working) 
/*
const removeFromArray = function(array, number) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentNumber = array[i];
        if (currentNumber !== number) {
            newArray.push(number);
        }
    }
    return newArray;
} 
*/

//Second Function 
const removeFromArray = function(array, ...number) {
    let newArray = [];
    array.forEach((item) => {
        if (!number.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}



// Do not edit below this line

/* Psuedocode
1. We need 2 input, 1 is array, 2 is the number that we will remove
2. Create a container that store the result
3. Create a loop that go through every value in the array til end
4. Create a function that detect the user input number (2) in the array
5. 
*/

module.exports = removeFromArray;
