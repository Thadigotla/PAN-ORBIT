import React from 'react';
import { withRouter } from 'react-router';
import'./allUsers.module.css';

  class AllUsers extends React.Component {

    state={
        allUsers:[]
    }


    componentDidMount()
   {
       const allUsers =  fetch('https://panorbit.in/api/users.json').then(res => res.json())
       .then(response => 
        {
            console.log(response)
          this.setState({allUsers:response.users},()=>console.log("State is",this.state))
        })

     
   }

     userHandler = (idKey) =>
   {
     console.log(idKey)
     
     this.props.history.push("/user/"+idKey)
   }
    

    render()
    {
        return(
           <div className="allUsers" >

               <div className="allUsers__Card">
                  <span className="allUsers__card_selectAccount">Select an account</span>
                  <div className="allUsers__card_accounts" >
                     
                           
                  {
                      this.state.allUsers.length > 0 &&
                      
                          Object.keys(this.state.allUsers).map((e,i)=>{
                              console.log(this.state.allUsers[e])
                              return  <div className="maintain" key={Math.random()} onClick={()=>this.userHandler(e)}>
                             <span className="allUsers__card_accounts_image" key={e.id}>
                                 <img className="imgga" src={this.state.allUsers[e].profilepicture} />
                             </span>
                             <span className = "allUsers__card_accounts_Name">{this.state.allUsers[e].name}</span>

                            </div>
                            
                            })
                      
                  }
                      
                      
                      
                            
                      
                  </div>
               </div>
           </div>
        )
    }
} 

export default withRouter (AllUsers);