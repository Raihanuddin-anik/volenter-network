import { VolumeDownRounded } from '@material-ui/icons';
import React from 'react';
import VolenterList from '../VolenterList/VolenterList';

const MainPage = ({ data, TogglePage }) => {


   
    return (
        <div className="mt-5" >


            <div style={{ border: '20px solid #f5f6fa', borderRadius: "10px", borderBottom: "80px solid #f5f6fa", }}>
                {TogglePage === false && <div style={{ padding: "20px", borderRadius: "10px" }} >
                    <h4 className="pb-3">Volenter Register List</h4>
                    <table>
                        <tr>
                            <th className="pe-3" >Name</th>
                            <th className="pe-3">Email Id</th>
                            <th className="pe-3">Registered Date</th>
                            <th className="pe-3">Volenter List</th>
                            <th className="pe-3">Action</th>

                        </tr>
                    </table>
                    {(data).map(volenter =>
                        <VolenterList volenter={volenter}></VolenterList>
                    )}





                </div>
                }

                {TogglePage === true &&
                    <from style={{ padding: "20px", borderRadius: "10px" }} >

                        <input
                            id="name"
                            // value={loggedInUser.name}
                            placeholder="Your Name"
                            className="input w-50 m-2"

                        />
                        <br />

                        <input
                            id="name"
                            // value={loggedInUser.name}
                            placeholder=" Organization Name"
                            className="input w-50 m-2"

                        />
                        <br />
                        <input
                            id="name"
                            // value={loggedInUser.name}
                            type='date'
                            placeholder="Date"
                            className="input w-50 m-2"

                        />
                        <br />
                        <input
                            id="name"
                            // value={loggedInUser.name}
                            placeholder=" Why You choose this Organization"
                            className="input w-50 m-2"

                        />


                        <input className="btn btn-primary w-50" type="submit" />


                    </from>}


            </div>


        </div>
    );
};

export default MainPage;