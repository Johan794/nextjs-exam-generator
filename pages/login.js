import styles from '../styles/Home.module.css'

export default function login(){    
    return(
        <main className={styles.main}>
            <form>
            <input type="email"/>
            <br></br>
            <input type="password"/>
            <br></br>
            <input type="submit" value="Log in"/>
            <br></br>
            </form>
            <a href='createAccount'> I don't have an accuount yet</a>
        </main>
        
    )
}