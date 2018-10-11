
$(".login_on").click(function () {
    login()
})
function login () {
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        url: 'http://www.daxunxun.com/users/login',
        type: 'post',
        data: {
            username: username,
            password: password
        },
        success: function (data) {
            console.log(data)
            if (data == 1) {
                localStorage.setItem('username', username)
                window.location.href = 'index.html'
            }else if(data == -1) {
                $(".verify_pass").css({
                    "display": "block"
                })
            }else if(data == 0) {
                $(".verify_txt").html("登陆失败")
            }else {
                $(".verify_txt").css({
                    "display": "block"
                })
            }
        }
    })
}
$("#username").on("blur",function () {
    $(".verify_txt").css({
        "display": "none"
    })
})
$("#password").on("blur",function () {
    $(".verify_pass").css({
        "display": "none"
    })
})
