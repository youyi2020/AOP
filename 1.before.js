
/**
 * AOP 前置通知函数声明
 * 给方法加入前置切片函数
 * 可以在执行方法之前执行一些操作
 * 前置切片的返回值为false时，不影响原方法的执行
 */
Function.prototype.before = function(func){
  return (...args) => {
      func(...args);
      return this(...args);
  }
}

function sleep(who){
  console.log(who + '睡觉');
  return true 
}

const beforeSleep = sleep.before((who)=>{
  console.log(who + '玩手机')
})

const result = beforeSleep('韩梅梅')
console.log(result);
