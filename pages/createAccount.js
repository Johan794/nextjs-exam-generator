import styles from '../styles/Home.module.css'
export default function createAccount() {
    let data = {
        name: '',
        email: '',
        password: '',
    }
   


    //crear el boton para seleccionar si es un estudiante o un profesor
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("DATA")
        console.log(data)
        const response = await fetch('/api/accounts/singup', {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

           
        });
        const json = await response.json();

        window.location.href = '/api/student/1';
      
    }
    
     let handleChange = (event) => {
        // console.log(event.target.name);
        switch (event.target.name) {
            case 'name':
                data.name = event.target.value;
                break;
            case 'email':
                data.email = event.target.value;
                break;
            case 'password':
                data.password = event.target.value;
                break;
            default:
                break;
        }
    };

         


    return (
        <main className={styles.main}>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className={styles.title}>Create an account</h1>
                <input type="text" placeholder="First Name" name='name' onChange={handleChange} />
                <br>
                </br>
                <input type="email" placeholder="Email"  name='email'  onChange={handleChange} />
                <br></br>
                <input type="text" placeholder="Password" name='password'  onChange={handleChange} />
                <br></br>
                <input type="password" placeholder="Confirm Password" />
                <br></br>
                <input type="submit" value="Create Account" />
            </form>
        </main>
        
    )
}
