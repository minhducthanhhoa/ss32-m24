import React, { useState } from 'react'

export default function Form() {
    const [name,setName] = useState<String>("");
    const [email,setEmail] = useState<string>("")
     const handleClick = () => {
        console.log("đã gọi hàm");
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log("giá trị người dùng nhập vào",e.target.value);
        // cập nhật state
        setName(e.target.value);
        setEmail(e.target.value);
    }
  return (
    <div>
        {/*
            Các kĩ thuật xử lí trong form
            có 2 kĩ thuật xư lí chính
            1. controller
                - lấy dữ liệu người dùng nhập vào ô input
                - lấy dữ liệu khi người dùng nhập vào ô textarea
                - chọn select option
                ở trong function component  
            2. uncontroller 
         */}
        <div>
            <label htmlFor="">Tên</label>
            <input type="text" onChange={handleChange}/>
            <p>giá trị người dùng nhập: {name}</p>
            <label htmlFor="">email</label>
            <input type="text" onChange={handleChange}/>
            <p>email người dùng nhập: {email}</p>
            <button onClick={handleClick}>Login</button>
        </div>
    </div>
  )
}
