(function createEnum(array) {
    'use strict';
    var Enum = {};
    var track = 0;
    for(var i = 0, len = array.length; i < len; i++) {
        Object.defineProperty(Enum, (array[i].name || array[i]), {
            value: array[i].value || track,
            writable: false,
            enumerable: true,
            configurable: false,
        });
        track = (array[i].value || track) + 1;
    }
    return Enum;
})(['red', {name: 'blue', value: 6 }, 'green']);
