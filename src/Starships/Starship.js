import React, { Component } from 'react';
import starshipData from '../data/starships.json';
import './css-reset.css';
import './starships.css';

const ships = starshipData.results;

class starship extends Component {
  render() {
    return (
      <div className="shipsWrapper">

        {


          ships.filter((ship)=> {
            return ship.cost_in_credits !== 'unknown';
          }).sort((ship1, ship2) => {
            return parseInt(ship1.cost_in_credits) - parseInt(ship2.cost_in_credits);
          }).map((ship) => {
            const getShipNum = (shipUrl) => {
              let end = shipUrl.lastIndexOf('/')
              let shipID = shipUrl.substring(end - 2, end)
              if (shipID.indexOf('/') !== -1) {
                return shipID.slice(1, 2)
              } else {
                return shipID
              }
            }

            const shipNum = getShipNum(ship.url);
            return (
              <div className="shipTile" key={ship.url}>
                <div className="imgWrapper">
                  <img src={`https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`} onError={(noImg) => { noImg.target.onerror = null; noImg.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg" }} alt='starship' />
                </div>
                <div className="shipInfo">
                  <h3>
                    {ship.name}
                  </h3>
                  <p><strong>{ship.cost_in_credits} credits</strong></p>
                  <ul>
                    <li>{ship.model}</li>
                    <li>{ship.manufacturer}</li>
                    <li>{ship.starship_class}</li>
                  </ul>
                </div>
              </div>
            )

          })
        }
      </div>
    );
  }
}

export default starship;