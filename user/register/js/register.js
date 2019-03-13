$(document).ready(function(){
  var b1 = document.getElementById("button_register");
});

$('#registerForm').submit(function(){
    $.ajax({
      url: $('#registerForm').attr('action'),
      type: 'POST',
      data : $('#registerForm').serialize(),
      success: function(response){
        console.log('return code '+response);
        var resp = parseInt(response, 10)
        if(resp==24){
          window.location.replace("https://opifexdev.net");
        }
      }
    });
    return false;
});
