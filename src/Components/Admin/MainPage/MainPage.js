import { faTrash, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MainPage = ({ data }) => {
    console.log(data)
    return (
        <div  >
            <h4 className="pb-3">Volenter Register List</h4>
            <div style={{ border: '20px solid #f5f6fa', borderRadius: "10px",  borderBottom: "80px solid #f5f6fa", }}>
                <div style={{ padding: "20px", borderRadius: "10px" }} >
                    <table>
                        <tr>
                            <th className="pe-3" >Name</th>
                            <th className="pe-3">Email Id</th>
                            <th className="pe-3">Registered Date</th>
                            <th className="pe-3">Volenter List</th>
                            <th className="pe-3">Action</th>

                        </tr>
                        {(data).map(volenter =>

                            <tr>
                                <td className="pe-3">{volenter.Name}</td>
                                <td className="pe-3">{volenter.Email}</td>
                                <td className="pe-3">{volenter.Date}</td>
                                <td className="pe-3"> {volenter.Organization}</td>
                                <td className="pe-3"><FontAwesomeIcon style={{ color: "red" }} icon={faTrash}></FontAwesomeIcon></td>
                            </tr>
                        )}




                    </table>
                </div>
            </div>

        </div>
    );
};

export default MainPage;