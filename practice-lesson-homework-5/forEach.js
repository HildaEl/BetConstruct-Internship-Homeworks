function forEach(array, f) {
    'use strict';
    for(var i = 0, len = array.length; i < len; i++) {
        f(array[i], i, array);
    }
}




