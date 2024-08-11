const palindromes = function (input) {
    // strip non-alphanumeric chars, ignore case
    input = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
    const reversed = input.split("").reverse().join("");
    return input == reversed;
};

// Do not edit below this line
module.exports = palindromes;
