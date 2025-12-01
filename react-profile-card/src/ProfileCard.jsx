import { useState } from 'react'


export default function ProfileCard({ profiles }) {

const [index, setIndex] = useState(0);

const handleProgress = () => {
  setIndex((prev) => (prev + 1) % profiles.length);
};

const { name, age, bio } = profiles[index];

return(
  <main>
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px'}}>
    
    <h2>{name}</h2>
    <p>【年齢】{age}</p>
    <p>【自己紹介】{bio}</p>
    </div>
    <button onClick={handleProgress}>次のプロフィール</button>
    
  </main>
);
}
