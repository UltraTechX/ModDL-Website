$(document).ready(function(){
  if (!!$.cookie('authcheck')) {
    // have cookie
    var username = $.cookie('authcheck');
    $.post('https://opifexdev.net/php/authCheck.php',
       { authkey: username },
       function(data){
            //per the comment below,
            //assuming data will simply
            //be the username
            var aconfirm = data.authConfirm; // John
            var usrid = data.userID;
            if(aconfirm == true){
              window.location.replace("https://opifexdev.net/user/profile/");
            }else{
              $(document.getElementById("accInfoBox")).append($("<a href='https://opifexdev.net/user/signin/' class='btn btn-outline-secondary' role='button' aria-pressed='false'>Sign In</a>"));
              $(document.getElementById("accRegisterBox")).append($("<a href='https://opifexdev.net/user/register/' class='btn btn-outline-secondary' role='button' aria-pressed='false'>Register</a>"));
            }
       });
  }else{
    $(document.getElementById("accInfoBox")).append($("<a href='https://opifexdev.net/user/signin/' class='btn btn-outline-secondary' role='button' aria-pressed='false'>Sign In</a>"));
    $(document.getElementById("accRegisterBox")).append($("<a href='https://opifexdev.net/user/register/' class='btn btn-outline-secondary' role='button' aria-pressed='false'>Register</a>"));
  }
});

var b1 = document.getElementById("button_register");

$('#registerForm').submit(function(){
    $.ajax({
      url: $('#registerForm').attr('action'),
      type: 'POST',
      data : $('#registerForm').serialize(),
      success: function(response){
        console.log('return code '+response);
      }
    });
    return false;
});
