const o = {
  a: 'a',
  b: 'b',
  obj: {
    key: 'key',
  },
}

const o2 = Object.assign({}, o)

o2.obj.key = 'new Value'

console.log(o.obj.key);

// o2.a = 'new value'

// console.log(o.a);
