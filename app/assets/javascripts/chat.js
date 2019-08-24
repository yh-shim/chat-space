$(function() {
  function buildHTML(chat) {
    var imageIf = (chat.image.url == null) ? "" : `<img src="${chat.image.url}" class="chat__text__image">`;

    var html = `<div class="chat">
                  <div class="chat__info">
                    <p class="chat__info__user-name">
                      ${chat.name}
                    </p>
                    <p class="chat__info__date">
                      ${chat.created_at}
                    </p>
                  </div>
                  <div class="chat__text">
                      <p class="chat__text__in">
                        ${chat.text}
                      </p>
                      ${imageIf}
                  </div>
                </div>`
    return html;
  }

  $('form').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data);
      var html = buildHTML(data);
      $('.chats').append(html);
      $('.form__box__chat').val(' ');
      $('.form__submit').removeAttr('disabled');
      $('.chats').animate( {scrollTop: $('.chats')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
  });

});
