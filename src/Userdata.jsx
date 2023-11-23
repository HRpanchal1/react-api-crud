import React, { useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from 'react';
import { Link ,Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Userdata() {
    const [userdata, setUserdata] = useState(null)

    const navigate = useNavigate()


  

    const Detail =(id)=>{
        navigate("/userdetail/" + id)
    }
    const Edit = (id)=>{
        navigate("/Useredit/" + id)
    }
 
    useEffect(() => {
        fetch("http://localhost:4000/user").then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setUserdata(resp)
            }).catch((error) => {
                console.log(error.msg);
            })
        })
    }, [])


    const Delet = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:4000/user/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    return (

        <>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        {/* <th scope='col'>Id</th> */}
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Password</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td>
                            <Link to="/useradd"> <button>Add user</button></Link>
                        </td>
                    </tr>
                    {
                        userdata &&
                        userdata.map((item) =>
                            <tr>
                                {/* <td>{item.id}</td> */}
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    
                                    <button onClick={()=>{Edit(item.id)}}>Edit</button>
                                    <button onClick={()=>{Delet(item.id)}}>Delet</button>
                                    <button onClick={()=>{Detail(item.id)}}>Detail</button>
                                </td>
                            </tr>
                           
                        )
                    }
                </MDBTableBody>
            </MDBTable>
            <Outlet></Outlet>
        </>
    );
}