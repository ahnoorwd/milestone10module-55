
import './App.css'

function App() {
 const handleadduser  = e=>{
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const user = {name,email};
  console.log(user);
  fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{
      'content-type':'application/json',
    },
    body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.insertedId){
      alert('users added successfully');
      form.reset();
    }
  })
 }

  return (
    <>
      
      <h1>Simple crud client server </h1>
     
      <form onSubmit={handleadduser} >
        <input type="text" name='name' placeholder='name' /><br /><p></p>
        <input type="email" name='email' placeholder='email' /><br /><p></p>
        <input type="submit" value='Add user' />
      </form>
    </>
  )
}

export default App
