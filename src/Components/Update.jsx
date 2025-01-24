import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadeduser = useLoaderData();
    const handleUpdate =e=>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const email= form.email.value;
        const userupdate= {name,email};
        console.log(userupdate);
        fetch(`http://localhost:5000/users/${loadeduser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(userupdate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert(`Updated successfully`)
            }
        })
    }
    return (
        <div>
            <h3>This is the information of {loadeduser.name}</h3>
            <p></p>
            <form onSubmit={handleUpdate}>
             
             <input type="text" name="name" defaultValue={loadeduser.name} /><br /><p></p>
             <input type="email" name="email"  defaultValue={loadeduser.email} /><br /><p></p>
             <input type="submit" value={`Submit Update`} />

            </form>
        </div>
    );
};

export default Update;