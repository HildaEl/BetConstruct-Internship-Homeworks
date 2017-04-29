function some(array, f) {
    'use strict';
    for(var i = 0, len = array.length; i < len; i++) {
        if(f(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
