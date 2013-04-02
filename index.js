module.exports = partial;

function partial(fn /* [, initialArgs] */){

  var initialArgs = Array.prototype.slice.call(arguments, 1);

  return function(){

    var args = Array.prototype.slice.call(initialArgs, 0);

    Array.prototype.push.apply(args, arguments);

    return fn.apply(undefined, args);

  };
};
