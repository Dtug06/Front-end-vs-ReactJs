import React, { Component } from 'react'
import Children from './Children';
interface product{
    id:number;
    productName:string;
    price:number;
    quantity:number;
}
export default class Parent extends Component<{},product> {
    constructor(props:{}){
        super(props);
        this.state={
            id:1,
            productName:"Buoi ra roi",
            price:120000,
            quantity:6
        }
    };
   
  render() {
    return (
      <div>
        <Children
        id={this.state.id}
        productName={this.state.productName}
        quantity={this.state.quantity}
        price={this.state.price }/>
      </div>
    )
  }
}
