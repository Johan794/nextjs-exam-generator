import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Link from 'next/link'

let data = {
    email: '',
    password: '',
}

let login = () =>{
    
    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('/api/accounts/verifyAccount',{
            method:'POST',
            body: JSON.stringify({data}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        console.log("funciona?")
        if(json.status == 'success'){
            console.log("funciona sos un capo")
            window.location.href = '/teacher';
        }else{
            // console.log("no funciona")
            alert("Please check your email and password")
            window.location.href = '/login';
           
        }
    }

    let handleChange = (event) => {
        // console.log(event.target.name);
        switch (event.target.name) {
            case 'email':
                data.email = event.target.value;
                break;
            case 'password':
                data.password = event.target.value;
                break;
            default:
                break;
        }
    }
    return(
        <div>
            <Header title='Login'></Header>
            <Navbar></Navbar>
            <main className={styles.main}>
                <form className='form' onSubmit={handleSubmit}>
                    <legend className={styles.title}>Login</legend>
                    <div class='mb-3'>
                        <div class='mb-3'>
                            <label for='email' class='form-label'>Correo electronico</label>
                            <input type="email" class='form-control' id='email' onChange={handleChange} />
                        </div>
                        <div class='mb-3'>
                            <label for='password' class='form-label'>Contraseña</label>
                            <input type="password" class='form-control' id='password' onChange={handleChange} /> 
                        </div>
                        <div class='container'>
                            <div class='row'>
                                <div class='col text-center'>
                                    <input type="submit" class='btn btn-terciary' value="Log in" />
                                </div>
                                <div class='col text-center'>
                                    <Link href='createAccount'><input type='button' class='btn btn-terciary' value='Sign up' /></Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default login