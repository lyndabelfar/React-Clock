import { useState, useEffect } from "react";
import dayImg from './images/bg-image-daytime.jpg'
import nightImg from './images/bg-image-nighttime.jpg'



function App() {
  const [quotes, SetQuotes] = useState([])
  const [num, SetNum] = useState(0)





  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  
  let time = hours +':'+ minutes;

  const url= "https://type.fit/api/quotes";


  const fetchData = async ()=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    SetQuotes(data)
    
  }
  const handleRefreshBtn =()=>{
    let newNum = num +1; 
    SetNum(newNum)
  }

  useEffect(()=>{
    fetchData()
  },[num])
  const randomQuoteIndex = Math.round(Math.random()*quotes.length);

  

  return (
    <>
      <img src={4>hours>18?dayImg: nightImg} alt="bg-img" className="bg-img" />
      <div className="container">
        <div className="quote-div">
          <div className="text">
            <div className="quote">{quotes[randomQuoteIndex].text}</div>
            <div className="author">{quotes[randomQuoteIndex].author}</div>
          </div>
          <button className="refresh-btn" onClick={handleRefreshBtn}>Refresh</button>
        </div>

        <div className="greetings">
          {
            4>hours>18?'Good Morning! It is currently':'Good Evening! It is currently'
          }
        </div>
        <h1 className="time">{time}</h1> 
      </div>
      
    </>
  );
}

export default App;
