import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Container, Card, Col, Row } from 'react-bootstrap';

const Heros = (props) => {


    const { Name, Email, Date, Organization, Description, _id } = props.data;

    const deleteProduct = (e, _id) => {

        fetch(`https://ancient-sands-98079.herokuapp.com/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    e.target.parentNode.style.display = "none";

                }
            })
        e.preventDefault();

    }
    return (

        <div className="row">
            <div style={{ border: '2px solid black', marginTop: "20px", margin: "20px", padding: "10px" }} className="col-md-4  m-auto mt-2">
                <form onSubmit={(e) => deleteProduct(e, _id)}  >
                    <h3  >{Name} </h3>
                    <h3 className="fs-5">{Email}</h3>
                    <h3 className="fs-5">{Date}</h3>
                    <h3 className="fs-5">{Organization}</h3>
                    <h3 className="fs-5">{Description}</h3>
                    <Button variant="contained" color="secondary" type="submit" >Delete</Button>
                </form>
            </div>
        </div>
    );
};

export default Heros;      