import './App.css';
import data from "./data";
import react, { useState } from 'react';

function MyData({ person }) {
  const [people, setPeople] = useState(person);

  return people.map((person) => {
    const { id } = person

    let id1 = id
    return <div>
      {person.name}
      <p>
        {person.date}
      </p>
      <p>
        <img src={person.url} className="img1" ></img>
      </p>
      <p >
        <button onClick={() => {
          setPeople((oldPeople) => {
            console.log(id1)

            let newPeople = oldPeople.filter((people) => people.id != id1)
            console.log(newPeople)
            return newPeople
          })
        }} className="btn" >Clear</button></p>

    </div >
  })

}



function App() {
  const [person, setPerson] = useState(data);
  return (
    <div className="outer">

      <h1>Birthday Calender</h1>
      <div className="div1">

        <MyData person={person} />

        <button onClick={() => setPerson([])} className="btn" >Clear</button>
      </div>

    </div>
  );
}

export default App;
