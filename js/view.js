class Message{
    constructor(id) {
        this.id = '#' + id
    }
    show(type, msg) {
        $(this.id).html('<div class="alert ' +
            type + '" role="alert">' + msg +
            '<button type="button" class="close" data-dismiss="alert" aria-label="close">'+
            '<span aria-hidden="true">&times;</span></button>' + '</div>')
    }
    clear(){
        $(this.id).html('')
    }
    error(msg) {
        this.show('alert-danger', msg)
    }
    warning(msg) {
        this.show('alert-warning', msg)
    }
    info(msg) {
        this.show('alert-info', msg)
    }
}
let loginMessage = new Message("login-alert")
let registerMessage = new Message("register-alert")
let mainMessage = new Message("alert-container")
let commentMessage = new Message("comment-alert")
function set_login_status(status){
    if (status) {
        $("#nav-login").hide()
        $("#nav-register").hide()
        $("#nav-logout").show()
        $("#submit-post-btn").removeAttr("disabled")
        $("#submit-post-btn").text("提交")
    } else {
        $("#nav-login").show()
        $("#nav-register").show()
        $("#nav-logout").hide()
        $("#submit-post-btn").attr("disabled", "1")
        $("#submit-post-btn").text("请登录")
    }
}

function close_login_modal() {
    $("#login-modal").modal('hide')
}
function close_register_modal() {
    $("#register-modal").modal('hide')

}

