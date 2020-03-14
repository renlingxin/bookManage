import Moment from 'moment';
Moment.locale('zh-cn');
// import Vue from 'vue'
const filters = {
  // 过滤器-时间格式转换
  'converTime': function (data, formatStr) {
    if (formatStr) {
      return Moment(data).format(formatStr);
    } else {
      return Moment(data).format('YYYY-MM-DD');
    }
  },
  //   过滤器-相对时间
  'relTime': function (data) {
    return Moment(data).fromNow();
  },
  //   过滤器-字数
  'Wordcontrol': function (str, num) {
    // 如果当前字符串小于num,返回原值
    if (str.length <= num) {
      return str;
    }
    // 如果当前字符串大于num 截取0-num位
    if (str.length > num) {
      return str.substr(0, num) + '...'
    }
  }
}
// 全局循环注册
const index = (Vue) => {
  Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
  })
}
export default index;
