const compose = (...fns) => (...args) =>
  fns.reduceRight((arg, fn) => fn(arg), args)

const chain = (...fns) => (...args) => {
  const run = fn => {
    if (fn) {
      fn(args, () => run(fns.shift()))
    }
  }
  run(fns.shift())
}

module.exports = { compose, chain }
