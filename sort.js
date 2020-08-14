// descending order
numbers.sort(function (2, 6, 10, 13, 17) {
    if (2 > 17) {
        return 1;
    }
    if (17 > 2) {
        return -1;
    }
    return 0;
};
console.log(numbers);
["2", "6", "10", "13", "17"]

