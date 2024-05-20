import React, { useState } from 'react'
interface Product{
    productCode:string;
    productName:string;
    price:number;
    quanlity:number;
}

export default function Bai5() {
    const [product, setProduct] = useState<Product>({
        productCode:"",
        productName:"",
        price:0,
        quanlity:0,
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
          }));
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(product);
      };
  return (
    <div>
        <h1>Bài 5</h1>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Mã sản phẩm</label>
        <input
          type="text"
          name="productCode"
          value={product.productCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tên sản phẩm</label>
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Giá</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Số lượng</label>
        <input
          type="number"
          name="quantity"
          value={product.quanlity}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Đăng ký</button>
    </form>
    </div>
  )
}
