import {Component} from 'react'
import styles from '../styles/Home.module.css'

export default class Navbar extends Component {
    render(){
        return(
            <div class={styles.navbar}>
                <div>
                    <a href='/'>Exams Creator App</a>
                </div>
                <div class={styles.navbarbut}>
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>
            </div>
        )
    }
}