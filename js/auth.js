
function login(){
    let username = $("#input-login-username").val();
    let password = $("#input-login-password").val();
    if (username == "") {
        loginMessage.error("用户名不能为空")
        return
    }
    if (password == ""){
        loginMessage.error("密码不能为空")
        return
    }
    model_login(username, password, login_success, login_fail)
}

function login_fail(msg) {
    loginMessage.error(msg)
}

function login_success(token, username) {
    mainMessage.info("登录成功")
    set_login_status(true)
    close_login_modal()
}
function logout(){
    model_logout()
    set_login_status(false)
}

function register() {
    let username = $("#input-register-username").val()
    let password = $("#input-register-password").val()
    if (username == "") {
        loginMessage.error("用户名不能为空")
        return
    }
    if (password == ""){
        loginMessage.error("密码不能为空")
        return
    }
    model_register(username, password, register_success, register_fail)
}

function register_success() {
    close_register_modal()
    mainMessage.info("注册成功！")
}

function register_fail(msg) {
    registerMessage.error(msg)
}
