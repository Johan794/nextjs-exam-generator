import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Question from '../../components/Question'
import {Container, Paper} from '@mui/material'

export default function view({exam,questions}){
    return(
        <div className={styles.centerdiv}>
            <Header title='View Exam'></Header>
            <Container maxWidth='sm'>
                <Paper sx={{my: 2, p: 1}}>
                    <h2>{exam.subject_exam}</h2>
                </Paper>
            </Container>
            <div className={styles.horizontalflexdiv}>
                {questions.map(element => (
                    <Question title={element.question} option1={element.option1} option2={element.option2} option3={element.option3} option4={element.option4}/>
                ))}
            </div>
        </div>
    )
}

export async function getStaticPaths(){
    const res = await fetch('http://localhost:3000/api/student/getExamsId',{method:'POST'})
    const ids = await res.json()
    const paths = ids.map(i =>({
        params: {id: i.id.toString()}
    }))
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    const res = await fetch(`http://localhost:3000/api/student/${params.id}`,{method:'POST'})
    const res2 = await fetch(`http://localhost:3000/api/student/questions/${params.id}`,{method:'POST'})
    const exams = await res.json()
    const questions = await res2.json()
    const exam = exams[0]
    return {props: {exam,questions}}
}