$(function(){
  function buildHTML(message){
    var image = (message.image)? `<img src = ${message.image}>`: ""
  var html = `<div class = "message" >
                <div class = "upper-message">
                  <div class = "upper-message__user-name">
                  ${message.user_name}
                  </div>
                  <div class = "upper-message__date">
                  ${message.created_at}
                  </div>
                </div>
                <div class = "lower-meesage">
                  <div class = "lower-message__content">
                    ${message.content}
                    ${image}
                  </div>
                </div>
              </div>`
    return html;
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault()
    var formData = new FormData($(this).get(0))
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data)
      $('.messages').append(html)
      $('.messages').animate({
      scrollTop: $('.messages')[0].scrollHeight}, 'fast')
      $("#new_message")[0].reset()
    })
    .fail(function(){
      alert('入力してください')
    })
    .always(function(){
      $(".form__submit").attr('disabled', false)
    })
  })
})
