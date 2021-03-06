import React from 'react';
import { useEffect, useState } from 'react';
import DataDetails from '../DataDetails/DataDetails';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    paddingTop: '50px'

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const MainPage = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  console.log(data)


  useEffect(() => {

    fetch('https://ancient-sands-98079.herokuapp.com/products')
      .then(res => res.json())
      .then(result => {
        setData(result)
      })
  }, [])





  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        {data.length == 0 && <div class="spinner-border m-auto" role="status">
          <span class="sr-only"></span>
        </div>}
        {data.map(dt =>
          <DataDetails data={dt} key={dt.id}></DataDetails>
        )}
      </Grid>
    </Container>
  );
};

export default MainPage;