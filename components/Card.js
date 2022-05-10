import { Component } from "react";
import Link from "next/link";
import {Card, CardContent, CardActions} from '@mui/material'

export default class CardCom extends Component{
    render(){
        return(
            <Card sx={{m:1}}>
                <CardContent>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.option1}</p>
                    <p>{this.props.option2}</p>
                    <p>{this.props.option3}</p>
                    <p>{this.props.option4}</p>
                </CardContent>
                <CardActions>
                    <Link href={this.props.directto}><button type='btn' class='btn btn-terciary'>Ver examen</button></Link>
                </CardActions>
            </Card>
        )
    }
}