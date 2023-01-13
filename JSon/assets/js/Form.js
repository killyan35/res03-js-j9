import { Field } from './Field.js';
import { EmailField } from './EmailField.js';
import { TextField } from './TextField.js';
import { PasswordField } from './PasswordField.js';

class Form {
    #fields;
    #submitted;
    
    
    constructor(){
        this.#fields = [];
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
        let btn = document.getElementById("btn");
        
        let flag = false;
        
        for (let i = 0; i < this.#fields.length; i++)
        {
            this.#fields[i].validate();
            
            
            if (this.#fields[i].errors.length > 0)
            {
                flag=true;
                
            }
        }
            if (flag === true)
            {
                btn.classList.add("disabled");
            }
            else 
            {
                btn.classList.remove("disabled");
                 
            }
            console.log(flag);
            
        
        
         
    }
    
    toJSON() 
    {
        
    }
}
export { Form };