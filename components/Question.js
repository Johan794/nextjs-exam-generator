import {Component} from 'react'
import {Card, CardContent} from '@mui/material'


export default class Question extends Component{
    render(){
        return(
            <Card sx={{m:1}}>
                <CardContent>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.option1}</p>
                    <p>{this.props.option2}</p>
                    <p>{this.props.option3}</p>
                    <p>{this.props.option4}</p>
                </CardContent>
            </Card>
        )
    }
}