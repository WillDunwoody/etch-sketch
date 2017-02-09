$(document).ready(function(){
  createPad(45);
});


function = createPad(x){
  for (var rows = 0; rows < x; rows++){
    for (var cols = 0; cols < x; cols++){
      $('#container').append('<div class = "grid"></div>');
    };
  };
  $('.grid').width(600/x);
  $('.grid').height(600/x);
};

function = clearPad (){
  $('.grid').remove();
};
