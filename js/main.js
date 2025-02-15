const nameError=document.getElementById("name-error");
const phoneError=document.getElementById("phone-error");
const emailError=document.getElementById("email-error");
const messageError=document.getElementById("message-error");
const submitError=document.getElementById("submit-error");



function validateName(){
    var name=document.getElementById("contact-name").value;

    if(name.length===0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full name";
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatePhone(){
    var phoneValue=document.querySelector("#contact-phone").value;

    if(phoneValue.length===0){
        phoneError.innerHTML="Phone No is required";
        return false;
    }
   
    if(!phoneValue.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Phone no should be 10 digits.";
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email=document.getElementById("contact-email").value;
    if(email.length===0){
        emailError.innerHTML="Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@gmail\.com$/)) {
        emailError.innerHTML = "Email invalid.";
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message=document.getElementById("contact-message").value;
    var required=30;
    var left=required- message.length;

  
    if(left>0){
        messageError.innerHTML=`${left} more characters required`;
            return false;
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}

function validateForm(){
    if(!validateName()||!validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display="block";
        submitError.innerHTML="Please fix error to submit";

        setTimeout(function(){
            submitError.style.display="none";
        },3000);

        return false;
    }
}