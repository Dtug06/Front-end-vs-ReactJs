import React, { Component } from 'react'
import Children_Comp from './Children_Comp';
interface State{
    name:string;
}
export default class Parent_Comp extends Component<{},State >{
    constructor(props:{}){
        super(props);
        this.state={
            name:"Tuan dep trai Nguyen"
        };
    }
  render() {
    return (
      <div>
        <h2>Họ và tên trong cha :{this.state.name}</h2>
        <Children_Comp name={this.state.name}/>
      </div>
    )
  }
}
