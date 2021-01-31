const run = (gen) => {
  return new Promise((resolve, reject) => {
    let g = gen(val)

    function _next(val) {
      try{
          var res = g.next(val)
      }catch(err){
        return reject(err)
      }
      if (res.done) return resolve(res.value)
      Promise.resolve(res.value).then(val => {
        _next(val)
      }, err=>{
          g.throw(err)
      })
    }
    _next()
  })
}
