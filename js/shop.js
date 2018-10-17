var index_js = (function(){
    // 展示数据的盒子
    var $ul = $('.main-goods');

    var shopList = localStorage.shopList || '[]';
    shopList = JSON.parse(shopList);

    return {
        // 初始化函数
        init() {
            this.events();
            this.insertData(shopList);
        },
        insertData(data) {
            var str = ''
            for(var i = 0; i < data.length; i++) {
                var li = `<ul class="cart-product" id="${data[i].id}">
                            <li>
                                <a href="show.html">
                                    ${data[i].img}
                                </a>
                                <span class="name-info">
                                    <span>
                                        <a href="show.html">${data[i].name}</a>
                                    </span>
                                </span>
                            </li>
                            <li class="price">
                                <div>
                                    <p>¥ ${data[i].price}</p>

                                </div>
                            </li>
                            <li class="goods-number">
                                <span class="goods-num">
                                    <span class="goods-minus disabled">
                                        <span></span>
                                    </span>
                                    <span class="span1">${data[i].count}</span>
                                    <span class="goods-plus ">
                                        <span></span>
                                        <span></span>
                                    </span>
                                </span>
                            </li>
                            <li class="total-price">¥ ${data[i].price*data[i].count}</li>
                            <li class="delete-goods">
                                <span class="delete-btn"></span>
                            </li>
                           </ul>`
                str += li;
            }
            $ul.html(str);
        },
        addShop(obj) {
            var add = true;
            // 没有商品的时候，获取的是undifinde
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            for(var i= 0; i<shopList.length; i++) {
                if(obj.id == shopList[i].id) {
                    add = false
                    shopList[i].count += obj.count;
                    break;
                }
            }
            if(add) {
                shopList.push(obj);
            }
            localStorage.shopList= JSON.stringify(shopList);
            console.log(localStorage.shopList)
        },
        //  事件函数
        events() {
            var _this = this;
            $ul.on('change', '.span1', function() {
                // 获取此tr
                var tr = $(this).closest('ul');
                // 获取文本值(商品更新后的数据)
                var val = $(this).val();
                // 修改对应数据
                shopList[tr.index()].count = val;
                // 存入本地数据库
                localStorage.shopList = JSON.stringify(shopList);
                
            })
            $ul.on('click', '.delete-btn', function() {
               var tr = $(this).closest('ul');
               // 删除数组中对应的数据
               shopList.splice(tr.index(), 1);
               // 存入到本地数据库
               localStorage.shopList = JSON.stringify(shopList);
               // 移出dom元素
               tr.remove()
            })
        }
    }
})()
index_js.init()