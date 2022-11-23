const form = document.querySelector("form");
   const firstname = document.getElementById("first");
   const lastname = document.getElementById("last");
   const email = document.getElementById("email");
   const phone = document.getElementById("phone");
   const sex = document.getElementById("sex");
   const grp = document.getElementsByTagName("grp");
   const club = document.getElementById("club");
   const btn = document.querySelector(".sign");
   let arr=[];
   form.addEventListener('submit' , (e) =>{
    checkInputs();

    if(arr.length != 4) e.preventDefault();
   });
   function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if(firstnameValue === ''){
        setErrorFor(firstname, 'firstname cannot be blank');
    }else if((firstname.value.lenght <=3)|(firstname.value.lenght >30)){
        setErrorFor(firstname, "firstname is invalide");
    }else{
        setSuccessFor(firstname, "good");
        arr.push(true);
    }
    if(lastnameValue === ''){
        setErrorFor(lastname, 'lastname cannot be blank');
    }else if((lastname.value.lenght <=3)|(lastname.value.lenght >30)){
        setErrorFor(lastname, "firstname is invalide");
    }else{
        setSuccessFor(lastname, "good");
        arr.push(true);
    }
    if(emailValue === ''){
        setErrorFor(email, 'email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, "Not a valid email")
    }
    else{
        setSuccessFor(email, "good");
        arr.push(true);
    }
    if(phoneValue === ''){
        setErrorFor(phone, 'phone cannot be blank');
    }else if(!isPhone(phoneValue)){
        setErrorFor(phone, "Not a valid phone")
    }
    else{
        setSuccessFor(phone, "good");
        arr.push(true);
    }
    if(firstname.value.trim() === ''){
        setErrorFor(firstname, 'firstname cannot be blank');
        console.log("dkhel");
    }else if((firstname.value.lenght <=3)|(firstname.value.lenght >30)){
        setErrorFor(firstname, "firstname is invalide");
    }
    else{
        setSuccessFor(firstname, "good");
      
    }
}
    function validatelastname() {
        if(lastname.value.trim() === ''){
            setErrorFor(lastname, 'lastname cannot be blank');
        }else if((lastname.value.lenght <=3)|(lastname.value.lenght >30)){
            setErrorFor(lastname, "last is invalide");
        }else{
            setSuccessFor(lastname, "good");
            arr.push(true);

        }   
    }

   function validatefirstname() {
    if(firstname.value.trim() === ''){
        setErrorFor(firstname, 'firstname cannot be blank');
        console.log("dkhel");
    }else if((firstname.value.lenght <=3)|(firstname.value.lenght >30)){
        setErrorFor(firstname, "firstname is invalide");
    }
    else{
        setSuccessFor(firstname, "good");
    }
}
    function validatelastname() {
        if(lastname.value.trim() === ''){
            setErrorFor(lastname, 'lastname cannot be blank');
        }else if((lastname.value.lenght <=3)|(lastname.value.lenght >30)){
            setErrorFor(lastname, "last is invalide");
        }else{
            setSuccessFor(lastname, "good")
        }
    }
    function validateemail(){
    if(email.value.trim() === ''){
        setErrorFor(email, 'email cannot be blank');
    } else if (!isEmail(email.value.trim())){
        setErrorFor(email, "Not a valid email");
    }
    else{
        setSuccessFor(email, "good");
    }
}
    function validatephone (){
    if(phone.value.trim() === ''){
        setErrorFor(phone, 'phone cannot be blank');
    }else if(!isPhone(phone.value.trim())){
        setErrorFor(phone, "Not a valid phone");
    }
    else{
        setSuccessFor(phone, "good");
    }
}
firstname.addEventListener('keyup',function () {
    validatefirstname()
    
})
lastname.addEventListener('keyup',function () {
    validatelastname()
    
})
email.addEventListener('keyup',function () {
    validateemail()
    
})
phone.addEventListener('keyup',function () {
    validatephone()
    
})


function setErrorFor(theinput, message){
    theinput.closest(".form").querySelector('small').innerText = message ;
    console.log(theinput.closest(".form"));
    theinput.closest(".form").querySelector('small').style="visibility:visible";
    theinput.closest(".form").className="form error";
}
function setSuccessFor(theinput, message){
    theinput.closest(".form").querySelector('small').innerText = message ;
    theinput.closest(".form").querySelector('small').style="visibility:visible";
    theinput.closest(".form").className="form success";
}

function isEmail(email) {
    return /^\w+([\.-]?\w+)*@*(ofppt)*(\.ma)+$/.test(email);
  }
  function isPhone(phone) {
    var phoneRe = /^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/;
    return phoneRe.test(phone);
  }
  function validate(){
                let checkbox=document.querySelectorAll('input[type="checkbox"]');
                let marked_checkboxes = [];
                let text=document.getElementById("confirm");
                text.innerHTML=" ";
                 checkbox.forEach((check_box,) => { 
                    if(check_box.checked){
                        marked_checkboxes.push(check_box);
                    }
                });
                if (marked_checkboxes.length>=2 && marked_checkboxes.length <=3){
                    text.innerHTML="Good";
                    text.style.color="#2ecc71"
                }
                else{
                    text.innerHTML = "Must select a minimum of 2 options to proceed";
                    text.style.color="#e74c3c"
                }
            }