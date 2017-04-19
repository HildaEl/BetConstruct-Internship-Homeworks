// creating API with two functions
   (function() {
        function setPrimitive(object, value) {
            object.value = value;
            function valueOf() {
                return this.value;
            }
            object.valueOf = valueOf;
        }
        function changePrimitive(object, newValue) {
            setPrimitive(object, newValue);
        }
        window.setPrimitive = setPrimitive;
        window.changePrimitive = changePrimitive;
    })();
    var obj = {};
    setPrimitive(obj, 7);
    console.log(obj.valueOf());
    changePrimitive(obj,"hello");
    console.log(obj.valueOf());
