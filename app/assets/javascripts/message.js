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

                      <p><%=message.content></p>
                      <% end %>
                    </div>
                    <div class = "lower-message__image">

                      <img src = ${message.image} >
                    </div>
                  </div>
                </div>`
    return html
  }
  $('#new_message').on('submit', function(e){ //idが優先される
    e.preventDefault();
    console.log(this)
    var formData = new FormData(this);
   var url = $(this).attr('action');
    $.ajax({
      url: url,
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
