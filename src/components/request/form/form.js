import React from 'react';

const Form = () => {
    return(
        <div className="request__form">
            <h2 className="request__form-header">Zarejestruj się</h2>
            <form>
                <input type="text" placeholder="Imię" required/>
                <input type="text" placeholder="Nazwisko" required/>
                <input type="number" placeholder="Telefon" required/>
                <input type="email" placeholder="E-mail" required/>
                <textarea placeholder="Wiadmość (opcjonalnie)" class="textarea"></textarea>
                <button type="submit">Wyślij</button>
            </form>
        </div>
    )
}
export default Form;
