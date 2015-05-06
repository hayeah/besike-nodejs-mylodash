var _ = {
    // ...
};

_.once = function(fn){
    var invoked = false;
    var tmp;

    return function(){
        if(invoked == false){
            invoked = true;
            tmp = fn();
        }
        return tmp;
    }
};

_.memoize = function(fn){
    var obj = new Array();
    var resolver = arguments[1];

    return function(o){
        var index = o;

        if(resolver){
            index = resolver(o);
        }

        if(!(index in obj)){
            obj[index] = fn(o);
        }
        return obj[index];
    }
};

_.bind = function(fn, data){

    return function(){
        return fn.call(data);
    };
}

module.exports = _;