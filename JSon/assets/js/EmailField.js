import { Field } from './Field.js';

class EmailField extends Field {
  
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
        else
        {
            this.element.classList.add("class", "ok");
        }
    }
};
export { EmailField };