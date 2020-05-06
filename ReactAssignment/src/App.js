import React, { Component } from 'react';
import Control from './components/Assignment1/Control'


class App extends Component {
 
   


    
  
OnclickHandler=()=>{
    
    this.setState({Name:""})


}
    
       render () {
       
            
               
           return (

               <div>
                      <title>Serving App</title>
                   
                   <Control/>
                
               </div>
           );
       }
     }
     

  export default App;
