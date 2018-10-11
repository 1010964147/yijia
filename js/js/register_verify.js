var nameReg = /^\w{5,10}$/;
var passReg = /^\w{6,12}$/;
var phoneReg = /^1[35789]{1}\d{9}$/;

$("#username").change(function () {
    var uName = $("#username").val();
    if (nameReg.test(uName)){
        $(".verify_txt").css({
            "display": "none"
        })
    }else {
        $(".verify_txt").css({
            "display": "block"
        })
        $(".login_on").css({"disabled":"disabled"});
    }
});
$("#password").change(function () {
    var pass = $("#password").val();
    if (passReg.test(pass)){
        $(".verify_pass").css({
            "display": "none"
        })
    }else {
        $(".verify_pass").css({
            "display": "block"
        })
        $(".login_on").attr('disabled',true);
    }
});
$("#phone").change(function () {
    var pho = $("#phone").val();
    if (phoneReg.test(pho)){
        $(".verify_phone").css({
            "display": "none"
        })
    }else {
        $(".verify_phone").css({
            "display": "block"
        })
        $(".login_on").attr('disabled',true);
    }
});


