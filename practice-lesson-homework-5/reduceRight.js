function reduceRight(array, f, initialValue) {
    'use strict';
    var i = array.length - 1;
    var result = initialValue || array[i--];
    for(;i >= 0; i--) {
        result = f(result, array[i], i, array);
    }
    return result;
}
