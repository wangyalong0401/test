let productRender = (function () {
    let productData = null;
    let ulbox = document.querySelector('.list');
    let headerList = document.querySelector('.headerBox');
    let headerClick = headerList.querySelectorAll('a');
    //let productList = ulbox.querySelectorAll('li');
    let productList=null;


    //基于ajax从服务器获取数据
    let getData = function () {
        let xhr;
        xhr = new XMLHttpRequest;
        xhr.open('GET', 'json/product.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                productData = JSON.parse(xhr.responseText);
            }
        };
        xhr.send(null);
    };
    //数据绑定
    let bindHtml = function () {
        let str = ``;
            productData.forEach(function (item,index) {
                // let {
                //     title,
                //     price,
                //     time,
                //     hot,
                //     img
                // } = item;
                console.log(item);
                //ES6中出现的${}存放的是js代码，需要动态绑定的js的变量值
                str+=`<li data-price="${item.price}" data-time="${item.time}" data-hot="${item.hot}"><a href="#">
                <img src="${item.img}" alt="">
                <p>${item.title}</p>
                <span>¥${item.price}</span>
                <span>时间：${item.time}</span>
                <span>热度：${item.hot}</span>
            </a></li>`;
            });
        ulbox.innerHTML = str;
        productList=ulbox.querySelectorAll('li');
    };

    //
    return {
        init: function () {
            getData();
            bindHtml();
        }
    }
})();
productRender.init();