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
    
    let Form = new Form();
});