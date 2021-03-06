import Header from '../components/Header';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar';

let type = '';
let createAccount = () => {
    //crear el boton para seleccionar si es un estudiante o un profesor
    async function handleSubmit(event) {
        event.preventDefault();
        if(event.target.password.value == event.target.confirm.value){
            const response = await fetch('/api/accounts/singup', {
                method: 'POST',
                body: JSON.stringify({
                    name: event.target.name.value,
                    email: event.target.email.value,
                    password: event.target.password.value,
                    student: event.target.radioacc.value
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }  
            });
            const json = await response.json();
    
            if(json.status === 'success'){
                //alert('account created')
                console.log(type)
                //console.log(json.data)
                if(json.data.is_estudent === true){
                    //es estudiante
                    window.location.href = '/student/forms';
                }else{
                    // es profesor
                    window.location.href = '/teacher';
                }
                
            }else{
                if(json.message== "llave duplicada viola restricción de unicidad «users_username_key»"){
                    alert("This account already exists")
                    window.location.reload();
                }else{
                    console.log(json.message)
                    alert("Something went wrong")
                }
                
            }
        }else{
            alert('passwords dont match')
            window.location.reload();
        }
        
        
      
    }
    return (
        <div>
            <Header title='Sign up'></Header>
            <main className={styles.main}>
                <form className='form' onSubmit={handleSubmit}>
                    <legend className={styles.title}>Create an account</legend>
                    <div class='mb-3'>
                        <div class='mb-3'>
                            <label for='name' class='form-label'>Primer nombre</label>
                            <input type="text" class='form-control' name='name' id='name' />
                        </div>
                        <div class='mb-3'>
                            <lable for='email' class='form-label'>Correo electronico</lable>
                            <input type="email" name='email' id='email' class='form-control' />
                        </div>
                        <div class='mb-3'>
                            <label for='password' class='form-label'>Contraseña</label>
                            <input type="password" class='form-control' id='password' name='password'/>
                        </div>
                        <div class='mb-3'>
                            <label for='confirmpassword' class='form-label'>Confirmar contraseña</label>
                            <input type="password" class='form-control' id='confirmpassword' name='confirm'/>
                        </div>
                        <div class='mb-3'>
                            <label for='typeacc' class='form label'>Eres</label>
                            <div class='form-check' id='typeacc'>
                                <input type='radio' id='studentRadio' value={true} class='form-check-input' name='radioacc'/>
                                <label for='studentRadio' class='form-check-label'>Estudiante</label>
                            </div>
                            <div class='form-check'>
                                <input type='radio' id='teacherRadio' value={false} class='form-check-input' name='radioacc' />
                                <label for='teacherRadio' class='form-check-label'>Profesor</label>
                            </div>
                        </div>
                        <div class='container'>
                            <div class='row'>
                                <div class='col text-center'>
                                    <input type="submit" class='btn btn-terciary' value="Create cuenta" />
                                </div>
                                <div class='col text-center'>
                                    <Link href='/' ><input type="button" class='btn btn-terciary' value="Cancelar" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div> 
    )
}

export default createAccount
