import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


 
export default function Home() {
  return (
    <div className={styles.container}>
      <Header title='Exams Generator'></Header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Exams Creator app!
        </h1>
        <br></br>
        <h3 className={styles.title}>Please log in!</h3>
        <h3>Or create an account</h3>
        <br></br>
        <div className={styles.grid}>
          <Link href='/login'>
            <a className={styles.card}>
              <h2>Log in &rarr;</h2>
            </a>
          </Link>

          <Link href='/createAccount'>
            <a className={styles.card}>
              <h2>Create account &rarr;</h2>
            </a>
          </Link>

        </div>
      </main>
    </div>
  )
}
