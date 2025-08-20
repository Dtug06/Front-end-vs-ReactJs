import React, { Component } from 'react'
interface props{
    id:number;
    productName:string;
    price:number;
    quantity:number;
}
export default class Children extends Component<props> {
  render() {
    return (
       <div>
        <p>ID: {this.props.id}</p>
        <p>Name: {this.props.productName}</p>
        <p>Price: {this.props.price}</p>
        <p>Quantity: {this.props.quantity}</p>
      </div>
    )
  }
}
