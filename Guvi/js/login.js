
let email,password;
$(document).ready(function(){
    console.log("Document Ready");
    
    $('#login-form').submit(function(e){
        e.preventDefault();
        
        email = $("#email").val();
        password = $("#password").val();
        const formData = {
            'email': email,
            'password': password
        };
        
        const encodedData = $.param(formData);
        
        $.ajax({
            type: "POST",
            url: "php/login.php",
            data: encodedData,
            contentType: "application/x-www-form-urlencoded",
            success: function(response){

                console.log(response.trim());
                    if (response.trim() == "success"){
                        const ProData = JSON.parse(localStorage.getItem("profiles"));
                        let profiles = localStorage.getItem("profiles") !== null ? ProData : [];
                        const profile = formData;
                        profiles.push(profile);
                        
                        window.location.replace("profile.html");
                    }else{
                        alert("Invalid User, redirecting to Register")
                        window.location.replace("./register.html")
                    }
            },
            error: function(xhr, status, error){
                console.error("AJAX request failed:", status, error);
            }
        });
    });
});