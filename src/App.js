import './App.css';
import { useState, useEffect } from "react";
import { MarsGallery } from "./MarsGallery";
import { NasaAPIConnection } from "./DataConnection";
import Snowfall from "react-snowfall";


function App() {
  const [year, setYear] = useState(2010);
  const [pics, setPics] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      let returnedPics = await NasaAPIConnection(year);
      setPics(returnedPics.photos);
      console.log(returnedPics.photos);
    }, 1000);

    return () => clearInterval(timer);
  }, [year])

  return (
    <div className="App">
      <h1>Christmas on Mars at..</h1>
      <input aria-label='date'
        type="range"
        min="2008" max="2021"
        value={year}
        onChange={(e) => { setYear(e.target.value); }}
      />
      <div>{year}</div>
      <MarsGallery images={pics} />
      <Snowfall />
    </div>
  );
}

export default App;
