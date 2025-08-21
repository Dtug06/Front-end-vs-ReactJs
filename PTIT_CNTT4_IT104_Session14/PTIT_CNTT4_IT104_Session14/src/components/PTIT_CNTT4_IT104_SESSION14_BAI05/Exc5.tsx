import React, { Component, ChangeEvent, FormEvent } from 'react'

interface Product {
  price: number;
  productCode: string;
  productName: string;
  quantity: number;
}

export default class Exc1 extends Component<{}, Product> {
  constructor(props: {}) {
    super(props);
    this.state = {
      price: 0,
      productCode: "",
      productName: "",
      quantity: 0
    }
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  this.setState({
    ...this.state,
    [name]: value
  });
}

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(this.state); 
  }
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Thêm mới sản phẩm</h2>

          <label>Mã sản phẩm</label>
          <input
            type="text"
            name="productCode"
            placeholder="SP001"
            value={this.state.productCode}
            onChange={this.handleChange}
          />
          <label>Tên sản phẩm</label>
          <input
            type="text"
            name="productName"
            placeholder="Cam da xanh"
            value={this.state.productName}
            onChange={this.handleChange}
          />
          <label>Giá</label>
          <input
            type="number"
            name="price"
            placeholder="20000"
            value={this.state.price || ""}
            onChange={this.handleChange}
          />
          <label>Số lượng</label>
          <input
            type="number"
            name="quantity"
            placeholder="10"
            value={this.state.quantity || ""}
            onChange={this.handleChange}
          />
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    )
  }
}
