function ln2html(s) {
    s = s.replace("/\r\n/g", "<br>")
    s = s.replace("/\n/g", "<br>")
    return s
}

function get_postcard(title, content, author, created_time) {
    let time = new Date(created_time*1000)
    content = ln2html(content)
    let html = ' <div class="col-12">' +
        '<div class="card comment-card">' +
        '<div class="card-body">' +
        '<div class="card-title"><strong>' +
        title +
        '</strong></div>' +
        '<div class="card-text"> '+
        content +
        '</div> </div>' +
        '<div class="card-footer text-right"><strong>' +
        author + "</strong>    " + time.toLocaleString() +
        '</div> </div>'
    return html
}
