//task 1
function definitionType(variable) {
    return typeof (variable);
}

console.log(definitionType(10));

//task2

let array = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];

function increase(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    })
}

function waning(arr) {
    return arr.sort(function (a, b) {
        return b - a;
    })
}

function removeElement(arr, str) {
    let uniqueArray = arr.filter(function (item, pos) {
        return arr.indexOf(item) == pos;
    })

    if (str == 'возрастание')
        return increase(uniqueArray);
    else if (str == 'убывание')
        return waning(uniqueArray);
}

function findMaxElement(arr) {
    return Math.max.apply(null, arr);
}

function findMinElement(arr) {
    return Math.min.apply(null, arr);
}


console.log(increase(array));
console.log(waning(array));
console.log(removeElement(array, 'возрастание'));
console.log(removeElement(array, 'убывание'));
console.log(findMaxElement(array));
console.log(findMinElement(array));

//task3

let arrObj = [{ name: 'overflow', value: 'hidden' }, { name: 'cursor', value: 'pointer' }];

function hiddenPointer(arr) {
    let obj = arr.reduce((combo, item) => {
        combo[item.name] = item.value;
        return combo;
    }, {});
    

    return obj;

}

console.log(hiddenPointer(arrObj));