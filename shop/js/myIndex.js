let ulbox = document.getElementById('list');
let headerList = document.getElementById('headerBox');
let headerClick = headerList.getElementsByTagName('a');
let productList = ulbox.getElementsByTagName('li');
console.log(productList);
console.log(headerClick);
//绑定数据
~function () {
    let xhr;
    xhr = new XMLHttpRequest;
    let productData = null;
    xhr.open('GET', 'json/product.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            productData = JSON.parse(xhr.responseText);
        }
    };
    xhr.send(null);
    let str = ``;
    for (let i = 0; i < productData.length; i++) {
        let {
            title,
            price,
            time,
            hot,
            img
        } = productData[i];
        str += `<li data-price="${price}" data-time="${time}" data-hot="${hot}"><a href="#">
                <img src="${img}" alt="">
                <p>${title}</p>
                <span>¥${price}</span>
                <span>时间：${time}</span>
                <span>热度：${hot}</span>
            </a></li>`
    }
    ulbox.innerHTML = str;
}();
//点击排序事件处理
~function () {
    for (let i = 0; i < headerClick.length; i++) {
        headerClick[i].myindex = i;//存储自定义属性，作为按钮索引
        headerClick[i].flag = -1;
        headerClick[i].onclick = function () {
            for (let j = 0; j < headerClick.length; j++) {
               let item=headerClick[j];
               if(item!==this){
                   item.flag=-1;
               }
            }
            this.flag *= -1;
            productSort.call(this);
        }
    }

    function productSort() {
        // productAry = [].slice.call(productList); //也可以用这个方法
        productAry = [...productList];
        let _this = this;
        productAry.sort(function (a, b) {
            let clickType = ['data-time', 'data-price', 'data-hot'];
            let a1 = a.getAttribute(clickType[_this.myindex]);
            let b1 = b.getAttribute(clickType[_this.myindex]);
            if (_this.myindex === 0) {
                a1 = a.getAttribute(clickType[_this.myindex]).replace(/-/g, '');
                b1 = b.getAttribute(clickType[_this.myindex]).replace(/-/g, '');
            }
            return (a1 - b1) * _this.flag;
        });
        for (let i = 0; i < productAry.length; i++) {
            let curLi = productAry[i];
            ulbox.appendChild(curLi);//在追加元素时，如果元素在这个容器中已经存在，次时不是克隆一份新的追加到末尾，而是把原来元素移动到末尾
        }
    }

}();