import React, { Component } from 'react'
import './Control.css'
import Switch from 'react-switch'
export default class Control extends Component {
constructor(props){
    super(props)
    this.state={
        servs : [25,50,100,200],
        check:'',
        checked:false,
        annualy:[],
        monthly:[]

    }
}
 
// CheckingHandler=(input)=>{
//         this.state.servs.filter(el =>{
            
//         })
// }
onchangehandler=(e)=>{
   var l, l2,c,c2;
   var {servs,annualy,monthly} =this.state;
if(e.target.checked === true){
    servs.forEach(el=>{
        if(e.target.value==el){
            l = el*0.5;
            l2 = el *1;
            c = el * 1;
            c2 = el *2;
            var anndiff =c -l;
            var mdiff = c2 -l2;
          annualy.push(l,c,anndiff,el);
          monthly.push(l2,c2,mdiff,el);

            if(annualy.length>4 && monthly.length>4){

                  annualy.splice(0,annualy.length,l,c,anndiff,el)
                  monthly.splice(0,monthly.length,l2,c2,mdiff,el)

            }
       
           console.log(this.state.annualy,this.state.monthly);
        }
    })
     this.state.checked =false;

}
             
      this.setState({
            check:e.target.value,
            annualy:this.state.annualy,
            monthly:this.state.monthly
      })
     return{
            ...this.state.annualy,
            ...this.state.monthly
     }
     
}
 onCheckHandler=(checked)=>{
        this.setState({
            checked,
            monthly:this.state.monthly,
            annualy:this.state.annualy
        })
     
    return {
            ...this.state.annualy,
            ...this.state.monthly
    }
 }



    render() {
        var permonth;
        var peryear;

        
        if(this.state.checked === true){
            permonth =(
                <div className="d-flex flex-row justify-content-center ">
                <div className="card">  
                       <ul className="d-block ">
                            <li className="font-weight-bold mb-5"> Lollipop</li>
                             <li> <h4 className=" font-weight-bolder">${this.state.monthly[0]}<span id="per">per month</span></h4>   </li>
                             <li className="serv">For {this.state.monthly[3]} serving </li>
                      </ul>  
                      </div>
                      <div className="card">  
                       <ul className="d-block ">
                             <li className="font-weight-bold  mb-5">Icecandy</li>
                             <li> <h4 className=" font-weight-bolder ">${this.state.monthly[1]}<span id="per">per month</span>  </h4></li>
                             <li className="serv">For {this.state.monthly[3]} serving  </li>
                             </ul>  
                      </div>
         
                     
                      <div className="card card1">  
                       <ul className="d-block ">
                             <li className="font-weight-bold ">Your savings</li>
                             <li className="font-weight-bold  mb-4"> with lollipop</li>
                             <li className="text-info h4 font-weight-bolder"> $ {this.state.monthly[2]} </li>
                             <li className="diff">per month</li>
                             </ul>  
                      </div>
                </div>
                    
         
            );
     }  else{
      peryear= ( 
      
      <div className="d-flex flex-row justify-content-center ">
        <div className="card">  
               <ul className="d-block ">
                    <li className="font-weight-bold mb-5"> Lollipop</li>
                     <li  ><h4 className=" font-weight-bolder "> ${this.state.annualy[0]}<span id="per">per year</span></h4> </li>
                     <li className="serv">For {this.state.annualy[3]} serving </li>
              </ul>  
              </div>
              <div className="card">  
               <ul className="d-block ">
                     <li className="font-weight-bold mb-5">Icecandy</li>
                     <li > <h4 className=" font-weight-bolder "> ${this.state.annualy[1]}<span id="per">per year</span>  </h4> </li>
                     <li className="serv">For {this.state.annualy[3]} serving  </li>
                     </ul>  
              </div>
 
             
              <div className="card card1">  
               <ul className="d-block ">
                     <li className="font-weight-bold">Your savings</li>
                     <li className="font-weight-bold  mb-4"> with lollipop</li>
                     <li className="text-info h4  font-weight-bolder">${this.state.annualy[2]} </li>
                     <li className="diff">per year</li>
                     </ul>  
              </div>
        </div>
            
      );
     }
                
        return (
            <div>

               
                <div className="d-flex flex-row justify-content-center">
                       
                <div>
                <label htmlFor="radiobutton"  className="box" >
                    <input 
                        type="radio"
                        name="" id="radiobutton" 
                        value="25"
                        checked={this.state.check ==="25"}
                        onChange={this.onchangehandler}
                          />
                          <span >  <h5 className="center font-weight-bold"> 25 Serving</h5>   </span>  
                 </label>
                </div>
               
             
                 
                 
                        
                  <label  htmlFor="radiobutton1" className="box">
                      
                      <input  
                         type="radio" 
                         name="" id="radiobutton1"
                         value="50"
                         checked={this.state.check ==="50"} 
                         onChange={this.onchangehandler} 
                        /> 
                     <span  > <h5 className="center font-weight-bold"> 50 Serving</h5>   </span>  
                  </label>
                 
                
                 <label htmlFor="radiobutton2" className="box" >
                      
                      <input  
                         type="radio" 
                         name="" id="radiobutton2"
                         value="100"
                         checked={this.state.check ==="100"} 
                         onChange={this.onchangehandler} 
                        /> 
                       <span > <h5 className="center font-weight-bold"> 100 Serving</h5>   </span>  
                  </label>
                 
            
                <label htmlFor="radiobutton3" className="box" >
                      
                      <input  
                         type="radio" 
                         name="" id="radiobutton3"
                         value="200"
                         checked={this.state.check ==="200"} 
                         onChange={this.onchangehandler} 
                        /> 
                      <span > <h5 className="center font-weight-bold"> 200 Serving</h5>   </span>  
                  </label>
                  
                
                
        </div>

      
        
        <div>
                    <div className="text-center mt-3">

                            <span  className="adjust font-weight-bold">Annual <br/> 50% </span>
                             
                              <Switch
                                        checked={this.state.checked}
                                        onChange={this.onCheckHandler}
                                        onColor="#86d3ff"
                                        onHandleColor="#2693e6"
                                        handleDiameter={30}
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                        height={20}
                                        width={48}
                                        className="react-switch mt-5"
                                        id="material-switch"
                                    /> 
                                     <span className="adjust2 font-weight-bold">
                                        Monthly
                                        </span>

                    </div>
                    
                    {permonth}
                    {peryear}
</div>
            </div>
        )
    }
}
