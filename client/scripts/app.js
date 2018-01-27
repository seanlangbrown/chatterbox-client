// YOUR CODE HERE:
$(document).ready(function() {
//init?
  app.renderSubmissionForm();
  
});

var app = {
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',

  data: 'hello',

  init: function() {
    $('#main').find('.username').on('click', app.handleUsernameClick);
    return true;
  },
  send: function(message) {
    $.ajax({
      type: 'POST',
      url: app.server,
      data: message
    });
    return true;
  },

  fetch: function() {
    var posts = $.ajax({
      type: 'GET',
      url: app.server,
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: function() {
        console.log('hello');
        console.log(app.data);
        //data = JSON.parse(data);
        return app.data; 
      },
      dataType: 'text'
    });
    console.log(posts);
  },

  loadAllMessages: function() {
    //var messages = JSON.parse(fetch()).results;
    
  },

  clearMessages: function() {
    $('#chats').empty();
  },

  renderMessage: function(message) {
    var node = $(document.createElement('div'));
    node.addClass('post');
    node.data('roomname', message.roomname);
    
    var username = $(document.createElement('div'));
    username.addClass('username');
    username.text(message.username);
     
    var text = $(document.createElement('div'));
    text.addClass('text');
    text.text(message.text);
    
    node.append(text);
    node.append(username);

    $('#chats').prepend($(node));
  },

  renderRoom: function(room) {
    var node = document.createElement('div');
    node.innerHTML = room;
    $('#roomSelect').append($(node));
  },

  handleUsernameClick: function() {
    //does stuff to add friend
    return true;
  },

  handleSubmit: function(event) {
    //send message
    event.preventDefault(); 
    alert('sent');
    event.stopPropagation();
    //app.send($('#message').text);
    //rerender form?
    return;
  },

  renderSubmissionForm: function() {
    var form = document.createElement('form');
    form.innerHTML = '<input type="text"><input type="submit">';
    form.id = 'send';
    form.children[0].id = 'message';
    form.children[1].classList.add('submit');
    
    document.body.prepend(form);
    $('#send').on('submit', app.handleSubmit);
  } 
};


//app.handleSubmit();


