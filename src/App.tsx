import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const changeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  }

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={changeName}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value={surname} onChange={changeSurname}/>
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={changeAge}/>
      </div>

      <hr/>

      Olá {name} {surname}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;