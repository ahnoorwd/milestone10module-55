import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
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
        }
    })

  }
  return (
    <div>
      <h1>Total users are : {users.length}</h1>
      <div>
        {users.map((user, index) => (
          <p key={user._id}>
            {index + 1}. {user.name} : {user.email} <button onClick={()=>handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
