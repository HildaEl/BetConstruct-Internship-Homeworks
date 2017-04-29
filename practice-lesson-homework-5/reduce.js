function reduce(array, f, initialValue) {
    var i = 0;
    var result = initialValue || array[i++];
    for(var len = array.length; i < len; i++) {
        result = f(result, array[i], i, array);
    }
    return result;
};

