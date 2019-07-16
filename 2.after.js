/**
 * AOP 后置通知函数声明
 * 给方法加入后置切片函数
 * 可以在执行方法之之后执行一些操作
 * 后置切片的返回值为false时，不影响原方法的执行
 */
Function.prototype.after = function(func){
  return (...args) => {
    const ret = this(...args); 
    func(...args);
    return ret
  }
}

function sleep(who){
  console.log(who + '睡觉');
  return true 
}

const afterSleep = sleep.after((who)=>{
  console.log(who + '做梦')
})

const result = afterSleep('韩梅梅')
console.log(result);
