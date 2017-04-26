// 1rst exercise
function indexOf(array, element) {
        for(var i = 0; i < array.length; i++) {
                if(array[i] === element) {
                        return i;
                }
        }
        return -1;
}

// 2nd function
function getRandomInt(max) {
        return Math.round(Math.random() * max);
}

// 3rd funciton
function getRandomMatrix(n, m) {
        var matrix = new Array(n);
        for(var x = 0; x < n; x++) {
                matrix[x] = new Array(m);
                for(var y = 0; y < m; y++) {
                        matrix[x][y] = Math.round(Math.random() * 100);
                }
        }
        return matrix;
}
//4rd function
function matrixIndexOf(matrix, element) {
        for(var x = 0; x < matrix.length; x++) {
                for(var y = 0; y < matrix[x].length; y++) {
                        if(matrix[x][y] === element) {
                                return {rowNumber: x, colNumber: y};
                        }
                }
        }
        return -1;
}

//exercise 5
function LastIndexOf(array, element) {
        for(var i = array.length-1; i >=0 ; i--) {
                if(array[i] === element) {
                        return i;
                }
        }
        return -1;
}

// exercise 6
function matrixLastIndexOf(matrix, element) {
        for(var x = matrix.length-1; x >= 0; x--) {
                for(var y = matrix[x].length-1; y >= 0; y--) {
                        if(matrix[x][y] === element) {
                                return {rowNumber: x, colNumber: y};
                        }
                }
        }
        return -1;
}

// exercise 7 

function equals(a, b) {
        if((a === null || a === undefined) && (b === null || b === undefined)) {
                return true;
        }
        if((typeof a !== "object" && typeof a !== "function") && (typeof b!=="object" && typeof b!== "function")) {
                return a === b;
        }
        if(typeof a !== typeof b) {
                return false;
        }
        if(Object.getOwnPropertyNames(a).toString() !== Object.getOwnPropertyNames(b).toString()) {
                return false;
        }
        for(prop in a) {
                if(!equals(a[prop], b[prop])) {
                        return false;
                }
        }
        return true;
}


