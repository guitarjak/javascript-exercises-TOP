const sumAll = function(a, b) {
    let result = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

/*
sumAll(1, 4) -> need to return the sum of 1 + 2 + 3 + 4 which is = 10

Psuedocode
1.Define a lowest and highest number
2.Make lowest number +1, and store it in a container
3.Repeat till get to the highest number
4.Add all the number in the container

*/