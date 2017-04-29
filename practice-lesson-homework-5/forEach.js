function forEach(array, f) {
    for(var i = 0, len = array.length; i < len; i++) {
        f(array[i], i, array);
    }
}




