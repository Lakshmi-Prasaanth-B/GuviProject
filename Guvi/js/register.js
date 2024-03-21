function sub(){
    e.preventDefault();
    console.log(s_name.value);
    console.log(s_email.value);
    console.log(s_mobile.value);
    console.log(s_password.value);
    console.log(s_check_password.value);
    
    flag = 0;
    dummyData.forEach((item)=>{
        if(item.email==s_email.value && flag==0){
            s_msg.innerHTML="Email already Exists";
            flag = 1;
            setTimeout(()=>{
                s_msg.innerHTML="";
            },5000);
        }
    })
    if(flag==0){
        console.log("Yet to Redirect");
        s_msg.innerHTML="User Added Successfully";
        console.log("Yet to Update");
        setTimeout(()=>{
            s_msg.innerHTML="";
            console.log("Location is going to be changed");
            s_form.submit();
        },7000);
        window.location.replace("login.html");
    }
}
