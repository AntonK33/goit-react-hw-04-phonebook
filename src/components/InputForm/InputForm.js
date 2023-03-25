import { useState } from "react"
import { nanoid } from "nanoid";
import css from './InputForm.module.css';
import PropTypes from 'prop-types';


 const InputForm = ({onSubmit}) => {
   
    const[name, setName] = useState('');
     const [number, setNumber] = useState('')
     
    const onInputHandler = (event) => {
        // useState({ [event.target.name]: event.target.value })
        setName(event.target.value)
              
     }
     const onInputNumber = (event) => {
        
         setNumber(event.target.value)
         console.log(setNumber)
     }

    const submitForm = e => {
        e.preventDefault();
        const newContact = {
            name: name,
            id: nanoid(),
            number: number,
            
        };
       
        onSubmit(newContact);
        setName('');
        setNumber('');
        console.log(newContact)
        //restart();
    } 
    

   
    
                    
        return (
            <form
                className={css.form}
                onSubmit={submitForm}>
                <label htmlFor='name' className={css.label_form}>
                    <span>Name</span>
                    <input
                    onChange={onInputHandler}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={css.input}
                />
                </label>
                <label htmlFor='number' className={css.label_form}>
                    <span>Number</span>
                    <input
                    onChange={onInputNumber}
                    type="tel"
                    name="number"
                        value={number}
                        className={css.input}
                />
                </label>
                
                <button type="submit" className={css.addBtn}>Add contact</button>
               
   
                
            
            </form>
            
        )
    
} 
    
 


InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default InputForm;

     
    

     


















