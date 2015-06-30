/* ==========================================================================
    Name space declaration with module pattern.
    nameSpace {object}
    @Description: We are basically creating an empty object here, unless
                  there is a global object called nameSpace, in which case we
                  will clone it then. Should be in its own file.
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
        privateVar = "asta este o variabila privata, adica nu este returnata din functia autoapelanta";

    function privateMethod() {
        alert('asta este o metoda privata, nu poate fi accessata din scopul global');
    }

    publicObject.publicVar = "asta este o variabla publica, o sa fie disponibila din obiectul returnat.";
    publicObject.publicMethod = function () {
        alert('asta este o metoda publica, poate fi accesata din obiectul returnat');
    };
    return publicObject;
}());