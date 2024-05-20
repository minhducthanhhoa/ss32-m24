import React, {useState} from 'react'

export default function Bai3() {
    const [birthday, setBirthday] = useState<string>("");
    const [displayBirthday, setDisplayBirthday] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        setDisplayBirthday(birthday); 
      };
  return (
    <div>
        <h1>Bài 3</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="birthday">Ngày sinh:</label>
        <input
          type="date"
          id="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
            {displayBirthday && (
            <div>
            <h3>Ngày sinh: {new Date(displayBirthday).toLocaleDateString('vi-VN')}</h3>
            </div>
      )}
    </div>
  )
}
