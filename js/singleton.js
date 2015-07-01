var nameSpace = nameSpace || {};

nameSpace.modules.singleton = (function () {
    'use strict';
    var objectHolder;
    function Person(params) {
        this.name = params.name || "John Doe";
        this.age = params.age || "44";
        this.publicMethod = function () {
            return "raspunsul din methoda publica";
        };
        var mio = "testul lui marius cu var";
    }

    function returnSingleton(objectOfParameters) {
        if (typeof objectHolder === 'undefined') {
            objectHolder = new Person(objectOfParameters);
        }
        return objectHolder;
    }

    return {
        getInstance : returnSingleton
    };

}());

var person = nameSpace.modules.singleton.getInstance({name : 'Mio', age : '4445'});
var person = nameSpace.modules.singleton.getInstance({name : 'asdasd', age : '4445'});
console.log(person);