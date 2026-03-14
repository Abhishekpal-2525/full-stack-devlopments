const users = ["Rahul","Amit","Neha"];

function App(){
  return (
    <ul>
      {users.map((user,index)=>(
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

export default App;