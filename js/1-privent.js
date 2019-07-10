// var a = 12;
// //alert(a);
// var a = 13;
// console.log(a);
// var c = '12.5xx';
// console.log(parseInt(c));
// console.log(parseFloat(c));
// var obj = {
//     name: "wang",
//     age: 99
// }
// var name = "王";
// console.log(obj.name);
// console.log(obj['name']);
// console.log(obj[name]);
// //obj.sex='男';
// obj[{}] = '女';
// console.log({});
// console.log(obj);

/*
* var num obj{num:20,fn:AAA} fn
* */
// var num = 10;
// var obj = {num: 20};
// obj.fn = (function (num) {
//     num = this.num + 10;
//     this.num = num + 10;
//     return function () {
//         this.num += ++num;
//     }
// })(num);
// var fn = obj.fn;
// fn();
// obj.fn();
// console.log(num, obj.num);

//51 42


function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
// prototype>>proto:getx gety constructor：fn
Fn.prototype.getX = function () {
    console.log(this.x);
};
Fn.prototype.getY = function () {
    console.log(this.y);
};
var f1 = new Fn;
var f2 = new Fn;
//console.log(f2.x);
console.log(f1.getX === f2.getX);//false
console.log(f1.getY === f2.getY);//true
console.log(f1.__proto__.getY === Fn.prototype.getY);//true
console.log(f1.__proto__.getX === f2.getX);//false
console.log(f1.getX === Fn.prototype.getX);//false
console.log(f1.constructor);//Fn
console.log(Fn.prototype.__proto__.constructor);//object
f1.getX();//100

f1.__proto__.getX();//undefined
f2.getY();//200
Fn.prototype.getY();//undefined