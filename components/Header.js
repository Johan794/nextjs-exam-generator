import Head from 'next/head'
import {Component} from 'react'

export default class Header extends Component{
    render(){
        return(
            <Head>
                <title>{this.props.title}</title>
                <link href="https://bootswatch.com/5/journal/bootstrap.min.css" rel="stylesheet"></link>
            </Head>
        )
    }
}