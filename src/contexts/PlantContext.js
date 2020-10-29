import React, { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'

const PlantContext = createContext({ plants: [] });

export const PlantContextProvider = (props) => {
  const [plants, setPlants] = useState([]);

   useEffect(() => {
    const apiKey = process.env.REACT_APP_TREFLE_PLANT_API_KEY;
    console.log(process.env);
    const getPlantData = async () => {
      try {
        const data = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=${apiKey}`
        );
        setPlants(data.data.data);
        console.log(data.data);
      } catch {
        console.log("error");
      }
    };
    getPlantData();
  }, []); 


  return (
    <div>
      <PlantContext.Provider value={{ plants }}>
        {props.children}
      </PlantContext.Provider>
    </div>
  );
};

export const usePlantContext = () => useContext(PlantContext);
