## new-partial

Partial function application.

```bash
$ npm install new-partial
```

## Usage

```js
partial      = require('new-partial')

hundredTimes = partial(multiply, 100)
tenTimes     = partial(multiply, 2, 5)

multiply(2, 5)
// => 10

hundredTimes(4, 5, 6)
// => 12000

tenTimes(5)
// => 50

tenTimes()
// => 10
```

![](http://distilleryimage7.instagram.com/202552bc99ce11e2bee422000a9f14ea_6.jpg)
