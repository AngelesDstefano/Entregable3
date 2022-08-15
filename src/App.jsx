import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardResident from "./components/CardResident";
import LocationInfo from "./components/LocationInfo";
import img from "./img/27347.jpg"



function App() {
  const [location, setLocation] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let numberLocatio
    if (searchInput === "") {
      numberLocatio = Math.floor(Math.random() * (126 - 1) + 1);
    } else {
      numberLocatio = searchInput;
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocatio}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [searchInput]);

  const handlesubmilt = (e) => {
    e.preventDefault();

    setSearchInput(e.target.search.value);
  };
 
  return (
    <div className="App">
      <img src={img} alt="img" className="card__photo" />
      <h1 className="card__title">Rick and Morty</h1>
      <form onSubmit={handlesubmilt} className='card__comtainer'>
        <input id="search" type="text" className="search"/>
        <button className="btn">Search</button>
      </form>
      <LocationInfo location={location} />
      <div className="container__card">
        {location?.residents.map((url) => (
          <CardResident key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
