var partial = require("./");

it("returns a new fn which will call fn with collected args", function(){

  var hundredTimes = partial(x, 100),
      tenTimes = partial(x, 2, 5);

  expect(hundredTimes(4, 5, 6)).to.equal(12000);
  expect(tenTimes(5)).to.equal(50);
  expect(tenTimes()).to.equal(10);

});

function x(){
  return Array.prototype.reduce.call(arguments, function(a, b){ return a * b; });
};
