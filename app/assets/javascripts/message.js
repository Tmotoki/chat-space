$(function(){
  function buildHTML(message){
    var html = `<div class = message >
                  <div class = "upper-message">
                    <div class = "upper-message__user-name">
                    ${message.name}
                    </div>
                    <div class = "upper-message__date">
                    ${message.created_at}
                    </div>
                </div>
                  <div class = "lower-meesage">
                    <div class = "lower-message__content">
                      ${if message.content.present?}
                      <p><%=message.content></p>
                      <% end %>
                    </div>
                    <div class = "lower-message__image">
                      ${if message.image.present?}
                      <img src = ${message.image} >
                    </div>
                  </div>
                </div>`
    return html
  }
  $('#new_message').on('submit', function(e){ //idが優先される
    e.preventDefault();
    var formData = new FormData(this);
     console.log(formData)
    var href = window.location.href;
    console.log(href)
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      console.log(message)
      var html = buildHTML(message);
      $('.messages').append(html)
      $('.textbox').val('')
    })
    .fail(function(){
      alert('error')
    })
  })
})
