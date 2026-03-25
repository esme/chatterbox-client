var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    // Mock data
    successCB({ results: [
      { username: 'alice',     roomname: 'lobby',   text: 'Hey everyone!' },
      { username: 'bob',       roomname: 'lobby',   text: 'What\'s up?' },
      { username: 'alice',     roomname: 'lobby',   text: 'Not much, just chilling.' },
      { username: 'charlie',   roomname: 'sports',  text: 'Did you catch the game last night?' },
      { username: 'bob',       roomname: 'sports',  text: 'Yeah! That last-second goal was insane.' },
      { username: 'diana',     roomname: 'tech',    text: 'Anyone tried the new JS framework?' },
      { username: 'charlie',   roomname: 'tech',    text: 'Which one? There are 50 new ones this week.' },
      { username: 'diana',     roomname: 'tech',    text: 'Lol fair point.' },
      { username: 'anonymous', roomname: 'lobby',   text: 'Hello, world!' },
      { username: 'eve',       roomname: 'general', text: 'Good morning!' },
    ] });
    return;

    // AJAX request
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },
};
