import React, { useEffect, useState } from "react";
import "./css-reset.css";
import "./starships.css";
import axios from "axios";

const Header = () => {
  const [bestShip, setBestShip] = useState({});
  const [ships, setShips] = useState([]);

  const getShipData = async () => {
    try {
      const data = await axios.get(`https://cors-anywhere.herokuapp.com/swapi.dev/api/starships`);
      const ships = data.data.results;
      console.log(data);
      const bestShip = ships
      .filter((ship) => {
        return ship.cost_in_credits !== "unknown";
      })
      .reduce((ship1, ship2) => {
        if (parseInt(ship1.cost_in_credits) > parseInt(ship2.cost_in_credits)) {
          return ship1;
        } else {
          return ship2;
        }
      }, ships[0]);
      setBestShip(bestShip);
      setShips(ships);
    } catch {
      return null;
    }
    
  };

  useEffect(() => {
    getShipData();
  }, []);

  return (
    <div className="headerWrapper">
      <h1>Wanna Sweet Ride?</h1>
      <a
        href="https://www.youtube.com/watch?v=Z8lEh2npV7Y"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here for your chance to win a new{" "}
        <strong className="makeStrong">{bestShip.name}</strong>!
      </a>
      <p>Look through our assortment of {ships.length} Ships!</p>
    </div>
  );
};

export default Header;
