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
// /*验证数组中是否包含某一项*/
// if (ary.indexOf(100)>-1){
//     包含100这项
// }
var ary = [1, 2, 3, 2, 2, 3, 4, 4, 5, 6];
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
