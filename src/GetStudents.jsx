import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetStudents() {
    let [students, setStudents]=useState([]);
    useEffect(()=>{
    
        fetchstudent();
    },[])

    let fetchstudent=()=>{
        axios.get("http://localhost:8080/findallstud")
        .then((response)=>{setStudents(response.data);})
        .catch((error)=>{alert(error)})
    }
  return (
    <div>
      <table className='table table-bordered text-light border-danger bg-success'>
        <thead>
            <tr>
                <th>sid</th>
                <th>name</th>
                <th>email</th>
                <th>course</th>
                <th>address</th>
                <th>marks</th>
                <th>contactno</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map((stud)=>
                    <tr>
                        <td>{stud.sid}</td>
                        <td>{stud.name}</td>
                        <td>{stud.email}</td>
                        <td>{stud.course}</td>
                        <td>{stud.address}</td>
                        <td>{stud.marks}</td>
                        <td>{stud.contactno}</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}
