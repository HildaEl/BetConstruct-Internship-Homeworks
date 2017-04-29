function every(array, f) {
    for(var i = 0, len = array.length; i < len; i++) {
        if(!f(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

