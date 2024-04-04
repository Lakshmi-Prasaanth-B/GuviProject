console.log("Register Page JS Loaded");

$(()=>{
    $('#addUser').click(function(ev){
        ev.preventDefault();
        let form = $('#register-form');
        console.log(form);
        let data = form.serialize();
        console.log(data);

        $.ajax({
            type: "POST",
            url: 'php/register.php',
            data: data,
            success:function(response,status,error){
                alert("Form Submitted Successfully");
                let JSONdata = JSON.stringify(response);
                console.log(JSONdata);
                console.log("Response : "+response);

                var responseData = JSON.parse(JSONdata);
                if(responseData.status === 'success'){
                    alert("User Added Successfully");
                    console.log(responseData.user);
                    alert(responseData.message)
                    window.location.replace("index.html");
                }
                else if(response.status === 'error'){
                    alert(responseData.message);
                }
            },
            error:function(response,status,error){
                console.log("Response : "+response);
                console.log("Status : "+status);
                console.log("Error : "+error);
                alert("There is an Error");
            }
        });
    });
});
