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

//字符串检测
function checkString(str, min, max) {
  var reg = /^[a-z0-9_-]{6,18}$/;
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

module.exports = {
  checkPhone: checkPhone,
  checkString: checkString,
  compare: compare
}