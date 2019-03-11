$(document).ready(function(){
  var b1 = document.getElementById("button_register");
});

$('#loginForm').submit(function(){
    $.ajax({
      url: $('#loginForm').attr('action'),
      type: 'POST',
      data : $('#loginForm').serialize(),
      success: function(response){
        console.log('return code '+response);
        var resp = parseInt(response, 10)

      }
    });
    return false;
});
