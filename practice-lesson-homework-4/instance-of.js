(function instanceOf(item, object) {
    'use strict';
    if(item === null) {
        return false;
    }
    return (item instanceof object) || instanceOf(item.__proto__, object);
})([], Function);