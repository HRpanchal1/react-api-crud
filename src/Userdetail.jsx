import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Userdetail = () => {
    const { userid } = useParams()
    const [userdata, setUserdata] = useState({})

    useEffect(() => {
        fetch("http://localhost:4000/user/" + userid).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setUserdata(resp)
            }).catch((error) => {
                console.log(error.msg);
            })
        })
    }, [])
    return (
        <>
            <h1>Userdetail</h1>
            <div>
                {
                    userdata &&
                    <>
                        <h1>user name = {userdata.name}</h1>
                        <h1>user email = {userdata.email}</h1>
                        <h1>user password  = {userdata.password}</h1>
                    </>
                }
            </div>
        </>
    );
}

export default Userdetail;