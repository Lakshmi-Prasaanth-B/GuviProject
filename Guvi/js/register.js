// Sign Up Elements
const s_form = document.querySelector("#s_form");
const s_name = document.querySelector("#name");
const s_email = document.querySelector("#s_email");
const s_mobile = document.querySelector("#s_mobile");
const s_password = document.querySelector("#s_password");
const s_check_password = document.querySelector("#s_check_password");
const s_msg = document.querySelector("#s_msg");
const submit = document.querySelector("#submit");



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
