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

**Compose**

```js
import { compose } from '@datnq/compose'

const fn1 = arg => {
  // TODO: do things to return updated `arg`
  // ...

  return arg
}
const fn2 = arg => {
  // TODO: do things to return updated `arg`
  // ...

  return arg
}

// fn1 and fn2 have the same argument
compose(fn1, fn2)(arg)
```

**Chain**

```js
import { chain } from '@datnq/compose'

const fn1 = (args, next) => {
  // do things
  if (meetStopCondition) {
    return
  } else {
    next() // to continue next function
  }
}

const fn2 = (args, next) => {
  // similar usage of `next`
  next()
}


// fn1 and fn2 have the same argument
chain(fn1, fn2)(args)
````

## License

MIT

&copy; [Joey Nguyen](https://github.com/datnq)
