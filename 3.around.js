/**
 * 方法环绕通知
 * 原方法的执行需在环绕通知方法中执行
 */
Function.prototype.around = function (beforefn, afterfn) {
  return (...args) => {
    beforefn(...args);
    let ret = this(...args);
    afterfn(...args);
    return ret;
  };
};


function sleep(who){
  console.log(who + '睡觉');
  return true 
}

const aroundSleep = sleep.around(()=>{
  console.log('玩手机')
},()=>{
  console.log('做梦')
})

const ret = aroundSleep('韩梅梅');
console.log(ret);
