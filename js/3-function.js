/*function sum(n, m) {
    var tatal = 0;
    tatal = n + m;
    console.log(tatal);
}
sum(4,5);
sum(4);
sum();

var i='3';
i=i+1;
console.log(i);
i+=1;
console.log(i);
i++;
console.log(i);*/
/*//自执行函数
(function () {

})();
~function () {

};
!function () {

};
+function () {

};*/

/*求和*/
function sum() {
    var total = null;
    for (var i = 0; i < arguments.length; i++) {
        var item = arguments[i];
        item = Number(item);//转换成数字类型
        isNaN(item) ? null : total += item;//判断是否为有效数字，非有效数字调过
    }
    return total;
}

//求平均数，去除最大最小值，结果保留两位小数
/*function arg() {
    let ary = [...arguments];
    let ary=[].slice.call(arguments);
    //let ary=Array.from(arguments);
    if (ary.length < 3) {
        console.log("请输入至少三个数");
    }else {
        ary.sort(function (a, b) {
            return a - b;
        }).pop();
        ary.shift();
        return (eval(ary.join('+')) / ary.length).toFixed(2);
    }
}*/
function arg(...ary) {
    if (ary.length < 3) {
        console.log("请输入至少三个数");
    }else {
        ary.sort(function (a, b) {
            return a - b;
        }).pop();
        ary.shift();
        return (eval(ary.join('+')) / ary.length).toFixed(2);
    }
}
console.log(arg(10, 9.8,8.8));

let sum1 = (...arg) => eval(arg.filter(item => !isNaN(item)).join('+'));

console.log(sum1(2, '3', 'aa'));

var ary = [12, 23, 34];
console.log(ary.join('+'));//将数组变为字符串
console.log(eval(ary.join('+')));
/*在数组最后增加*/
// ary.push(100);
// console.log(ary);
// /*从数组最后删除一个*/
// ary.pop();
// console.log(ary);
// /*从数组最前面删除一个*/
// ary.shift();
// console.log(ary);
// /*从数组最前面增加*/
// ary.unshift(12);
// console.log(ary);
// /*从索引n开始，删除m个内容*/
// ary.splice(n,m);
// /*从索引n开始，查到索引m不包含m*/
// ary.slice(n,m);
// /*数组克隆*/
// ary.slice(0);
// ary.slice();
/*升序*/
// ary.sort(function (a, b) {
//     return a-b;
// })
//倒序
// ary.sort(function (a, b) {
//     return 1;
// })
// /*验证数组中是否包含某一项*/
// if (ary.indexOf(100)>-1){
//     包含100这项
// }
let ary1 = [1, 2, 3, 2, 2, 3, 4, 4, 5, 6];
/*//取数组中最大值
console.log(ary.sort(function (a, b) {
    return b - a;
})[0]);
console.log(Math.max(...ary));
console.log(Math.max.apply(null, ary));*/

/*
let [a,...b]=ary1;//...被称为剩余运算符，除了前面以外的项，都放在一个数组，必须处于解构的最后位置
let [...arg]=ary1;//数组克隆
let newObg={...obj}//对象克隆
console.log(a, b);
*/

//对象解构赋值，默认情况下，左边变量名跟对象中属性名一致才可以
let obj1 = {name: 'xxx', age: 11, sex: 0}
let {name, age} = obj1;
console.log(name, age);
let {age: ageAA} = obj1;//给变量起别名
console.log(ageAA);
//a b交换位置
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);
// for (var i = 0; i < ary.length - 1; i++) {
//     var item = ary[i];
//     for (var j = i + 1; j < ary.length; j++)
//         if (item === ary[j]) {
//             ary.splice(j, 1);
//             j--;
//         }
//     // for(var k=i-1;k>0;k--){
//     //     if(item===ary[k])
//     //         ary.splice(k,1);
//     //}
//
// }
var newAry = Array.from(new Set(ary));
console.log(newAry);

var obj = {};
for (let i = 0; i < ary.length; i++) {
    item = ary[i];
    /*判断重复*/
    //obj.hasOwnProperty(item) 也可以判断数组中是否有这个属性
    if (typeof (obj[item]) !== 'undefined') {
        ary[i] = ary[ary.length - 1];
        ary.length--;
        i--;
    } else {
        obj[item] = item;
    }
}
console.log(ary);
//Math.round(Math.random() * (m - n) + n)//获取m-n之间的随机整数

/*var aa = (function () {
    return {
        aa: function () {

        }
    }

})()*/

