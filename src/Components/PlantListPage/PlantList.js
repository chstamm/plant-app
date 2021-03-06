import React from "react";
import PlantCard from "./PlantCard";
import Drawer from "./Drawer";
import { Grid, makeStyles } from "@material-ui/core";
import { usePlantContext } from "../../contexts/PlantContext";

const PlantList = () => {
  const plantData = usePlantContext();

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      padding: 30,
    },
    grid: {
      display: "flex",
      justifyContent: "center",
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {plantData.plants &&
          plantData.plants.map((plant) => {
            return (
              <div>
                <Drawer></Drawer>
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
              </div>
            );
          })}
      </Grid>
    </div>
  );
};

export default PlantList;
