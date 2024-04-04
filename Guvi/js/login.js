console.log("JS Loaded");

$(()=>{
  $("#submit").click(function(ev){
    ev.preventDefault();
    let form = $("#login-form");
    console.log(form);
    let data = form.serialize();
    console.log(data);

    $.ajax({
      type: "POST",
      url: 'php/connect.php',
      data: data,
      success:function(response,status,error){
        let JSONdata = JSON.stringify(response);
        console.log(JSONdata);
        console.log("Response : "+response);
        
        var responseData = JSON.parse(JSONdata);
        if(responseData.status === 'success'){
          $("#msg").text(responseData.name);
          alert("Form Submitted Successfully");
          $("#status").text(responseData.status);
          $("#error").text(responseData.error);
          sessionStorage.setItem('user',responseData);
          console.log("Session Storage Success");
          alert(responseData.message);
          window.location.replace("profile.html?user="+responseData.user+"&email="+responseData.email+"&contact="+responseData.contact);
        }
        else if(responseData.status === 'error'){
          alert(responseData.message);
        }
      },
      error:function(response,status,error){
        console.log("Response : "+response);
        console.log("Status : "+status);
        console.log("Error : "+error);
      }
    });

  });
});
