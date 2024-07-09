import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.jamendo.com/v3.0/tracks?client_id=8428cdd9&format=json"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-card">
      {data.results.map((song) => (
        <div key={song.id} className="card">
          <div className="name">
            <h1>{song.name}</h1>
            <h2>{song.artist_name}</h2>
            <img src={song.album_image} alt={song.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
