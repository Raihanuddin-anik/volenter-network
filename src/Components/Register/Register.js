import React, { useContext, useEffect, useState } from 'react';
import './Register.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';





const Register = () => {
    const Id = useParams();
    console.log(Id)
    const id = Id.id
    const [selectedDt, setSelectedData] = useState({});
    console.log(selectedDt)
    const [loggedInUser, setloggedInUser] = useContext(UserContext);


    useEffect(() => {

        fetch('https://ancient-sands-98079.herokuapp.com/products')
            .then(res => res.json())
            .then(result => {
                const IdData = result.find(rs => rs.id == id)
                console.log(IdData)
                setSelectedData(IdData)

            })
    }, [])
    const handleSubmit = (e) => {
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;
        const organization = document.getElementById('Organization').value;

        const VNInfo = {
            Name: name,
            Email: email,
            Date: date,
            Description: description,
            Organization: organization
        }

        fetch('https://ancient-sands-98079.herokuapp.com/addVolenter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(VNInfo)
        })
            .then(res => res.json())
            .then(result => {

            })
          
        alert("Registation Completed Successfully")
        

    }
    return (

        <div className='d-flex ' >
               
            <div className='m-auto' style={{ width: '400px' }}>
            <img src="https://i.ibb.co/RvFtmYB/Group-1329.png" alt="" />

                 
                    <h2>Register as a Volenter</h2>
                 
                    <br/>
                    <input
                        id="name"
                        value={loggedInUser.name}
                        placeholder="Full Name"
                        className="input w-100"

                    />
                    <br />
                    <input
                        id="email"
                        placeholder="UserName or Email"
                        value={loggedInUser.email}
                        className="input w-100"

                    />
                    <br />
                    <input
                        id="date"
                        placeholder="Date"
                        className="input w-100"

                    />
                    <br />
                    <input
                        id="description"
                        placeholder="Description"
                        className="input w-100"

                    />
                    <br />
                    <input
                        id="Organization"
                        placeholder="Organization You booked at"
                        value={selectedDt.caption}
                        className="input w-100"

                    />
                
                <br />
                
                    <Link className="btn btn-primary w-100 mt-3" onClick={handleSubmit} to="/volenters"> Register
                     </Link>
                

            </div>
        </div>
    );
};

export default Register;