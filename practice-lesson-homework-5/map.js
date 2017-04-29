function map(array, f) {
    'use strict';
    var newArr = [];
    for(var i = 0, len = array.length; i < len; i++) {
        newArr[i] = f(array[i], i, array);
    }
    return newArr;
}
