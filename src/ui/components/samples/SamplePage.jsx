import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SampleView from "./SampleView";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TabPane from "../common/TabPane";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  boxStyle : {
    borderBottom: '#8080801f 1px solid',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default function SamplePage() {
  const classes = useStyles();
  return (
    <div style={{marginTop: 80}}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box className={classes.boxStyle}>
            <Typography variant="h5" component="h1">Job: J1H23G3 </Typography>
            <Button variant="contained" color="primary">Create report</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <TabPane/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
