

var MessagesView = {

  $chats: $('#chats'),

  click: function() {
    // $('.username').on('click', MessagesView.doStuff);
    $('.username').click(function() {
      Friends[$(this).text().slice(1)] = true;
      // Friends.toggleStatus();
      // var class = $(this).attr('class');
      // $(this).css('background-color', 'red');
    });
  },

  initialize: function() {
    Parse.readAll(obj => {
      var compileMessage = _.template("<%= value %>"); //onclick="${MessagesView.click}"
      for (let el of obj.results) {
        let tweet = `
        <div class='tweet' id='${el.objectId}'>
          <p class="username">@${el.username}</p>
          <p>Roomname: ${el.roomname}</p>
          <p>Message: ${compileMessage({value: el.text})}</p>
          <p>Timestamp: ${moment(el.createdAt).fromNow()}</p>
        </div>`;
        MessagesView.renderMessage(tweet);
      }
      MessagesView.click();
    });
  },

  // render: function() {
  // },

  renderMessage: function(message) {
    MessagesView.$chats.append(`<p>${message}</p>`)
  }

};