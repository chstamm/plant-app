import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css-reset.css";
import "./starships.css";
import { makeStyles } from "@material-ui/core";
import data from '../data/starships.json'
import { 
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
 } from "@material-ui/core";

const myStyles = makeStyles({
  root: {
    maxWidth: 1080,
  },
});

const Starship = () => {
  const [shipData, setShips] = useState(data.results);

  const getShipData = async () => {
    try {
      const data = await axios.get(
        `https://cors-anywhere.herokuapp.com/swapi.dev/api/starships`
      );
      console.log(data);
      setShips(data.data.results);
    } catch {
      return null;
    }
  };

  useEffect(() => {
    getShipData();
  });

  const styles = myStyles();

  return (
    <Grid container space={40}>
      {shipData
        .filter((ship) => {
          return ship.cost_in_credits !== "unknown";
        })
        .sort((ship1, ship2) => {
          return (
            parseInt(ship1.cost_in_credits) - parseInt(ship2.cost_in_credits)
          );
        })
        .map((ship) => {
          const getShipNum = (shipUrl) => {
            let end = shipUrl.lastIndexOf("/");
            let shipID = shipUrl.substring(end - 2, end);
            if (shipID.indexOf("/") !== -1) {
              return shipID.slice(1, 2);
            } else {
              return shipID;
            }
          };

          const shipNum = getShipNum(ship.url);
          return (
            <Grid item xs="6">
            <div className="shipTile" key={ship.url}>
              <div className="imgWrapper">
                <img
                  src={`https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`}
                  onError={(noImg) => {
                    noImg.target.onerror = null;
                    noImg.target.src =
                      "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}
                  alt="starship"
                />
              </div>
              <div className="shipInfo">
                <h3>{ship.name}</h3>
                <p>
                  <strong>{ship.cost_in_credits} credits</strong>
                </p>
                <ul>
                  <li>{ship.model}</li>
                  <li>{ship.manufacturer}</li>
                  <li>{ship.starship_class}</li>
                </ul>
              </div>
            </div>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Starship;
