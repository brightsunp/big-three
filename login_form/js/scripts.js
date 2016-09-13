jQuery(document).ready(function() {	
    /*
        Fullscreen background
    */
    $.backstretch("login_form/img/backgrounds/1.jpg");

    /*
        Users datalist
    */
    function User(usr, pwd) {
        this.username = usr;
        this.password = pwd;
    }

    var users = new Array();
    users[0] = new User('admin1', '123456');
    users[1] = new User('admin2', '654321');

    /*
        Form validation
    */
    $('.login-form').find('#form-username, #form-password').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {   	
    	$(this).find('#form-username, #form-password').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

        var userInput = $(this).find('#form-username').val();
        var pwdInput = $(this).find('#form-password').val();
        if (userInput && pwdInput) {
            var flag = 0;
            for (i=0; i<users.length; i++) {
                if (userInput == users[i].username && pwdInput == users[i].password) {             
                    flag = 1;
                }
            }
            if (flag == 0) {
                //alert("Login Failed:\n\nUsername or Password is WRONG.");
                $("#login-error").modal();
            } else {
                window.open("test_task/test_task.html", "_self");
            }
            e.preventDefault();  
        }          	
    }); 
    
});


