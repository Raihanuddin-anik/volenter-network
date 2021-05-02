
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React, { useContext, useEffect, useState } from 'react';
import Heros from '../Heros/Heros';
import { UserContext } from '../../App';
import { Container } from '@material-ui/core';


const Volenters = () => {
    
    const [heros, setHeros] = useState([])
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    console.log(heros)
    useEffect(() => {
        fetch('https://ancient-sands-98079.herokuapp.com/volenters?Email='+loggedInUser.email,{
          method:'GET',
          headers:{

           'Content-Type' : 'application/json',
           authorization: `Bearer ${sessionStorage.getItem('idToken')}`
          }
        })
            .then(res => res.json())
            .then(data => setHeros(data)
            )
    }, [])
    return (
      <div className="container">
        <div className="row">
     
     {
         heros.map(herodt => <Heros data={herodt} key={herodt._id}></Heros>

         )}

</div>  
      </div>
    );
};

export default Volenters;