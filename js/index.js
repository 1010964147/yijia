var index_js = (function(){
    var $ul = $('.subject-top');
    // 获取已添加的商品列表，没有商品的时候，获取的是undifinde，默认给一个空数组
    var shopList = localStorage.shopList || '[]';
    shopList = JSON.parse(shopList);
    return {
        init() {
            this.events();
            // 第一步获取商品内容
            this.getData()
        },
        //获取商品内容
        getData() {
            $.get('json/category.json',this.insertData , "json")
        },
        //商品添加到dom中
        insertData(data) {
            // 这里使用数组，优化性能，字符串拼接效率低
            var str = []
            for(var i = 0; i < data.length; i++) {
                var li = `<div class="main" id="${data[i].id}">
                            <div class="left">
                                <div class="small">
                                    <a href="#" class="a1">
                                        ${data[i].img}
                                    </a>
                                </div>
                                <div class="big">
                                    <ul>
                                        <li>
                                            ${data[i].img}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           <div class="right">
                            <h1 class="title">${data[i].name}</h1>
                            <div class="price">
                                <span class="price1">${data[i].price}</span>
                            </div>
                            <div class="option">
                                <dl>
                                    <dt>颜色 - 黑色</dt>
                                    <dd>
                                        <a href="#">
                                            <img src="img/ff3abcda00fca67198a070b60a0bf444.jpg">
                                        </a>
                                    </dd>
                                </dl>
                            </div>
                            <div class="add">
                                <div class="btn">
                                    <a href="shopping-cart.html" class="btn1">加入购物车</a>
                                </div>
                            </div>
                           </div>
                        </div>`
                str.push(li);
            }
            $ul.html(str.join(''));
        },
        addShop(obj) {
            
            // 从本地数据库获取数据， 查看商品是否已拥有。
            // -> 拥有 在原来的基础上累加数量
            // -> 未拥有 新增一条新的数据
            // 假设把商品存到了shopList属性里

            // 在没有添加数据时，字段值为undefined，给一个默认数组
            // var shopList = localStorage.shopList || '[]'
            // shopList = JSON.parse(shopList);
            // 添加一个锁
            var add = true;
            for(var i= 0; i<shopList.length; i++) {
                // 判断已添加商品列表中是否含有现添加的商品
                if(obj.id == shopList[i].id) {
                    // 如果函数能进来的话，证明现添加的商品，已经存在购物车内，不需要添加新的数据
                    add = false
                    //商品数量进行累加
                    shopList[i].count += obj.count;
                    // 找到商品以后，终止循环
                    break;
                } 
            }
            if(add) {
                // 如果没找到， 把当前商品数据添加到本地数据库
                shopList.push(obj);
            }
            // 真正意义把数据存储到本地数据库
            localStorage.shopList= JSON.stringify(shopList);
            console.log(localStorage.shopList)
        },
        events() {
            var _this = this;
            $ul.on('click', '.btn1', function() {
                // 目的： 获取商品信息，存到本地数据库
                var tr = $(this).closest('.main');
                // 先找到tr，通过tr获取下面的td
                var img1 = tr.children('.left').children('.small').children('.a1');
                console.log(img1);
                var tdAll = tr.children('.right').children('.title');
                var price1 = tr.children('.right').children('.price').children('.price1');
                var obj = {
                    // 再次添加商品时，通过id判断是否已拥有
                    id: tr.attr('id'),
                    // 获取购买数量
                    count: Number(1),
                    // 获取商品名称
                    name: tdAll.eq(0).html(),
                    // 获取商品价格
                    price: price1.eq(0).html(),
                    img: img1.eq(0).html()
                }
                _this.addShop(obj);
            })
        }
    }
})()
index_js.init()