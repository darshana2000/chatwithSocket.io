  import React, {Component} from 'react';

  export default class ChatController extends Component
  {
      render(){
          const {user,logout}= this.props;

          return(
              <div>
                  Chat Container
              </div>
          );
      }
  }