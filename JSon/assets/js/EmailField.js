import { Field } from './Field.js';

class EmailField extends Field {
  
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
        else
        {
            this.element.classList.add("ok");
            this.element.classList.remove("nok");
        }
    }
};
export { EmailField };