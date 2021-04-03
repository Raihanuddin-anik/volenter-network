import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
     alignItems: 'center',
      width: '40%',
      border: '1px solid red',
      margin: '10px',
      padding: '10px'

    },
 
  }));
const Heros = (props) => {
    console.log(props)
    const classes = useStyles();
    const {Name, Email, Date, Organization, Description, _id} = props.data;
    console.log("id",_id)

    const deleteProduct = (event,_id) =>{
        console.log(_id)
        console.log('deleting')
        // fetch(`http://localhost:4000/delete/${_id}`,{
        //     method: 'DELETE'
        // })
        // .then(res => res.json())
        // .then(result =>{
        //     if(result){
              
        //         event.target.parentNode.style.display = "none"
        //     }
        // })
    }
    return (
        <Card className={classes.root} xs={12}>
            <h3 className={classes.paper}>{Name} </h3>
            <h3 className={classes.paper}>{Email}</h3>
            <h3 className={classes.paper}>{Date}</h3>
            <h3 className={classes.paper}>{Organization}</h3>
            <h3 className={classes.paper}>{Description}</h3>
             <Button variant="contained" color="secondary" onClick={deleteProduct`(event,_id)`}>Delete</Button>
        </Card>
    );
};

export default Heros;      