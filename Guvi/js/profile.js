const edit = document.getElementById('edit');
const update = document.getElementById('update');
const input = document.querySelectorAll('input');
const textbox = document.querySelectorAll('textbox');
const data = document.querySelectorAll('.data');

edit.addEventListener('click',()=>{
    update.classList.toggle('active');
    edit.classList.toggle('active');
    input.forEach((item)=>{
        item.classList.toggle('active');
    })
    textbox.forEach((item)=>{
        item.classList.toggle('active');
    })
    data.forEach((item)=>{
        item.classList.toggle('active');
    })
    console.log("Edit Clicked");
});
update.addEventListener('click',()=>{
    edit.classList.toggle('active');
    update.classList.toggle('active');
    input.forEach((item)=>{
        item.classList.toggle('active');
    })
    textbox.forEach((item)=>{
        item.classList.toggle('active');
    })
    data.forEach((item)=>{
        item.classList.toggle('active');
    })
    console.log("Update Clicked");
});

const datas = require('login.js')
let name = document.getElementById('dname');
let dob = document.getElementById('ddob');
let location = document.getElementById('dlocation');
let role = document.getElementById('drole');
let about = document.getElementById('dabout');
let contact = document.getElementById('dcontact');
let email = document.getElementById('demail');

function Pro(){
    name.innerHTML="Lakshmi Prasaanth B";
    dob.innerHTML="13-01-2004";
    location.innerHTML="Tiruppur";
    role.innerHTML="Developer";
    about.innerHTML="Engineer";
    contact.innerHTML="8610041389";
    email.innerHTML="lakshmiprasaanth001@gmail.com";
}