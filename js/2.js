/*var ary1 = [3, 4];
var ary2 = ary1;
ary2[0] = 1;
ary2 = [4, 5];
ary2[1] = 2;
ary1[1] = 0;
console.log(ary1, ary2);
 */

/*
console.log(typeof null);
console.log(typeof []);
console.log(typeof typeof []);
console.log(typeof NaN);
console.log(parseInt('width:35.15px'));
 */

/*
num = 12;
num > 0 ? ((num < 10 ? num++ : num--)) : (num == 0 ? (num++, num = num / 10) : null);
console.log(num);
*/

/*var ary = [12, 23, 34];

for (var i = 0; i < ary.length; i++) {
    if (i%2 == 0)
    {
        console.log(ary[i]);
    }
}*/
console.log(document.getElementById('box'));
var boxlist = document.getElementsByTagName('li');
var oBox = document.getElementById('box');
var boxlist = oBox.getElementsByTagName('li');
console.log(boxlist);
// for (var i = 0; i < boxlist.length; i += 3) {
//     boxlist[i].style.background = 'red';
//     if (i + 1 < boxlist.length) {
//         boxlist[i + 1].style.background = 'blue';
//     }
//     if (i + 2 < boxlist.length) {
//         boxlist[i + 2].style.background = 'green';
//     }
// }
//
// for (let i = 0; i < boxlist.length; i++) {
//     boxlist[i].onmouseover = function () {
//         a = boxlist[i].style.background;
//         // this.aaa=this.style.background;
//         boxlist[i].style.background = 'lightblue';
//     }
//     boxlist[i].onmouseleave = function () {
//         boxlist[i].style.background = a;
//     }
// }

// for (let i = 0; i < boxlist.length; i++) {
//     //alert(11);
//     boxlist[i].onmouseover = function () {
//         boxlist[i].className = 'bg' + (i % 3) + ' hover';
//     }
//     boxlist[i].onmouseleave = function () {
//         boxlist[i].className = 'bg' + (i % 3);
//     }
// }
/*重点*/
for (let i = 0; i < boxlist.length; i++) {
    boxlist[i].className = 'bg' + (i % 3);
    boxlist[i].onmouseover = function () {
        //boxlist[i].style.background = 'lightblue';
        this.className += ' hover';
    }
    boxlist[i].onmouseleave = function () {
        // boxlist[i].style.background = '';
        this.className = this.className.replace(' hover','');
    }

}

