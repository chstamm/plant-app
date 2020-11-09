import React, { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'
//Below is for Design Testing Only 
//import plantdata from "/Users/chelseastamm/Sites/React/Plants/plant-app/src/Components/plants.json"
const PlantContext = createContext({ plants: [] });

 export const PlantContextProvider = (props) => {
  const [plants, setPlants] = useState([]);

   useEffect(() => {
    const apiKey = process.env.REACT_APP_TREFLE_PLANT_API_KEY;
    const getPlantData = async () => {
      try {
        const data = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=${apiKey}`
        );
        setPlants(data.data.data);
      } catch {
        console.log("error");
      }
    };
    getPlantData();
  }, []); 
  
  //Below is for Design Testing Only 
/* useEffect(() => {
    setPlants(plantdata.data)
  }, []) */

  return (
    <div>
      <PlantContext.Provider value={{ plants }}>
        {props.children}
      </PlantContext.Provider>
    </div>
  );
};

export const usePlantContext = () => useContext(PlantContext);
