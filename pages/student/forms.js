import Header from '../../components/Header'
import styles from '../../styles/Home.module.css'
import {Card, CardContent, Grid} from '@mui/material'

export default function Forms(){
    return(
        <div>
            <Header title='Forms'></Header>
            <main className={styles.main}>
                <Card sx={{ minWidth:600}}>
                    <CardContent>
                        <h1>Forms</h1>
                    </CardContent>
                </Card>
                <Grid>

                </Grid>
            </main>
        </div>
    )
}