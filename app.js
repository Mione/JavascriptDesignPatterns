/* ==========================================================================
    Name space declaration with module pattern.
    nameSpace {object}
    @Description: We are basically creating an empty object here, unless
                  there is a global object called nameSpace, in which case we
                  will clone it then. Should be in its own file. You could add
                  some init function to it using the same code as in the bellow
                  module, so as to set some defaults.
   ========================================================================== */
var nameSpace = nameSpace || {};

/* ==========================================================================
    Creating a very simple module.
    myModule {object}
    @Description: This guy is actually an object as that gets returned
                  following the auto-execution of its function. The object that
                  gets returned has a series of properties which are public(can
                  be accessed from the global scope), that's the primary
                  advantage of such a construction.
   ========================================================================== */
nameSpace.modules = nameSpace.modules || {};

nameSpace.modules.myModuleName = (function () {
    'use strict';
    var publicObject = {},
        privateVar = 'This is a private variable, meaning  it doesn\'t get returned on the imediately invoked function.';

    function privateMethod() {
        console.log('This is a private method, it can\'t be accessed from the global scope.');
        return false;;
    }

    publicObject.publicVar = 'This one is a public var, it will be available on the returned object.';
    publicObject.publicMethod = function () {
        console.log('This is a public method, it can be accessed from the returned object.');
        return true;
    };
    return publicObject;
}());