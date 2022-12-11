import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}



const SignUpForm = () => {
    
    const [formfields, setFormfields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formfields;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwörter stimmen nicht überein!");
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password)
            console.log(response)
        } catch (error) {
            console.log('user erstellung ergibt fehler',error)

        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormfields({...formfields, [name]:value})
    }

    return (
        <div>
            <h2>Registrieren Sie sich</h2>
            <form onSubmit={handleSubmit}>
                
                <FormInput label='Display Name'  type='text' required onChange={handleChange} name="displayName" value={displayName} />

                
                <FormInput label='Email' type='email' required  onChange={handleChange} name="email" value={email}/>

                
                <FormInput label='Passwort' type='password' required onChange={handleChange} name="password" value={password}/>

                
                <FormInput label='Passwort Bestätigen' type='password' required  onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <button type="submit">Registrieren</button>
            </form>
        </div>
    )
}

export default SignUpForm ;