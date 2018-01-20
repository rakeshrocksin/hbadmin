
// Fn constructor to create multiple emitters
function Emitter(){
    this.events = {}; // one property
}

Emitter.prototype.on = function(type,listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener); // Add fn to that array
}

Emitter.prototype.emit = function(type){
    if (this.events[type]){ // TO check whether the event is available in array
        this.events[type].forEach(function(listener){ 
            listener();
        });
    }
}

module.exports = Emitter;