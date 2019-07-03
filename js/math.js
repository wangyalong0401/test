var codeBox = document.getElementById('codeBox');
var link = document.getElementById('link');
console.log(codeBox);
console.log(link);

/*获取四位不重复的验证码*/
function queryCode() {
    var codeArea = 'qwertyuiopasdfghjklzxcvbnm' +
        'QWERTYUIOPASDFGHJKLZXCVBNM' +
        '1234567890';
    var result = '';
    /*  for (let i = 0; i < 4; i++) {
          var n = Math.round(Math.random() * 61);
          char = codeArea.charAt(n);
          if(result.indexOf(char)>-1){
              i--;
              continue;
          }
      }*/
    while (result.length < 4) {
        var n = Math.round(Math.random() * 61);
        char = codeArea.charAt(n);
        if (result.indexOf(char) === -1) {
            result += char;
        }
    }
    return result;
}

codeBox.innerHTML = queryCode();
link.onclick = function () {
    codeBox.innerHTML = queryCode();
};

/*获取当前元素下所有子节点，兼容方法，也可用children方法*/
function children1(culEle) {
    var nodelist = culEle.childNodes;
    var result = [];
    for (let i = 0; i < nodelist.length; i++) {
        if (nodelist[i].nodeType === 1) {
            result.push(nodelist[i]);
        }
    }
    return result;
}

console.log(children1(box));
console.log(box.children);

/*查找当前元素的上一个哥哥元素节点，兼容方法，也可用previousElement方法*/

function prev(culEle) {
    var pre=culEle.previousSibling;
    while (pre!=null && pre.nodeType!=1){
        pre=pre.previousSibling;
    }
    return pre;

}

console.log(prev(test));
console.log(test.previousElementSibling);
/*创建p标签*/
var newP=document.createElement('p');
var newA=document.createElement('A');
newP.innerHTML='测试p标签';
newP.style.color='red';
newP.className='bg';
newA.innerText='测试a标签';
/*将p标签插入到body容器末尾*/
document.body.appendChild(newP);
document.body.insertBefore(newA,box);
/*将创建的克隆A标签放到body的末尾*/
var cloneA=newA.cloneNode();
var cloneA=newA.cloneNode(true);//深度克隆，内容也克隆
document.body.appendChild(cloneA);
/*删除标签*/
//document.body.removeChild(newP);
//document.body.removeChild(box);
box.myindex=10;
console.log(box.myindex);
console.log(box['myindex']);