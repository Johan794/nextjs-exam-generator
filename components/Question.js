import {Component} from 'react'
import {Card, CardContent} from '@mui/material'


export default class Question extends Component{
    render(){
        return(
            <div>
                <Card>
                    <CardContent>
                        <div>
                            <h1>Pregunta #</h1>
                        </div>
                        <div>
                            <p>Enunciado</p>
                        </div>
                        <div>
                            <p>Preguntas</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}