const form = document.getElementById("for");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e =>{
     e.preventDefault();
    
     
     var firstName = fname.value.trim();
     var lastName = lname.value.trim();
     var emailValue = email.value.trim();
     var passwordValue= password.value.trim();
     
     if (firstName === '') {
        errorFunc(fname, "First Name cannot be empty")
     } else {
        successFunc(fname)
     }

     if (lastName === '') {
        errorFunc(lname, "Last Name cannot be empty")
     } else {
        successFunc(lname)
     }
     if (emailValue === '') {
        errorFunc(email, "Email Add cannot be empty")
     } else if (!isEmailValid(emailValue)) {

        errorFunc(email, 'Looks like this is not an email');

    }else {
        successFunc(email)
     }
     if (passwordValue === '') {
        errorFunc(password, "Password cannot be empty")
     } else {
        successFunc(password)
     }
})

 function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector("span");
    span.innerText = message;
    formControl.className += 'error';
    span.className += 'error-text';
 }

 function successFunc(req){
    const formControl = req.parentElement;
    formControl.className += 'success';
 }

function isEmailValid(email) 
    {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email)).toLowerCases;
    }
    