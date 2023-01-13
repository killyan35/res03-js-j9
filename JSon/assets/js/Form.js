import { Field } from './Field.js';
import { EmailField } from './EmailField.js';
import { TextField } from './TextField.js';
import { PasswordField } from './PasswordField.js';

class Form {
    #fields;
    #submitted;
    
    
    constructor(){
        this.#fields = [];
        this.#submitted = false;
    }
    
    get fields (){
        return this.#fields;
    }
    get submitted (){
        return this.#submitted;
    }

    set submitted (submitted){
        this.#submitted = submitted;
    }
    addField(field)
    {
        this.#fields.push(field);
    }
    
    submit() 
    {

    }

    validate() 
    {

    }
    
    toJSON() 
    {
        
    }
}
export { Form };