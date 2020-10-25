# Most simple `compose` & `chain` utility functions

## Install

Yarn

```sh
yarn add @datnq/compose
```

NPM

```sh
npm install --save @datnq/compose
```

## Usage

**Compose and Pipe**

```js
import { compose, pipe } from '@datnq/compose'

const addOne = n => {
  return arg + 1
}
const double = n => {
  return arg * 2
}

compose(addOne, double)(1) // return 3
// addOne(double(1))

pipe(addOne, double)(1) // return 4
// double(addOne(1))
```

**Chain**

```js
import { chain } from '@datnq/compose'

const hello = (hello, next) => {
  if (hello === 'Hello Joey') {
    return
  } else {
    console.log(hello)
    next()
  }
}

const world = (hello, next) => {
  console.log(hello)
  next()
}


// hello and world have the same argument
chain(hello, world)('Hello!')
// console: Hello! Hello!

chain(hello, world)('Hello Joey')
// console: Hello Joey
// function world is cancelled
```

**allSettledAsync**

Make all sync function run async

```js
import { allSettledAsync } from '@datnq/compose'

const willSuccess = (value) => {
  return value
}

const willFailed = (value) => {
  throw new Error('This should be failed')
}

// willSuccess and willFailed have the same argument
const results = await allSettledAsync(willFailed, willSuccess)(true)
/* results:
[
  {status: "rejected", reason: Error: This should be failed},
  {status: "fulfilled", value: true}
]
*/
````

**mapValuesAsync**

Make all sync function run async

```js
import { chain } from '@datnq/compose'

const object = {
  prop1: 1,
  prop2: 2,
}

const result = await mapValuesAsync(object, propValue => {
  return Promise.resolve(propValue * 2)
})
/* results:
<Promise>: {
  prop1: 2,
  prop2: 4,
}
*/
````

## License

MIT

&copy; [Joey Nguyen](https://github.com/datnq)
