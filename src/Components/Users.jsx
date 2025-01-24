import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedusers = useLoaderData();
  const [users,setusers] =useState(loadedusers)
  const handleDelete = _id =>{
    console.log("this is the delete user",_id);
    fetch(`http://localhost:5000/users/${_id}`,{
        method:'DELETE',
        // headers:{
        //     'content-type':"application/json",
        // },
        // body:
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount>0 ){
            alert('deleted user successfully')
            const remailnig = users.filter(user=>user._id!==_id)
            setusers(remailnig);
        }
    })

  }
  return (
    <div>
      <h1>Total users are : {users.length}</h1>
      <div>
        {users.map(user => (
          <p key={user._id}>
             {user.name} : {user.email} {user._id} 
             <Link to={`/update/${user._id}`}>
            <button>Update</button>
             </Link>
             <button onClick={()=>handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
