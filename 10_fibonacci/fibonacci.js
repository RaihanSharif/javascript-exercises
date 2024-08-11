const fibonacci = function(num) {
    num = parseInt(num)
    result = 1;
    if (num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }
    if (num === 1){
        return 1;
    } else if (num > 1) {
        return fibonacci(num-1) + fibonacci(num -2);
    }
        
};

// Do not edit below this line
module.exports = fibonacci;
