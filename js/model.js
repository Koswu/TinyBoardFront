const SERVER = "http://127.0.0.1:8080";

function model_is_login() {
    return sessionStorage.getItem("token") != null
}
function model_get_now_page() {
    let val = window.location.hash.substr(1);
    let num = parseInt(val);
    if (isNaN(num)) {
        return 1;
    }
    return num;
}

function model_login(username, password, successCall, failCall) {
    let url = SERVER + "/auth/login"
    $.ajax({
        url: url,
        type: "post",
        data: "username="+ encodeURIComponent(username) + "&password=" + encodeURIComponent(password),
        contentType: "application/x-www-form-urlencoded",
        success: function (data, status) {
            if (data["code"] == 200){
                sessionStorage.setItem("token", data["data"]["token"])
                sessionStorage.setItem("username", data["data"]["username"])
                successCall()
                return
            }
            failCall(data["msg"])
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            failCall("登录请求失败")
        }
    })
}

function model_logout(){
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
}


function model_register(username, password, successCall, failCall) {
    console.log(username, password)
    let url = SERVER + "/auth/register"
    $.ajax({
            url: url,
            type: "post",
        data: "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password),
        contentType: "application/x-www-form-urlencoded",
        success: function (data, status) {
                if (data["code"] == 200){
                    successCall()
                    return
                }
                failCall(data["msg"])
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            failCall("注册请求失败")
        }
        })
}


function model_submit_post(title, content, successCall, failCall) {
    let url = SERVER + "/api/v1/write/comment"
    let token = sessionStorage.getItem("token")
    if (token == null) {
        return true
    }
    $.ajax({
        url: url,
        type: "post",
        data: "title=" + encodeURIComponent(title) + "&content=" + encodeURIComponent(content) +
        "&token=" + token,
        contentType: "application/x-www-form-urlencoded",
        success: function (data, status) {
            if (data["code"] == 200){
                successCall()
                return
            }
            failCall(data["msg"])
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            failCall("提交请求失败")
        }
    })
}