import React, { useState } from 'react'

export default function Bai4() {
    const [progress, setProgress] = useState<number>(0);
    const [displayProgress, setdisplayProgress] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setdisplayProgress(`${progress}`);
    }
  return (
    <div>
        <h1>Bài 4</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="progress">Tiến độ hoàn thành: {progress}%</label>
            <input 
                type="range"
                min = "0"
                max = "100"
                onChange={(e) => setProgress(parseInt(e.target.value))}
                style={{width:"300px", display:"block", margin:"10px 0"}}
             />
            <button type="submit">Submit</button>
            {displayProgress && (
                <div>
                    <h3>Tiến độ hoàn thành: {displayProgress}%</h3>
                </div>
            )}
        </form>
    </div>
  )
}
