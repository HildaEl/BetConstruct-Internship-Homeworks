function filter(array, f) {
    var newArr = [];
    for(var i = 0,j = 0, len = array.length; i < len; i++) {
        if(f(array[i], i, array)) {
            newArr[j] = array[i];
            j++;
        }
    }
    return newArr;
}
