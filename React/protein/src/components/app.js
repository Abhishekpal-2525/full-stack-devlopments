import React, { useEffect, useState } from "react";

function app(){

  const [users,setUsers] = useState([]);

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));

  },[]);

  return(
    <div>
      {users.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default app;