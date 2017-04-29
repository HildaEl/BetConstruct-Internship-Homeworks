function map(array, f) {
    var newArr = [];
    for(var i = 0, len = array.length; i < len; i++) {
        newArr[i] = f(array[i], i, array);
    }
    return newArr;
}