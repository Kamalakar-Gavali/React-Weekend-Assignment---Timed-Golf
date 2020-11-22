import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0,startClick:false };
  }
  componentDidMount() {
    

  }
  addKeyDownListner=((e)=>{
    console.log(e.keyCode);
    let x,y;
    if(e.keyCode==39)
    {
      x=this.state.x+5;
      this.setState({x})        
    }
    if(e.keyCode==37)
    {
      x=this.state.x-5;
      this.setState({x})        
    }
    if(e.keyCode==38)
    {
      y=this.state.y-5;
      this.setState({y})        
    }
    if(e.keyCode==40)
    {
      y=this.state.y+5;
      this.setState({y})        
    }

  })   
    setMoveBall=()=>
    {
      console.log("Added keyDown Listner"); 
      this.setState({x:0,y:0,time:0});
      this. timeInterval=setInterval(()=>{this.setState({time:this.state.time+1})},1*1000)
      document.addEventListener('keydown',this.addKeyDownListner);    
    }


  componentDidUpdate()
  {
    console.log(this.state.x+" "+this.state.y);
    if(this.state.x===250 && this.state.y===250)    
    {
      clearInterval(this.timeInterval);
      document.removeEventListener('keydown',this.addKeyDownListner);
      // this.setState({x:0,y:0,time:0});
    }
  }

  componentWillUnmount() {

  }



  render() {
    return (
      
 <>
 <div className="ball" style={{top:this.state.y+"px",left:this.state.x+"px"}}></div>
 <button className="start" onClick={this.setMoveBall} style={{position:"relative",left:"250px",top:"50px"}}>Start</button> 
 <div className="hole"></div>
 <div className="heading-timer">{this.state.time}</div>
 
</>
    );
  }
}

export default Timer;
