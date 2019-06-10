var rooms = {};
var lastObjectId;

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    const compileRoom = _.template("<%- room %>");
    Parse.readAll(obj => {
        lastObjectId = obj.results[0].objectId;
        console.log(lastObjectId);
        obj.results.forEach(rm => { 
            let thisRoom = compileRoom({room: rm.roomname});
            if (rm.roomname !== undefined || rm.roomname !== '') {
                rooms[thisRoom] = true; 
            }
        });
    });

    setTimeout(function() { 
        _.each(rooms, function(bool, room) {
            RoomsView.renderRoom(room);
        });
     }, 1000);

     setInterval(updateFeed, 1500);
  },

  render: function() {
  },

  renderRoom: function(room) {
    $('#rooms select').append(
      $('<option></option>').val(room).html(room)
    );
  }

};
