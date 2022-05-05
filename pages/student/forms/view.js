import Header from '../../../components/Header'
import Question from '../../../components/Question'
import styles from '../../../styles/Home.module.css'



export default function View(){
    return(
        <div className={styles.centerdiv}>
            <Header title='Questionary'></Header>
            <div>
                <div>
                    <h1>Cuestionario #</h1>
                </div>
                <div>
                    <p>Titulo</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}