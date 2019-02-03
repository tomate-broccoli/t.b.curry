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
