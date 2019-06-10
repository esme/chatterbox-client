var FormView = {

  $form: $('#send'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {

    var $message = $('#message').val()
    var username = window.location.href.match(/(?<=username=).*$/g);
    if(username !== undefined) { username = username[0]; }
    var roomname = $( "select option:selected" )[0].value;
    var messageObj = new Messages(username, $message, roomname); 
    console.log(messageObj);
    Parse.create(messageObj);
    $('#message').val('');
    event.preventDefault();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};