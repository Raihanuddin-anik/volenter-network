import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card } from '@material-ui/core';

const Heros = (props) => {
  
  
    const {Name, Email, Date, Organization, Description, _id} = props.data;

    const deleteProduct = (e,_id) =>{
       
       console.log(e)

        fetch(`https://ancient-sands-98079.herokuapp.com/delete/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result){  
                e.target.parentNode.style.display = "none";
                            
            }
        })
        e.preventDefault()  ;
       
    } 
    return (
        
        <div className="col-md-6">
            <form onSubmit={(e)=>deleteProduct(e,_id)}  >
            <h3  >{Name} </h3>
            <h3 className="fs-5">{Email}</h3>
            <h3 className="fs-5">{Date}</h3>
            <h3 className="fs-5">{Organization}</h3>
            <h3 className="fs-5">{Description}</h3>
             <button variant="contained" color="secondary" type="submit" >Delete</button>
        </form>
        </div>
       
    );
};

export default Heros;      