var str = 'xuexishijian'
console.log(str.length);
console.log(str.charAt(0));
console.log(str.substr(0, 2));//从索引0开始截取2个字符
console.log(str.substring(0, 2));//从索引0截取到索引2，不包含索引2
console.log(str.toUpperCase());//小写转大写

var str1 = '12+23+34';
console.log(str1.split('+'));//将字符串按分隔符切割成数组
console.log(str1.replace('+', ':'));//在不使用正则情况下，每执行一次只替换一个
console.log(str1.replace(/\+/g, ':'));//配合正则使用

var str2 = '2018-4-4 16:28:08'
// 万能时间格式显示
~function (pro) {
    pro.formatTime = function (template) {
        template = template || '{0}年{1}月{2}日 {3}时{4}分{5}秒';
        var ary = this.match(/\d+/g);
        template = template.replace(/\{(\d+)\}/g, function () {
            var n = arguments[1],
                val = ary[n] || '0';
            val < 10 ? val = '0' + val : null;
            return val;
        });
        return template;
    }
}(String.prototype);
a = str2.formatTime('{1}月{2}日 {3}时{4}分');
console.log(a);

//URL地址问号传参解析
var str3 = 'https://www.baidu.com/?lx=1&name=AA&sex=man';
/*
var indexASK = str3.indexOf('?');
var indexWell = str3.indexOf('#');
if (indexWell > -1) {
    str3 = str3.substring(indexASK + 1, indexWell);
} else {
    str3 = str3.substring(indexASK + 1);
}
str3 = str3.split('&');
var obj = {};
for (let i = 0; i < str3.length; i++) {
    var arry=str3[i].split('=');
    var key = arry[0];
    var value = arry[1];
    obj[key] = value;

}
console.log(obj);*/
//正则解决
~function (pro) {
    pro.queryURLParameter = function () {
        var obj = {},
            reg = /([^?=&#]+)(?:=([^?=&#]+)?)/g;
        this.replace(reg, function () {
            var key = arguments[1],
                value = arguments[2] || null;
            obj[key] = value;
        });
        return obj;
    }
}(String.prototype);
console.log(str3.queryURLParameter());
/*基于A标签实现*/
/*
function queryURLParameter1(str) {
    var link = document.createElement('A');
    link.href = str;
    var search = link.search.substr(1),
        hash = link.hash.substr(1);
    var obj = {};
    hash ? obj.hash = hash : null;
    if (search) {
        search=search.split('&');
        for (let i = 0; i < search.length; i++) {
           var item=search[i].split('=');
           obj[item[0]]=item[1];
        }
    }
    return obj;
}
*/

// console.log(queryURLParameter1(str3));