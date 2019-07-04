var n = 2;
var obj = {
    n: 3,
    fn: (function (n) {
        n *= 2;
        this.n += 2;
        var n = 5;
        return function (m) {
            this.n *= 2;
            console.log(m + (++n));
        }
    })(n)
};
var fn = obj.fn;

fn(3);
//obj.fn(3);
//console.log(n, obj.n);4

/*闭包：形成一个不销毁的私有作用域（私有栈内存）才是闭包
* 闭包具有保护作用：保护私有变量不受外界干扰
* 闭包具有保存作用：形成不销毁的内存栈，把一些值保存下来，方便后面调用
* */
//闭包：柯理化函数
function fn() {
    return function () {
    }
}
var f=fn();
//闭包：惰性闭包
var utils=(function () {
    return{

    }
})();