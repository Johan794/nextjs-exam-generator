import Header from '../../components/Header'
import Card from '../../components/Card'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import {Grid, Container, Paper} from '@mui/material'

export default function Forms({forms}){
    return(
        <div className={styles.centerdiv}>
            <Header title='Forms'></Header>
            <Container maxWidth='sm'>
                <Paper sx={{my: 2, p: 1}}>
                    <h2>Exámenes</h2>
                </Paper>
            </Container>
            <div className={styles.horizontalflexdiv}>
                {forms.map(element => (
                    <Card title={element.subject_exam} directto={`/teacher/${element.id}`}/>
                ))}
            </div>
            <div className={styles.buttondiv}>
                <Link href='/teacher/cexam'><button type='btn' class='btn btn-primary'>Crear examen</button></Link>
            </div>
        </div>
    )
}

Forms.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/student/getExams',{method:'POST'})
    const data = await res.json()
    return {forms:data}
}