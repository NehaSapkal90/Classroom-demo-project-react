import React from 'react'
import { useState } from 'react'

export default function Formvalidation() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [gender, setGender] = useState('');

    //Error State
    let [nameerr, setNameErr] = useState('');
    let [emailerr, setEmailErr] = useState('');
    let [gendererr, setGenderErr] = useState('');

    let validation = () => {
        let valid = true;//value true means all data is in valid format
        if (name.trim() == '') {
            setNameErr("Please enter name")
            valid = false;
        }
        else {
            setNameErr('');
        }
        if (gender.trim() == '') {
            setGenderErr("Please select gender");
            valid = false;
        } else {
            setGenderErr('');
        }
        if (email.trim() == '') {
            setEmailErr("Please enter email");
            valid = false;

        } else if (!/\S+@\S+\.\S/.test(email)) {
            // Pattern is alway write in / / this format
            // \S means a not include sapce avoid only space
            // + means one or more occurence
            // @ add the @
            // . is always write in the pattern \. this format
            // test is predefined method check the email valid format
            // ! means a false. If the test method return the false then 
            setEmailErr("Please Enter Email in valid  format with @ and .");
            valid=false;

        } else {
            setEmailErr('');
        }
        return valid;
    }
    let handlevalidation = (event) => {

        event.preventDefault();
        if (validation()) {
            alert("You Register Sucessfully");
        }
    }
    return (
        <div>
            <form onSubmit={handlevalidation} >
                Enter name:<input type='text' onChange={(event) => { setName(event.target.value) }}></input><span style={{ "color": "red" }}>{nameerr}</span><br></br>

                Enter Email:<input type='text' onChange={(event) => { setEmail(event.target.value) }}></input><span style={{ "color": "red" }}>{emailerr}</span><br></br>
                Select gender:<select onChange={(event) => { setGender(event.target.value) }}>
                    <option >Select gender</option>
                    <option> Male</option>
                    <option >Female</option>
                </select><span style={{ "color": "red" }}>{gendererr}</span><br></br>
                <input type="submit" value="Register"></input>
            </form>
            <h1>{name}...{email}...{gender}</h1>
        </div>
    )
}
