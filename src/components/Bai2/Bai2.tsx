import React, { useState } from 'react'

export default function Bai2() {
    const [color,setColor] = useState<string>("#000000");
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    }
  return (
    <div>
        <h1>Bài 2</h1>
        
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Màu sắc</label>
                <input 
                    type="color"
                    onChange={(e) => setColor(e.target.value)}
                    style={{width:"100px"}}
                />
                <button type="submit">Submit</button>
            </form>
            <div style={{marginTop:"20px"}}>
                <h3>Color: {color}</h3>
            </div>
        
    </div>
  )
}
