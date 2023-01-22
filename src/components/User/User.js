const User = ({user,setUserDetails})=>{
    const {id,name} = user;

    return(
      <div>
          <div> Id: {id} </div>
          <div> Name: {name}</div>
          <button onClick={()=>{setUserDetails(user)}}>Details</button>
      </div>
    );
}
export default User;