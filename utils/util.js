function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  }

  let _lastTime = null

  // 返回新的函数
  return function () {
    let _nowTime = + new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments)   //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}


/**
 * 空
 */
function isEmpty(a){
  if (a === undefined) { // 只能用 === 运算来测试某个值是否是未定义的
    console.log("为undefined");
    return false;
  }

  if (a == null) { // 等同于 a === undefined || a === null
    console.log("为null");
    return false;
  }

  // String    
  if (a == "" || a == null || a == undefined) { // "",null,undefined
    console.log("为空");
    return false;
  }
  if (!a) { // "",null,undefined,NaN
    console.log("为空");
    return false;
  }
  if (!$.trim(a)) { // "",null,undefined
    console.log("为空");
    return false;
  }

  // Array
  if (a.length == 0) { // "",[]
    console.log("为空");
    return false;
  }
  if (!a.length) { // "",[]
    console.log("为空");
    return false;
  }

  // Object {}
  if ($.isEmptyObject(a)) { // 普通对象使用 for...in 判断，有 key 即为 false
    console.log("为空");
    return false;
  }
  return true;
}



//电话号码检测
function checkPhone(phone) {
  //手机号正则
  var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
  //电话
  if (!phoneReg.test(phone)) {
    //alert('请输入有效的手机号码！');
    return false;
  }
  return true;
}

//字符串检测 0-9a-zA-Z ?$!@#*~%&=-+
function checkString(str) {
  var reg = /^[\w\?\$!@#*~%&=\-\+_]{6,18}$/;
  if (reg.test(str)) {
    return true
  }
  return false;
}

//数组对象排序
function compare(prop) {
  return function (obj1, obj2) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  }
}

function getPageStack() {
  let page = getCurrentPages();
  let stack = [];
  for (var i = 1; i < page.length; i++) {
    stack.push(page[i].data.where);
  }
  console.log(stack);
}

module.exports = {
  throttle: throttle,
  isEmpty: isEmpty,
  checkPhone: checkPhone,
  checkString: checkString,
  compare: compare,
  getPageStack: getPageStack
}
