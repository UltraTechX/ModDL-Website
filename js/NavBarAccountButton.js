$(document).ready(function(){
  if (!!$.cookie('authcheck')) {
    // have cookie
    var username = $.cookie('authcheck');
    $.post('php/authCheck.php',
       { authkey: username },
       function(data){
            //per the comment below,
            //assuming data will simply
            //be the username
            var aconfirm = data.authConfirm; // John
            var usrid = data.userID;
            if(aconfirm == true){
              document.getElementById("accInfoBox").replaceWith('<a href="" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">"+usrid+"</a>');
            }else{
              document.getElementById("accInfoBox").replaceWith('<a href="" class="btn btn-outline-secondary" role="button" aria-pressed="false">Sign In</a>');
            }
       });
  }else{
    document.getElementById("accInfoBox").replaceWith('<a href="" class="btn btn-outline-secondary" role="button" aria-pressed="false">Sign In</a>');
  }
});
