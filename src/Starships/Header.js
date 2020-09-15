import React from 'react';
import starshipData from '../data/starships.json'
import './css-reset.css';
import './starships.css';

const ships = starshipData.results;

const header = () => {

    const bestShip = ships.filter((ship)=>{
            return ship.cost_in_credits !== 'unknown';
        }).reduce((ship1, ship2) => {
            if (parseInt(ship1.cost_in_credits) > parseInt(ship2.cost_in_credits)) {
                return ship1;
            }
            else {
                return ship2;
            }
        }, ships[0])

    return (
        <div className='headerWrapper'>
            <h1>Wanna Sweet Ride?</h1>
            <a href="https://www.youtube.com/watch?v=Z8lEh2npV7Y" target="_blank">Click here for your chance to win a new <strong className="makeStrong">{bestShip.name}</strong>!</a>
            <p>Look through our assortment of {ships.length} Ships!</p>
        </div>
    )
};

export default header; 