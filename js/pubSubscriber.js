/* ==========================================================================
    Name space inheritance
   ========================================================================== */
var nameSpace = nameSpace || {};


/* ==========================================================================
    subscriber pattern
   ========================================================================== */
nameSpace.modules.events = (function () {
    'use strict';
    
    var handlers = {};
  
    var listen = function (name, fn) {
      if (!(name in handlers)) {
        handlers[name] = [];
      }
      
      handlers[name].push(fn);
    };
    
    var fire = function (name) {
      if (name in handlers) {
        for(var i = 0; i < handlers[name].length; i++) {
          //i don't need to use the context so just execute the function
          // handlers[name][i].call(context);
          handlers[name][i](name);
        }
      }
    };
    
    return {
      listen: listen,
      fire: fire
    };
}());
console.log(nameSpace.modules.events);

/* ==========================================================================
   handler {function}/{object}
   Description - This would be any handler function from anywhere.
   Use         - You will need to add in the call to events from the module
                  and namespace: nameSpace.modules.events.listen for ex
   ========================================================================== */
var execute = (function (document) {
        'use strict';
        var eventBoomBtn = document.getElementById('eventBoomBtn'),
            eventFireBtn = document.getElementById('eventFireBtn'),
            logger = function (event) {
                // this ??? undefined
                console.log(event + " was fired");
            },
            _this = this;
            
        eventBoomBtn.addEventListener('click', function () {
            nameSpace.modules.events.fire('boom');
        });
        
        eventFireBtn.addEventListener('click', function () {
            nameSpace.modules.events.fire('fuego!');
        });
        
        nameSpace.modules.events.listen('fuego!', logger);
        nameSpace.modules.events.listen('boom', logger);
        nameSpace.modules.events.listen('kaboom', logger);
        
}(window.document));
        nameSpace.modules.events.fire('kaboom');