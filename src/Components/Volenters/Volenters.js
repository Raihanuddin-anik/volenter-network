
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React, { useContext, useEffect, useState } from 'react';
import Heros from '../Heros/Heros';
import { UserContext } from '../../App';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: '10px'
      
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const Volenters = () => {
    const classes = useStyles();
    const [heros, setHeros] = useState([])
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    console.log(heros)
    useEffect(() => {
        fetch('http://localhost:4000/volenters?Email='+loggedInUser.email,{
          method:'GET',
          headers:{

           'Content-Type' : 'application/json',
           authorization: `Bearer ${sessionStorage.getItem('idToken')}`
          }
        })
            .then(res => res.json())
            .then(data => {setHeros(data)}
            )
    }, [])
    return (
      <Container className={classes.root}>
        <Grid  container>
            
                {
                    heros.map(herodt => <Heros data={herodt} key={herodt._id}></Heros>

                    )}
            
        </Grid>
        </Container>  
    );
};

export default Volenters;