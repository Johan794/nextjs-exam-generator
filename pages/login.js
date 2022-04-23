import styles from '../styles/Home.module.css'

export default function login(){ 
    let data = {
        email: '',
        password: '',
    }
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
            window.location.href = '/api/student/1';
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
        <main className={styles.main}>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className={styles.title}>Login</h1>
            <input type="email" name='email' onChange={handleChange}/>
            <br></br>
            <input type="password" name='password' onChange={handleChange}/>
            <br></br>
            <input type="submit" value="Log in"/>
            <br></br>
            </form>
            <a href='createAccount'> I don't have an account yet</a>
        </main>
        
    )
}