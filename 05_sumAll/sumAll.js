const sumAll = function(first, second) {
    
    const args = Array.from(arguments);

    for (elem of args) {
        if (elem <= 0 || !(Number.isInteger(elem)) || typeof elem != "number") {
            return 'ERROR';
        }
    }

    const big = Math.max(first, second);
    const small = Math.min(first, second);



    return (big * (big + 1)/2) - ((small-1) * (small)/2);
};

// Do not edit below this line
module.exports = sumAll;
