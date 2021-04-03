import React, { useContext, useEffect, useState } from 'react';
import './Register.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';





const Register = () => {
    const Id = useParams();
    const id = Id.id
    const [selectedDt, setSelectedData] = useState({});
    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    useEffect(() => {

        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(result => {
                const IdData = result.find(rs => rs.id == id)
                setSelectedData(IdData)

            })
    }, [id])
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
       
        fetch('http://localhost:4000/addVolenter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(VNInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log( 'data', result)
            })

        e.preventDefault()
    }
    return (

        <div className='div1-area'>

            <form className='form1-area' onSubmit={handleSubmit} >
                <img src="https://i.ibb.co/RvFtmYB/Group-1329.png" alt="" />
                <h2>Register as a Volenter</h2>
                <TextField
                    id="name"
                    value={loggedInUser.name}
                    placeholder="Full Name"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="email"
                    placeholder="UserName or Email"
                    value={loggedInUser.email}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="date"
                    placeholder="Date"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="description"
                    placeholder="Description"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="Organization"
                    placeholder="Organization You booked at"
                    value={selectedDt.caption}
                    fullWidth
                    margin="normal"
                />
              <Link to='/volenters'>  <Button type="submit" className="button" variant="contained" color="primary" fullWidth>
                    Register
                     </Button></Link>

            </form>




        </div>
    );
};

export default Register;