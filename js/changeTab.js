var tabBox = document.getElementById('tabBox');
//var tablist = tabBox.getElementsByTagName('li');
var tablist = tabBox.getElementsByTagName("li");
var divlist = tabBox.getElementsByTagName('div');
console.log(tabBox.querySelectorAll('li'));
console.log(tabBox.getElementsByTagName('ul')[0]);

/*获取页面中所有id项*/
function querryAllId(id) {
    var nodeList=document.getElementsByTagName('*');
    var ary=[];
    for (var i = 0; i < nodeList.length; i++) {
        item=nodeList[i];
        item.id===id?ary.push(item):null;
    }
    return ary;
}
var aa=querryAllId('tabBox');
console.log(aa[0]);
console.log(aa[0].getElementsByTagName('li'));
//console.log(querryAllId('tabBox'));

// for (let i = 0; i < tablist.length; i++) {
//     //tablist[i].myindex=i;
//     tablist[i].onclick = function () {
//         //changetab(this.myindex);
//         //alert(i);
//         changetab(i);
//     }
// }
//循环三次，形成三个不销毁的私有作用域（自执行函数执行），而每一个不销毁的栈内存中都存储了i，
//点击时执行返回的小函数，遇到变量i，向上级作用域查找，找到是1、2、3
for (var i = 0; i < tablist.length; i++) {
    tablist[i].onclick = (function (n) {
        var i=n;
        return function () {
            changetab(i);
        }
    })(i);
}
function changetab(n) {
    for (var i = 0; i < tablist.length; i++) {
        tablist[i].className = '';
        divlist[i].className = '';
    }
    tablist[n].className = 'active';
    divlist[n].className = 'active';
}

/*var lastIndex=0;
for (let i = 0; i < tablist.length; i++) {
    tablist[i].myIndex=i;
    tablist[i].onclick = function () {
        if (lastIndex === this.myIndex) return;
        tablist[lastIndex].className = '';
        divlist[lastIndex].className = '';
        this.className = 'active';
        divlist[this.myIndex].className = 'active';
        lastIndex = this.myIndex;

    }
}*/

/*
for (var i = 0; i < tablist.length; i++) {
    tablist[i].onclick = function () {
        changetab2(this);

    }
}
function changetab2(m) {
    for (var j=0; j < tablist.length; j++) {
        if (tablist[j] == m) {
            tablist[j].className = 'active';
            divlist[j].className = 'active';
        } else {
            tablist[j].className = '';
            divlist[j].className = '';
        }
    }
}
*/


for (let i = 0; i < tablist.length; i++) {
    tablist[i].onmouseover = function () {
        tablist[i].style.background = 'lightblue';
    }
    tablist[i].onmouseleave = function () {
        tablist[i].style.background = '';
    }
}