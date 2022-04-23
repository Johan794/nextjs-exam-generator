import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title='Exams Generator'></Header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Exams creator app!
        </h1>
        <br></br>
        <h3 className={styles.title}>Please log in!</h3>
        <h3>Or create an accuount</h3>
        <br></br>
        <div className={styles.grid}>
          <a href="login" className={styles.card}>
            <h2>I'm a student &rarr;</h2>
          </a>

          <a href="login" className={styles.card}>
            <h2>I'm a teacher &rarr;</h2>
          </a>

          
        </div>
      </main>
    </div>
  )
}
