import React from "react";
//import axios from "axios";
import PlantCard from "./PlantCard"
//Below is for Design Testing Only 
//import plantdata from "./plants.json"; 
import {Grid, makeStyles} from '@material-ui/core';
import{ usePlantContext} from '../contexts/PlantContext';



const PlantList = () => {
  //const [plants, setPlants] = useState();

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
/*   useEffect(() => {
    setPlants(plantdata.data)
  }, []) */

  const plantData = usePlantContext()

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      padding: 30,
      backgroundColor: '#214e28',
    }
  });

  const classes = useStyles()


  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {plantData.plants &&
          plantData.plants.map((plant) => {
            return (
              <Grid item key={plant.id}>
              <PlantCard
                common_name={plant.common_name}
                family_common_name={plant.family_common_name}
                scientific_name={plant.scientific_name}
                family={plant.family}
                genus={plant.genus}
                img={plant.image_url}
                year={plant.year}
              />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default PlantList;
