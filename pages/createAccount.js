import styles from '../styles/Home.module.css'
export default function createAccount() {
    //crear el boton para seleccionar si es un estudiante o un profesor
    return (
        <main className={styles.main}>
            <form>
                <input type="text" placeholder="First Name" />
                <br>
                </br>
                <input type="text" placeholder="Last Name" />
                <br></br>
                <input type="email" placeholder="Email" />
                <br></br>
                <input type="password" placeholder="Password" />
                <br></br>
                <input type="password" placeholder="Confirm Password" />
                <br></br>
                <input type="submit" value="Create Account" />
            </form>
        </main>
        
    )
}
