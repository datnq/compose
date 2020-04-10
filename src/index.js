const compose = (...fns) => arg => fns.reduceRight((a, f) => f(a), arg)

const chain = (...fns) => (...args) => {
  const run = fn => {
    if (fn) {
      fn(...args, () => run(fns.shift()))
    }
  }
  run(fns.shift())
}

module.exports = { compose, chain }
