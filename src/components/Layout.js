import React, {Component} from 'react';
import io from 'socket.io-client'
import {USER_CONNECTED} from '../Events.js'
//import App from '/App' 

//import registerServiceWorker from './registerServiceWorker';

const socketUrl ="http//localhost:3000/"

export default class Layout extends Component{

    constructor(props){
        super(props);

        this.state={
           socket:null,
           user:null
        };
    }
    componentWillMount(){
        this.initSocket()
    }

    initSocket= ()=>{
        const socket = io(socketUrl)
        socket.on('connect',()=>{
            console.log("Connected");
        })
        this.setState({socket});
    }

    setUser=(user)=>{
        const { socket} = this.state
        socket.emit(USER_CONNECTED);
    }

    // logout =()=>{
    //     const {socket} = this.state
    //     socket.emit(LOGOUT)
    //     this.setState({user:null});
    // }

    render(){
        const {title} = this.props
     //   const{socket, user } = this.state

         

        return(
            <div className="container">
            <h2>Chat Application</h2>
                {title}
            </div>
        );
    }
}