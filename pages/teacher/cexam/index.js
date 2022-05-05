import styles from '../../../styles/Home.module.css'
import Header from '../../../components/Header'
import QuestionBox from '../../../components/QuestionsBox'
import Question from '../../../components/Question'
import {Card, CardContent} from '@mui/material'
import Link from 'next/Link'

export default function createExam(){

    return(
        <div>
            <Header title='Create exam'/>
            <main className={styles.main}>
                <form>
                    <div class='mb-3'>
                        <label for='formularyName' class='form-label'>Nombre del formulario</label>
                        <input type='text' class="form-control" id='formularyName'/>
                    </div>
                    <div class='mb-3'>
                        <label for='accessCode' class='form-label'>Código de acceso</label>
                        <input type='password' class='form-control' id='accessCode'/>
                    </div>
                    <div class='text-center'>
                        {QuestionBox}
                    </div>
                    <div class='mb-3'>
                        <Question />
                    </div>
                    <div class='mb-3'>
                        <Card>
                            <CardContent>
                                <div class='text-center'>
                                    <Link href={'/teacher/cexam/cquestion'}>
                                        <button type='btn' class='btn btn-primary' >
                                            Crear pregunta
                                        </button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </form>
            </main>
        </div>
    )
}