var rooms = {};
var lastObjectId;

$(document).ready(function() {

});

var updateFeed = function() {
  Parse.readAll(function(data) {
    var str = '';
    var compileMessage = _.template("<%- value %>");
    for (let el of data.results) {
      if (el.objectId !== lastObjectId) {
        str += `
        <div class='tweet newTweet'>
          <p class='username'>@${el.username}</p>
          <p>Roomname: ${el.roomname}</p>
          <p>Message: ${compileMessage({value: el.text})}</p>
          <p>Timestamp: ${moment(el.createdAt).fromNow()}</p>
        </div>`;
      } else {
        break;
      }
    }
    
    if (str.length > 0) { 
      $('#chats').prepend(str); 
      lastObjectId = data.results[0].objectId;
    }
  });
  MessagesView.click();
}