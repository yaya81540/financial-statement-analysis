export default class Util {
  constructor (options) {
    this.options = options || {}
  }
  // toFixed自定义
  static toFixed (origin, s) {
    let e,
      changeNum,
      index,
      i,
      j
    // 如果值小于0，先转成正数
    if (origin < 0) {
      e = -origin
    } else {
      e = origin
    }
    changeNum = (parseInt(e * Math.pow(10, s) + 0.5) / Math.pow(10, s)).toString()
    index = changeNum.indexOf('.')
    if (index < 0 && s > 0) {
      changeNum += '.'
      for (i = 0; i < s; i++) {
        changeNum += '0'
      }
    } else {
      index = changeNum.length - index
      for (j = 0; j < (s - index) + 1; j++) {
        changeNum += '0'
      }
    }
    if (origin < 0) {
      if (Number(s) > 0) {
        return `-${changeNum}`
      }
      return -changeNum
    }
    return changeNum
  }
  static numberHandle(num,isb){
    num = Number(num);
    let y = Math.pow(10, 8)
    let w = Math.pow(10, 4)
    let b = Math.pow(10, 2)
    if(isb){
      return this.toFixed(num*b,2)+'%'
    }else if(Math.abs(num)/y>1){
      return this.toFixed(num/y,2)+'亿'
    }else if(Math.abs(num)/w>1){
      return this.toFixed(num/y,2)+'万'
    }else{
      return this.toFixed(num,2)
    }
  }
  //日期设置
  static format(date,formatStr) {
    var o = {
      'M+': date.getMonth() + 1, //month 月
      'd+': date.getDate(), //day 日
      'h+': date.getHours(), //hour 时
      'm+': date.getMinutes(), //minute 分
      's+': date.getSeconds(), //second 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //quarter季度
      'S': date.getMilliseconds() //millisecond毫秒
    };

    if (/(y+)/.test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(formatStr)) {
        formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return formatStr;
  };
  /**
     * 正则匹配 url 参数
     * @param name
     * @param url  'http://10.199.136.5:8081/hgweb/index.html?code=11011201&id=103#/cwkjzdba?sider=0&header=1'
     * @returns {any}
     */
  static getUrlParam(name, url) {
    let reg = new RegExp('(^|\\?|&)' + name + '=([^&|#|/]*)(\\s|&|#|/|$)', 'i');
    return reg.test(url || window.location.href) ? window.decodeURIComponent(RegExp.$2.replace(/\+/g, '')) : undefined;
  };
  /*
    * 对象是否是数组类型
    */
  static isArray(data) {
    return Util.getObjectType(data) === '[object Array]';
  };
  /*
    *获取对象的类型
    */
  static getObjectType(data) {
    return Object.prototype.toString.call(data);
  }
}
