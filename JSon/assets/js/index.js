import { Field } from './Field.js';
import { Form } from './Form.js';
import { EmailField } from './EmailField.js';
import { TextField } from './TextField.js';
import { PasswordField } from './PasswordField.js';

window.addEventListener("DOMContentLoaded", function(){
    
    
    let firstname1 = document.getElementById("firstname");
    let lastname1 = document.getElementById("lastname");
    let email1 = document.getElementById("email");
    let password1 = document.getElementById("password");
    let confirmpassword1 = document.getElementById("confirm-password");
    
    let firstname = new TextField(firstname1);
    let lastname = new TextField(lastname1);
    let email = new EmailField(email1);
    let password = new PasswordField(password1);
    let confirmpassword = new PasswordField(confirmpassword1);
    
    firstname.name = firstname1.getAttribute("name");
    lastname.name = lastname1.getAttribute("name");
    email.name = email1.getAttribute("name");
    password.name = password1.getAttribute("name");
    confirmpassword.name = confirmpassword1.getAttribute("name");
    
   
    let form = new Form(); 
    form.addField(firstname);
    form.addField(lastname);
    form.addField(email);
    form.addField(password);
    form.addField(confirmpassword);
    console.log(form);
    
    let UserInformation = document.getElementById("user-information");
    
    UserInformation.addEventListener("submit", function(event){
        event.preventDefault();
        form.submit();
    });
});