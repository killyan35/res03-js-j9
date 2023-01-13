import { Field } from './Field.js';

class PasswordField extends Field {
  
    constructor(element){
        super(element);
    }
    
    validate()
     {
         this.errors= [];
        if (this.element.value === "")
        {
            this.errors = "Le champ ${this.#name} ne peut pas être vide";
            this.element.classList.add("nok");
            this.element.classList.remove("ok");
        }
        if (this.element.value.length < 5)
        {
            this.errors = "Le champ ${this.#name} est trop court (5 caractères minimum)";
        }
        else
        {
            this.element.classList.add("ok");
            this.element.classList.remove("nok");
        }
    }
};
export { PasswordField };