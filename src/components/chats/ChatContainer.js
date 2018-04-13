import React, {Component} from 'react';
import SideBar from './SideBar'

  export default class ChatController extends Component
  {
        constructor(props){
            super(props);

            this.state={
                chats:[],
                activeChat:null
            };
        }

        serActiveChat=(activeChat)=>{
            this.setState({activeChat})
        }

      render(){
          const {user,logout}= this.props;

          return( 
              <div className="container">
              <sidebar
               chats={chats}
               user={user}
               activeChat={activeChat}
               serActiveChat={this.serActiveChat}
              />
     
                  Chat Container
              </div>
          );
      }
  }