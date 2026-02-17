import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ setDataToSend, URL }) => {
  const [data, setData] = useState(null);

  const handlePlay = (song) => {
    setDataToSend({
      name: song.name,
      artist: song.artist_name,
      album: song.album_image,
      url: song.audio,
    });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (URL) {
      getData();
    }
  }, [URL]);

  if (!data) {
    return (
      <div className="card-loader-wrap">
        <span className="loader"></span>
        <span>Loading tracks, this can take a moment.</span>
      </div>
    );
  }

  return (
    <div className="main-card">
      {data.results.map((song) => (
        <div key={song.id} className="card">
          <img src={song.album_image} alt={song.name} />
          <div className="name">
            <h1>{song.name}</h1>
            <h2>{song.artist_name}</h2>
          </div>
          <div className="button">
            <button onClick={() => handlePlay(song)}>
              <i className="fa-solid fa-play"></i> Play Preview
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
