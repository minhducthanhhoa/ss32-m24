import React, { useState } from 'react'
import "./Bai6.css";
interface User {
    userName: string;
    email: string;
    password: string;
    rePassword: string;
  }

export default function Bai6() {
    const [user,setUser] = useState<User>({
        userName: '',
        email: '',
        password: '',
        rePassword: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(user);
      };
  return (
    <div>
        <h1>Bài 6</h1>
        <form onSubmit={handleSubmit} className="add-account-form">
      <h2>Thêm mới tài khoản</h2>
      <div>
        <label>Họ và tên</label>
        <input
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Mật khẩu</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Nhập lại mật khẩu</label>
        <input
          type="password"
          name="rePassword"
          value={user.rePassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Đăng ký</button>
    </form>
    </div>
  )
}
