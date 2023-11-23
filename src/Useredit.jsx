import React from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
    import { useState, useEffect  } from 'react';
    import { useParams } from 'react-router-dom';
    import { useNavigate } from 'react-router-dom';

const Useredit = () => {
    const { userid } = useParams()
    // const [userdata, setUserdata] = useState({})
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:4000/user/" + userid).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setId(resp.id)
                setName(resp.name)
                setEmail(resp.email)
                setPassword(resp.password)
                // setUserdata(resp)
            }).catch((error) => {
                console.log(error.msg);
            })
        })
    }, [])

    function savedata() {
        let data = {id, name, password, email }
        //  console.log(name , password , email);
        fetch("http://localhost:4000/user/" + userid, {
            method: "PUT",
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
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                {/* <form onSubmit={savedata}> */}
                <MDBInput value={id} onChange={(e) => setId(e.target.value)} wrapperClass='mb-4' disabled label='Id' id='form1' type='text' />
                <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='name' id='form2' type='text' />
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='email' id='form3' type='text' />
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form4' type='password' />
                <input type="submit" value="useredit" onClick={savedata} />
                {/* </form> */}
            </MDBContainer>

        </>
    );
}

export default Useredit;