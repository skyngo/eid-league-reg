import React, { useState, useEffect } from 'react';
import axios from 'axios'
  
  
const List = () => {
    const [userData, setUSerData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
  
    const fetchData = async () => {
        try {
            const result = await axios("http://localhost:3001/players");
            //console.log(result.data);
            setUSerData(result.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }
  
    return(
        <div className="container">
        <h3>Registered Players</h3>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Team Name</th>
                    <th>IGL Name</th>
                    <th>Viber Number</th>
                    <th>Email</th>
                    <th>NID</th>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{user.team_name} </td>
                                <td>{user.f_name} </td>
                                <td>{user.viber_number} </td>
                                <td>{user.email} </td>
                                <td>{user.nid} </td>
                            </tr>
                        )
                    })
                }
  
            </tbody>
        </table>
        </div>
    );
};
  
export default List;