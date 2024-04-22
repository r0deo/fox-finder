import React from 'react'
import {useState} from 'react'

 
function App() {
    
  const [likes, setLikes] = useState(0)
   
  const [image, setImage] = useState("https://randomfox.ca/images/41.jpg")
  
  function handleClick(){
    setLikes((likes) => likes + 1)
  }
  //fetching the data 
  function handleNewFoxClick() {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then(({ image }) => {
        setImage(image)
        setLikes(0)
      })
  }
  
  return (
    <div>
      <h1>🦊 FoxFindr 🦊</h1>
      <div className="buttons">
          <button onClick={handleNewFoxClick}>New 🦊 Please</button>
          <button onClick={handleClick}>Likes: {likes}</button>
      </div>
      <img src={image} alt="Random Fox" />
    </div>
  );
}

export default App
