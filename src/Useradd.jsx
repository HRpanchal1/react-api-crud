import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Useradd() {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate(false)

    function savedata() {
        let data = { name, password, email }
        //  console.log(name , password , email);
        fetch("http://localhost:4000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result);
            result.json().then((resp) => {
                console.log(resp);
                navigate("/userdata")
            })
        })
    }
    return (
        <>
            <h1>Add user</h1>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                {/* <form onSubmit={savedata}> */}
                    <MDBInput  autocomplete="off" value={id} onChange={(e) => setId(e.target.value)} wrapperClass='mb-4' disabled label='Id' id='form1' type='text' />
                    <MDBInput  autocomplete="off" value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='name' id='form2' type='text' />
                    <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='email' id='form3' type='text' />
                    <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form4' type='password' />
                    <input type="submit" value="useradd" onClick={savedata} />
                {/* </form> */}

            </MDBContainer>
        </>
    );
}

export default Useradd;