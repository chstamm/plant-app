import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const PlantCard = (props) => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    card: {
      maxWidth: 300,
      maxHeight: 600,
    },
    img: {
      maxHeight: 300,
      
    },
  });

  const classes = useStyles();

  return (
    <div>
        
        <Card className={classes.card}>
          <CardHeader
            title={props.common_name}
            subheader={props.scientific_name}
          />
          <img className={classes.img} src={props.img} alt="plant" />
          <CardContent>
            <h4>{props.genus}</h4>
            <h2>{props.family_common_name}</h2>
            <h3>{props.family}</h3>
            <p>{props.year}</p>
          </CardContent>
        </Card>
    
    </div>
  );
};

export default PlantCard;
