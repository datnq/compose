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

const fn1 = args => {
  // TODO: do things to return updated args
  // ...

  return args
}
const fn2 = args => {
  // TODO: do things to return updated args
  // ...

  return args
}

compose(fn1, fn2)(args)
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

chain(fn1, fn2)(args)
```

## License

MIT

&copy; [Joey Nguyen](https://github.com/datnq)
