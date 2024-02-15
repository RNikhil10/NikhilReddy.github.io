/* Website script commands */ 



var tablinks=document.getElementsByClassName("tablink");
var tabcontent=document.getElementsByClassName("tabcontents");
function opentab(nametab){
    for(tablink of tablinks){
        tablink.classList.remove("activelink");
    }
    for(tabcontents of tabcontent){
        tabcontents.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(nametab).classList.add("activetab")
}


var menuside1=document.getElementById("menuside");

function openmenu(){
    menuside1.style.right="0";
}
function closemenu(){
    menuside1.style.right="-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbzq0lnTm4a75JI21gHnW0R3UhtIUT0QBJoMKehHObpZtCgA4hgKYt8hJRP7d7dLX422/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML="Message Sent Successfully!"
    setTimeout(function(){
        msg.innerHTML=""
    },5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})
