import { Field } from './Field.js';

class PasswordField extends Field {
  
    constructor(element){
        super(element);
    }
    
    validate()
     {
        if (this.element.name === "")
        {
            this.errors = "Le champ ${this.#name} ne peut pas être vide";
            this.element.classList.add("class", "nok");
        }
        if (this.element.name.length < 5)
        {
            this.errors = "Le champ ${this.#name} est trop court (5 caractères minimum)";
        }
        else
        {
            this.element.classList.add("class", "ok");
        }
    }
};
export { PasswordField };