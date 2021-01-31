const isFunction = variable => typeof variable == "function";
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
class myPromise {
    constructor(handle) {
        if (!isFunction(handle)) {
            return new Error(
                "MyPromise must accept a function as a parameter"
            );
        }
        this._status = PENDING;
        this._value = undefined;
        this._fulfilledQueues = [];
        this._rejectedQueues = [];
        try {
            handle(this._resolve.bind(this), this._reject.bind(this));
        } catch (error) {
            this._reject(error);
        }
    }
    _resolve(val) {
        if (this._status !== PENDING) return;
        this._status = FULFILLED;
        this._value = val;
    }
    _reject(err) {
        if (this._status !== PENDING) return;
        this._status = REJECTED;
        this._value = err;
    }
    then(onFulfilled, onRejected) {
        let { _status, _value } = this;
        return new myPromise((onFulfilledNext, onRejectedNext) => {
            switch (_status) {
                case PENDING:
                    this._fulfilledQueues.push(onFulfilled);
                    this._rejectedQueues.push(onRejected);
                    break;
                case FULFILLED:
                    onFulfilled(_value);
                    break;
                case REJECTED:
                    onRejected(_value);
                    break;
            }
            let onFulfilled = value=>{
                try{
                    if(!isFunction(onFulfilled)){
                        onFulfilledNext(value)
                    }else{
                        let res = onFulfilled(value)
                        if(res instanceof myPromise){
                            res.then(onFulfilledNext, onRejectedNext)
                        }else{
                            onFulfilledNext(res)
                        }
                    }
                }catch(err){
                    onRejectedNext(err)
                }
            }
            let onRejected = error =>{
                try{
                    if(!isFunction(onRejected)){
                        onRejectedNext(error)
                    }else{
                        let res = onRejected(error)
                        if(res instanceof myPromise){
                            res.then(onFulfilledNext, onRejectedNext)
                        }else{
                            onRejectedNext(res)
                        }
                    }
                }catch(err){
                    onRejectedNext(err)
                }
            }
        });
    }
}
// promise.prototype.all = (list)=>{
//     return new Promise((resolve,reject)=>{
//         let arr = [], count = 0;
//         for(let [index, item] of list.entries()){
//             this.resolve(item).then(res=>{
//                 arr.push(res)
//                 count ++
//                 if(count==list.length) resolve(arr)
//             }, err=>{
//                 reject(err)
//             })
//         }
//     })
// }
// promise.prototype.race = (list)=>{
//     return new Promise((resolve,reject)=>{
//         for(let item in list){
//             this.resolve(item).then(res=>{
//                 resolve(res)
//             }, err=>{
//                 reject(err)
//             })
//         }
//     })
// }
// let p1 = new myPromise("ggg");
// console.log("pp", p1);