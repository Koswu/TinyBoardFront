function get_content(){
    $.ajax({
        url:SERVER + '/api/v1/read/comment?page=' + model_get_now_page(),
        type:"get",
        dataType:"json",
        success: update_content,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log(errorThrown);
            mainMessage.error("获取信息失败");
        },
    })
}
function update_content(data){
    console.log(data)
    $("#comment-deck").html('')
    for (let post of data["data"]["lists"]){
        $("#comment-deck").append(
            get_postcard(post["title"], post["content"], post["posted_by"], post["created_on"]))
    }
    if (model_get_now_page() < data["data"]["page_count"]){
        $("#next-button").show()
    } else {
        $("#next-button").hide()
    }
    if (model_get_now_page() > 1){
        $("#prev-button").show()
    } else {
        $("#prev-button").hide()
    }
    $("#prev-button").attr('href', '#'+(model_get_now_page()-1))
    $("#next-button").attr('href', '#'+(model_get_now_page()+1))
}

function post_content() {
    let title = $("#edit-commit-title").val()
    let content = $("#edit-commit-content").val()
    if (title == ""){
        commentMessage.error("标题不能为空")
        return
    }
    if (content == ""){
        commentMessage.error("内容不能为空")
        return
    }
    model_submit_post(title, content, post_success, post_failed)
}

function post_success() {
    commentMessage.info("发送成功")
    get_content()
}

function post_failed(msg) {
    commentMessage.error(msg)
}