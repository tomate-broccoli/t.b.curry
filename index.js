// index.js
const curry = f=>{
    const g = (cache)=>(...args)=>{
        const a = cache.concat(args)
        if(f.length > a.length) return g(a)
        return f.apply(null, a)
    }
    return (...args)=>{
        return g([])(...args)
    }
}

module.exports = curry

if(module.parent) return

// sample
const samp = require('./index.js')
const f = (a,b,c)=>`a:${a}, b:${b}, c:${c}`
const g = samp(f)
console.log(`** 1: ${g(1, 2, 3)}.`)
console.log(`** 2: ${g(1)(2)(3)}.`)
console.log(`** 3: ${g(1, 2)(3)}.`)
console.log(`** 4: ${g(1)(2, 3)}.`)
