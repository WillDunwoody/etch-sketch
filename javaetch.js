

function createPad(x){
  for (var rows = 0; rows < x; rows++){
    for (var cols = 0; cols < x; cols++){
      $('#container').append('<div class = "grid"></div>');
      $('.grid').height(600/x);
      $('.grid').width(600/x);
      $('.grid').css('float', 'left');
    };
  };
};

function clearPad (){
  $('.grid').remove();
};

function sketch(){
  $('.grid').mouseenter(function(){
    $(this).css('background-color', '#000')
  });
};

function userChoice(){
  var y = prompt ("How big would you like your grid to be?");
  clearPad();
  createPad(y);
};

$(document).ready(function(){
  x = 16;
  createPad(x);
  sketch();
  $('input').click(function(){
    userChoice();
    sketch();
  });
});
