import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    return (
        <div >

            <img className="img w-50" src="https://i.ibb.co/RvFtmYB/Group-1329.png" alt="" />



            <div className="ms-5 p-4">
                <div className="p-2">
                    <FontAwesomeIcon className="me-3" style={{ color: "blueviolet" }} icon={faUserFriends}></FontAwesomeIcon>
                    <small style={{ color: "blueviolet" }}>Volenter Register List</small>
                </div>
                <div className="p-2 ">
                    <FontAwesomeIcon className="me-3" icon={faPlus}></FontAwesomeIcon>
                    <b>Add Event</b>
                </div>
            </div>


        </div>
    );
};

export default SideBar;