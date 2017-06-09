function XDOM() {};

XDOM.prototype.select = function(selector) {
    var selectors = selector.split(' '),
        elements = [document];
        temp = [];

        for (var i = 0; i < selectors.length; i++) {
            var s = selectors[i];
            for (var j = 0; j < elements.length; j++) {
                if (this.isTagSelector(s)) {
                    var t = elements[j].getElementsByTagName(s);
                    for (var k = 0; k < t.length; k++) {
                        temp.push(t[k]);
                    }
                } else if (this.isIdSelector(s)) {
                    temp[0] = document.getElementById(s.substring(1));
                } else if (this.isClassSelector(s)) {
                    var t = elements[j].getElementsByClassName(s.substring(1));
                    for (var k = 0; k < t.length; k++) {
                        temp.push(t[k]);
                    }
                }
            }
            elements = temp;
            temp = [];

        }
            return new Elements(elements);
    };
XDOM.prototype.isTagSelector = function(selector) {
            return !this.isIdSelector(selector) && !this.isClassSelector(selector);
        }
XDOM.prototype.isIdSelector = function(selector) {
            return selector[0] === '#';
        }
XDOM.prototype.isClassSelector = function(selector) {
            return selector[0] === '.';
        }

function Elements(elements) {
    this.elements = elements || [];
}
Elements.prototype.addClass = function(className) {
    this.elements.forEach(function(e) {
        if(!(e.classList.contains(className)) && e!==null){
            e.className += e.className.length ? (" " + className) : className;
        }
    });
};
Elements.prototype.removeClass = function(className) {
    this.elements.forEach(function(e) {
        if(e!==null) {e.classList.remove(className)};
    });
};
Elements.prototype.hasClass = function(className) {
    return this.elements.every(function(e) {
        if(e!==null) {e.classList.contains(className)}
    });
};
Elements.prototype.toggleClass = function(className) {
    this.elements.forEach(function(e) {
        if(e!==null){e.classList.toggle(className)};
    });
};


var x = new XDOM();
var result = x.select("#innerP1 p");
for(var i = 0; i < result.elements.length; i++) {
    console.log(result.elements[i]);
}
x.select("#innerP1 p").addClass("kl");