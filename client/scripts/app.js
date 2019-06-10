// $(() => App.initialize());

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    // debugger;
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    
    // MessagesView.render();
    // FriendsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    MessagesView.click();
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      // return 5;
      callback(data);
    });
  },

  getMessagesArr: function() {
    setTimeout(function() {
      return Parse.readAll(function(data) {
        console.log(data.results);
        return 5;
      });
    }, 1000);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
