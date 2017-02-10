//This is the function for creating a new sketchpad.
function createPad(x){
  for (var rows = 0; rows < x; rows++){
    for (var cols = 0; cols < x; cols++){
      $('#container').append('<div class = "grid"></div>');
    };
  };
  $('.grid').height(600/x);
  $('.grid').width(600/x);
  $('.grid').css('float', 'left');
};

//This is the function for clearing the pad.
function clearPad (){
  $('.grid').remove();
};

//This is the function sketching the lines.
function sketch(){
  $('.grid').mouseenter(function(){
    $(this).css('background-color', '#C3D6EA')
  });
};

//This is the function for the user to choose how big they want their pad to be.
function userChoice(){
  while (true){
  var y = prompt ("How many pixels would you like in your new Etch-A-Sketchpad?");
  if (y <= 64) {
      clearPad();
      createPad(y);
      break;
    } else {
      confirm ("Ooooh no, i'm sorry, 64 pixels is the highest we can go. Have another go.")
    };
  };
};

//This is the running order of functions.
$(document).ready(function(){
  x = 16;
  createPad(x);
  sketch();
  $('#newgrid').click(function(){
    userChoice();
    sketch();
  });
});
