const compose = (...fns) => (arg) => fns.reduceRight((a, f) => f(a), arg);

const pipe = (...fns) => (arg) => fns.reduce((a, f) => f(a), arg);

const chain = (...fns) => (...args) => {
  const run = (fn) => {
    if (fn) {
      fn(...args, () => run(fns.shift()));
    }
  };
  run(fns.shift());
};

const allSettledAsync = (...fns) => async (...args) => {
  const task = (fn, ...args) => {
    try {
      return Promise.resolve(fn(...args))
    } catch (e) {
      Promise.reject(e)
    }
  }
  return await Promise.allSettled(fns.map(fn => task(fn, ...args)))
}

const mapValuesAsync = (obj, fn) => {
  const p = Object.keys(obj).map((k) => {
    return fn(obj[k]).then((v) => {
      return { key: k, value: v };
    });
  });
  return Promise.all(p).then((values) => {
    const o = {};
    values.forEach((v) => {
      o[v.key] = v.value;
    });
    return o;
  });
};

module.exports = { compose, pipe, chain, allSettledAsync, mapValuesAsync };
