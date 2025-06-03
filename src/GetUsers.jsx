import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function GetUsers() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetchusersdata();
    })

    let fetchusersdata = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>
            <table className='table table-bordered text-light border-danger bg-success'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>username</th>

                    </tr>
                </thead>
                <tbody>{

                    users.map((user) =>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>

        </div>
    )
}
