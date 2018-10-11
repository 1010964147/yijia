var verify = document.getElementsByClassName("verify")[0];
var verify_box = document.getElementsByClassName("verify_box")[0];
var verify_p = document.getElementsByClassName("verify_p")[0];
verify_box.onmousedown = function(e){
    e = e || event;
    var x = e.offsetX;
    document.onmousemove = function(e){
        e = e || event;
        var _x = e.pageX - verify.offsetLeft - x;
        maxLeft = verify.offsetWidth - verify_box.offsetWidth;
        if(_x < 0){
            _x = 0;
        }else if(_x > maxLeft){
            _x = maxLeft
            verify_p.innerHTML = "验证通过"
            verify.style.background = "#3ac723"
        }
        verify_box.style.left = _x + "px"
        document.onmouseup = function(e){
            e = e || event;
            document.onmousemove = null;
            if(_x < maxLeft){
                function fn(_x){
                    verify_box.style.left = _x + "px"
                }
                timer = setInterval(function(){
                    if(_x > 0){
                        fn(--_x)
                    }
                },10)
            }
        }
    }
}

