// index.js
const curry = f=>{
    const g = (cache)=>(...args)=>{
        cache = cache.concat(args)
        if(f.length > cache.length) return g(cache)
        return f.apply(null, cache)
        
    }
    return (...args)=>{
        return g([])(...args)
    }
}
