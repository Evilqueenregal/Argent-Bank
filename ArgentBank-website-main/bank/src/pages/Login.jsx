import React from 'react';
import Form from '../components/Form.jsx';
import '../styles/main.css';

/* Page de connexion */
function Login () {
    return (
        <div className='signin-page'>
            <main className='bg-dark'>
               {/* Retourne le composant du formulaire */} 
                < Form />
            </main>
        </div>
        
    )
}

export default Login;