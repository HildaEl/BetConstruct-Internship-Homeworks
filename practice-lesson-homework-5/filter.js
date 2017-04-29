function filter(array, f) {
    'use strict';
    var newArr = [];
    for(var i = 0,j = 0, len = array.length; i < len; i++) {
        if(f(array[i], i, array)) {
            newArr[j] = array[i];
            j++;
        }
    }
    return newArr;
}
