import {useEffect, useState} from "react";
import userService from "../../services/userService";

const UserDetails = () => {

    const [user, setUser] = useState([]);
    useEffect(()=>{
        userService.getById(6)
            .then(value => value.data)
            .then(value=> setUser(value))

    },[]);


    return (
        <div>
            {user && user.name}
        </div>
    )
}
export default UserDetails;