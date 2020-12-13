import React, { useReducer } from 'react';
import  './specificUser.module.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { MapContainer } from '../Map/map';
import { NotImplemented } from '../NotImplementedComponent/notImplemented';
import { withRouter } from 'react-router';



  class SpecificUser extends React.Component{

    state={
        allUsers:[],
        signManage:false,
        show:true,
        profil:"Profile",
        userId:0
        
    }

   
   
        componentDidMount()
        {
            console.log(this.props.match.params.id)
            this.setState({userId:this.props.match.params.id})
            const allUsers =  fetch('https://panorbit.in/api/users.json').then(res => res.json())
            .then(response => 
             {
                 console.log(response)
               this.setState({allUsers:response.users},()=>console.log("State is",this.state.allUsers))
             })
     
          
        }


        closeSign = ()=>
        {
            if(this.state.signManage)
            {
                this.setState({signManage:false})
            }
        }


        profile = () =>
        {
            if(!this.state.signManage)
            {
                this.setState({signManage:true})
            }
        }

        changeUser = (e) =>
        {
            console.log(e.target.innerText)

            Object.keys(this.state.allUsers).map(el => 
                {   console.log(this.state.allUsers [el])
                    console.log(this.state.allUsers [el].name === e.target.innerText)
                    if(this.state.allUsers [el].name === e.target.innerText)
                    {  console.log(el)
                        this.setState({userId:Number.parseInt(el)},()=>this.props.history.push("/user/"+el))
                    }
                })
        }

        singOut = () =>
        {
            this.props.history.push("/")
        }
         
        sideChange = (e) =>
        { 
            if(e.target.innerText === "Profile" || e.target.innerText === "Posts" || e.target.innerText==="Gallery" || e.target.innerText==="ToDo")
            {
                console.log(e.target.innerText)
                if(e.target.innerText == "Profile")
                {
                    return this.setState({show:true,profil:"Profile"})  
    
                }
                 
                this.setState({show:false,profil:e.target.innerText})  
            }

           
            
        }

        componentDidUpdate()
        {
             
                       if(this.state.userId != this.props.match.params.id)
                       {
                        this.setState({userId:Number.parseInt(this.props.match.params.id)})
                       }
                    
                       
                    
                

        }
    
    render()
    {
        return(
           <div className="AllMain" onClick={this.closeSign}>

             <span  className="All" onClick={this.sideChange}>
               <span className= {this.state.profil === "Profile" ? "slideItem" : "slideItemHighLight"}  value="Profile">Profile</span>
               <span  className= {this.state.profil === "Posts" ? "slideItem" : "slideItemHighLight"} value="Posts">Posts</span>
               <span  className= {this.state.profil === "Gallery" ? "slideItem" : "slideItemHighLight"} value="Gallery">Gallery</span>
               <span  className= {this.state.profil === "ToDo" ? "slideItem" : "slideItemHighLight"} value="ToDo">ToDo</span>

               {/* <span className="gte">  &gt; 
                   <span className="gtee"> &nbsp;</span>
               </span>
            */}
</span>

               <div className="sHeader">
                 <span className="profil">{this.state.profil}</span>
                 { console.log("URTIF",this.state),
                     this.state.allUsers.length>0 ? 
                     <span className="sHeaderDetails" onClick={this.profile}>
                     <span><img className="imgss0" src={this.state.allUsers[Number.parseInt( this.state.userId)].profilepicture}/></span>
                     <span className="sHeaderDetailsName">{this.state.allUsers[Number.parseInt( this.state.userId)].name}</span>
                 {

                     this.state.signManage === true ? 

                 <span className="SignManage" onClick={this.changeUser}>
                     <span className="sHeaderDetails1">
                     <span><img className="imgss" src={this.state.allUsers[Number.parseInt( this.state.userId)].profilepicture}/></span>

                     <span className="sHeaderDetailsName">{this.state.allUsers[Number.parseInt( this.state.userId)].name}</span>
                     
                     <span className="sHeaderDetailsEmail">{this.state.allUsers[Number.parseInt( this.state.userId)].email}</span>

                     </span>


                     <span className="sHeaderDetails2">
                     <span><img className="imgss1" src={this.state.allUsers[Number.parseInt(this.state.userId)+ 2].profilepicture}/></span>
                     <span className="sHeaderDetailsName">{this.state.allUsers[Number.parseInt( this.state.userId)+ 2].name}</span></span>

                     <span className="sHeaderDetails2">
                     <span><img className="imgss2" src={this.state.allUsers[Number.parseInt( this.state.userId)+ 1].profilepicture}/></span>
                     <span className="sHeaderDetailsName">{this.state.allUsers[Number.parseInt( this.state.userId)+ 1].name}</span></span>

                     <span className="signOut"  onClick={this.singOut}>Sign Out</span>

                     </span>
                  :null }
                    </span>
                      :null

                      
                 }

<div className="cchat">


 
    <div className="allUsers__card_accountss" >

    <div className="chat"> 
    <span className="ChatIcon">  &#128488;   <span className="chatText">CHAT</span>     <span className="ChatIconIcon">⬆</span></span> 
  
   

   </div> 
                     <div className="DoChat">


                     {
                      this.state.allUsers.length > 0 &&
                      
                          Object.keys(this.state.allUsers).map((e,i)=>{
                              console.log(this.state.allUsers[e])
                              return  <div className="maintains" key={Math.random()} onClick={()=>this.userHandler(e)}>
                             <span className="allUsers__card_accounts_images" key={e.id}>
                                 <img className="imgg" src={this.state.allUsers[e].profilepicture} />
                             </span>
                             <span className = "allUsers__card_accounts_Name">{this.state.allUsers[e].name}</span>

                            </div>
                            
                            })
                      
                  }
                      

                     </div>
                           
                
                      
                      
                            
                      
                  </div> 

</div>

               </div>

  {this.state.show === true ?
               
               <div className="allDetailsMaintain" >

               <div className="allDetailsMaintain_left">
                      <div className="allDetailsMaintain_left_userDetails">

                          {

                              this.state.allUsers.length>0 ?  
                            <div className="cc">
                            <span className="imageMaintain">
                            <img className="allDetailsUSEr" src={this.state.allUsers[Number.parseInt(this.state.userId)].profilepicture}/>
                           
                          </span>
                          <span className="realName">{this.state.allUsers[Number.parseInt(this.state.userId)].name}</span>
                          <div className="otherDetials">

    <div className="csdd">

    <div className="pDetailsUser">Username : </div>  <div className="pDetailsUser1"> &nbsp; {this.state.allUsers[0].username}</div>


        </div>


        <div className="csdd">

<div className="pDetailsUser">e-mail : </div>  <div className="pDetailsUser1">  &nbsp; { this.state.allUsers[0].email}</div>


    </div>


    
    <div className="csdd">

<div className="pDetailsUser">Phone : </div>  <div className="pDetailsUser1">  &nbsp; {this.state.allUsers[0].phone}</div>


    </div>




    <div className="csdd">

<div className="pDetailsUser">Website : </div>  <div className="pDetailsUser1">  &nbsp; {this.state.allUsers[0].website}</div>


    </div>

 
                          
 
                    





                          </div>    
                        





                          </div>
                          :null

                              
                          }
                        
                      </div>
                      <div>
                          {
                              this.state.allUsers.length>0 ?
 
                              <div>
                              <div className="csdd">

                              <div className="pDetailsUser">Name : </div>  <div className="pDetailsUser1"> &nbsp; {this.state.allUsers[0].company.name}</div>
                          
                          
                                  </div>

                                  <div className="csdd">

<div className="pDetailsUser">catchPhrase : </div>  <div className="pDetailsUser1"> &nbsp; {this.state.allUsers[0].company.catchPhrase}</div>


    </div>

    <div className="csdd">

<div className="pDetailsUser">bs : </div>  <div className="pDetailsUser1"> &nbsp; {this.state.allUsers[0].company.bs}</div>


    </div>

                                  

                                  </div>

                              :null
                          }
                      </div>

               </div>
               <div className="allDetailsMaintain_right">
               {
                              this.state.allUsers.length>0 ?
 
                              <div>
                              <div className="csdd">

                              <div className="pDetailsUserff">Street : </div>  <div className="pDetailsUser1"> &nbsp; {this.state.allUsers[0].address.street}</div>
                          
                          
                                  </div>

                                  <div className="csdd">

<div className="pDetailsUserff">Suite : </div>  <div className="pDetailsUser1"> &nbsp; {this.state.allUsers[0].address.suite}</div>


    </div>

    <div className="csdd">

<div className="pDetailsUserff">City : </div>  <div className="pDetailsUser1"> &nbsp; {this.state.allUsers[0].address.city}</div>


    </div>

    <div className="csdd">

<div className="pDetailsUserff">ZipCode : </div>  <div className="pDetailsUser1"> &nbsp; {this.state.allUsers[0].address.zipcode}</div>


    </div>

                                  

                                  </div>

                              :null
                          }





                          
 

 

          
               </div>

            
               </div>
               
               :<NotImplemented/>  
            }
            </div>
        )
    }
}


 export default withRouter(SpecificUser);