console.log("Profile Page JS Loaded");

let user = document.getElementById('userName');
const link = window.location.href;
let url = new URL(link);
const searchParams = new URLSearchParams(url.search);
var keyValue = {};
searchParams.forEach(function(value,key){
    keyValue[key] = value;
});

let requestResponse = fetch(url,[searchParams]);

let userName = searchParams.get("user");
let email = searchParams.get("email");

function loadSession(){
    let userData = JSON.parse(sessionStorage.getItem('userData')) || {};
    let name = document.getElementById('name');
    let dob = document.getElementById('dob');
    let loc = document.getElementById('location');
    let role = document.getElementById('role');
    let about = document.getElementById('about');
    let contact = document.getElementById('contact');
    let email = document.getElementById('email');
    console.log("UserData : ");
    console.log(userData);

    name.value = userData.user==undefined ? "" : userData.user;
    dob.value = userData.dob==undefined ? "" : userData.dob;
    loc.value = userData.location==undefined ? "" : userData.location;
    role.value = userData.role==undefined ? "" : userData.role;
    about.value = userData.about==undefined ? "" : userData.about;
    contact.value = userData.contact==undefined ? "" : userData.contact;
    email.value = userData.email==undefined ? "" : userData.email;
}
function updateData(){
    let name = document.getElementById('name');
    let dob = document.getElementById('dob');
    let loc = document.getElementById('location');
    let role = document.getElementById('role');
    let about = document.getElementById('about');
    let contact = document.getElementById('contact');
    
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    userData.user = name.value;
    userData.dob = dob.value;
    userData.location = loc.value;
    userData.role = role.value;
    userData.about = about.value;
    userData.contact = contact.value;

    sessionStorage.setItem('userData',JSON.stringify(userData));
    loadSession();
}
function initialize(){
    let userData = JSON.parse(sessionStorage.getItem('userData')) || {};
    userData.user = keyValue.user;
    userData.contact = keyValue.contact;
    userData.email = keyValue.email;

    sessionStorage.setItem('userData',JSON.stringify(userData));
    loadSession();
}
initialize();
const edit = document.getElementById('edit');
const update = document.getElementById('update');
let input = document.querySelectorAll('input');
let textArea = document.querySelectorAll('textarea');

function toggleInputs(){
    const data = JSON.parse(sessionStorage.getItem('userData'));
    input.forEach((item)=>{
        if(item.value!=data.email){
            item.classList.toggle('active');
        }
    });
    textArea.forEach((item)=>{
        item.classList.toggle('active');
    });
}

edit.addEventListener('click',()=>{
    update.classList.toggle('active');
    edit.classList.toggle('active');
    toggleInputs();
});
update.addEventListener('click',()=>{
    update.classList.toggle('active');
    edit.classList.toggle('active');
    updateData();
    toggleInputs();
});
