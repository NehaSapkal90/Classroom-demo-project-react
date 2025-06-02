import React from 'react'
import { useState } from 'react'

export default function FormExample1() {
    let [name, setName] = useState("Enter Your name");
    let [city, setCity] = useState('');
    let [gender, setGender] = useState('');
    let [Courses, setCourses] = useState([]);
    let handleform = () => {
        alert("Name is " + name + "You select the city as " + city);
        alert("Selected Gender as " + gender)
    }
    let handlegender = (event) => {
        setGender(event.target.value);
    }
    let handlecourses = (event) => {
        let value = event.target.value;
        let checked = event.target.checked;
        if (checked) {
            setCourses([...Courses, value]);
        } else {
            setCourses(Courses.filter((course) => course != value));
        }

    }
    return (
        <div>
            <form onSubmit={handleform}>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input><br></br><br></br>
                Select City:  <select onChange={(event) => { setCity(event.target.value) }}>
                    <option >Select City</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Latur">Latur</option>
                </select>
                <br></br>
                <input type="radio" value="female" name='gender' onChange={handlegender}></input>Female
                <input type="radio" value="male" name="gender" onChange={handlegender}></input>Male


                <br></br>
                select Courses : <input type='checkbox' value="java" onChange={handlecourses}></input>Java
                <input type='checkbox' value="Python" onChange={handlecourses}></input>Python
                <input type="checkbox" value="machine learning " onChange={handlecourses}></input>Machine learning <br></br>
                <input type='submit' value="Register" className='submit'></input>


            </form>
            {
                Courses.map((ele) => 
                  
                    <h1>{ele}</h1>

             )
            }
        </div>
    )
}

