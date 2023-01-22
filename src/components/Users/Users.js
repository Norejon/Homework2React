import {useEffect, useState} from "react";
import User from "../User/User";
import userService from "../../services/userService";

const Users = ()=>{

    const [users,setUsers] = useState([]);
    const [userDetails,setUserDetails] = useState(null);

    useEffect(()=>{
        userService.getAll()
            .then(value => value.data)
            .then(users => setUsers([...users]));
    },[]);
    return(
        <div>
            {userDetails && <div><b>Name:</b> {userDetails.name} </div>}
            {userDetails && <div><b>Username:</b> {userDetails.username} </div>}
            {userDetails && <div><b>Email:</b> {userDetails.email} </div>}
            {userDetails && <div><b>Phone:</b> {userDetails.phone} <hr/></div>}
            {users.map(user=> <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
        </div>
    );
}
export default Users;