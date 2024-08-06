const removeFromArray = function() {
    const args = Array.from(arguments).slice(1);
    let tempArr = [];
    arguments[0].forEach(element => {
        if (!(args.includes(element))) {
            tempArr.push(element);
        }
    });
    return tempArr;

};

// Do not edit below this line
module.exports = removeFromArray;

