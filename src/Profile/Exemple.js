import React, { Component } from 'react'
import photo from './photos.jpg';
export class Exemple extends Component {
   
   person= {
     fullName: "Oumayma Machraoui",
     imgsrc: photo,
     bio :"Bio: specialiste reseaux",
     profession:"Profession: FullStack developper",
     
   }
   state={
    count : 0
   }
   componentDidMount(){
    this.timer= setInterval(()=>{
      this.setState((prevState)=> ({
        count: prevState.count + 1
      }))
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }
   
  
  render() {
    const {count} = this.state;
    return (
      <div> 
          
          <h1>{this.person.fullName}</h1>
          <img src={this.person.imgsrc} alt='' width={150} height={200}/>
          <p>{this.person.bio}</p>
          <p>{this.person.profession}</p>
          <h3> counter :{count}</h3>
      </div>
    )
  }
}

export default Exemple