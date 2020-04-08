const compose = (...fns) => args => fns.reduceRight((arg, fn) => fn(arg), args)

module.exports = compose
