import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    maxHeight: 600,
  },
  img: {
    maxHeight: 600,
  }
});

const PlantCard = (props) => {
  const classes = useStyles();

  return (
   
    <Card className={classes.card}>
      <CardHeader title={props.common_name} subheader={props.scientific_name} />
      <img className={classes.img} src={props.img} alt="plant" />
      <CardContent>
        <h4>{props.genus}</h4>
        <h2>{props.family_common_name}</h2>
        <h3>{props.family}</h3>
        <p>{props.year}</p>
      </CardContent>
    </Card>
    
  );
};

export default PlantCard;
