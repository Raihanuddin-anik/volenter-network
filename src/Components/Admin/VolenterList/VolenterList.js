import React from 'react';
import { faTrash, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const VolenterList = ({ volenter }) => {
    const { Name, Email, Date, Organization } = volenter;
    const deleteProduct = (e, _id) => {

        console.log(e)

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
        <div>
            <form onSubmit={(e) => deleteProduct(e, volenter._id)} >

                <td className="pe-3">{Name}</td>
                <td className="pe-3">{Email}</td>
                <td className="pe-3">{Date}</td>
                <td className="pe-3"> {Organization}</td>
               <td><button type="submit" style={{ color: "red" }} icon={faTrash} >delete</button></td>

            </form>
        </div>

    );
};

export default VolenterList;