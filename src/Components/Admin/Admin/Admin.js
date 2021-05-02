import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import MainPage from '../MainPage/MainPage';
import SideBar from '../SideBar/SideBar';

const Admin = () => {

    const [volenters, setVolenters] = useState([]);

    useEffect(() => {
        fetch("https://ancient-sands-98079.herokuapp.com/allVolenters")
            .then(res => res.json())
            .then(data => {
                setVolenters(data)
            })
    }, [volenters._id])

    return (
       
            <div className="row">

                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <MainPage data={volenters}></MainPage>
                </div>
            </div>
      
    );
};

export default Admin;