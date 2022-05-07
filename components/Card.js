import { Component } from "react";
import Link from "next/link";
import {Card, CardContent, CardActions} from '@mui/material'

export default class CardCom extends Component{
    render(){
        return(
            <Card sx={{m:1}}>
                <CardContent>
                    <h2>{this.props.title}</h2>
                </CardContent>
                <CardActions>
                    <Link href={this.props.directto}><button type='btn' class='btn btn-terciary'>Ver examen</button></Link>
                </CardActions>
            </Card>
        )
    }
}