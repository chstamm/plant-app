import React, { useEffect, useState } from "react";
//import axios from "axios";

//Below is for Design Testing Only 
import plantdata from "./plants.json"; 
import PlantCard from "./PlantCard";

const PlantList = () => {
  const [plants, setPlants] = useState();

/*   useEffect(() => {
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
  }, []); */

  //Below is for Design Testing Only 
  useEffect(() => {
    setPlants(plantdata.data)
  }, [])




  return (
    <div>
      <div>
        {plants &&
          plants.map((plant) => {
            return (
              <PlantCard
                key={plant.id}
                common_name={plant.common_name}
                family_common_name={plant.family_common_name}
                scientific_name={plant.scientific_name}
                family={plant.family}
                genus={plant.genus}
                img={plant.image_url}
                year={plant.year}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PlantList;
