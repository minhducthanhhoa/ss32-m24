import React, { useState } from 'react'

export default function Bai1() {
    const [email,setEmail] = useState<string>("");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({email});
    }
  return (
    <div>
        <h1>Bài 1</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
             />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
