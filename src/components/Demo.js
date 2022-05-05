//javascript

import React, { useState, useEffect } from "react";

function Demo() {
  //usestate,useEffect
  //components => 1) functional component 2)class Component
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [roll, setRoll] = useState(0);
  const [nam, setNam] = useState("");
  function handleSubmit() {
    setName(input);
  }
  useEffect(() => {
    alert("hello world");
  });

  const [studentData, setStudentData] = useState([
    {
      rollNo: 1,
      name: "abc",
    },
    {
      rollNo: 2,
      name: "xyz",
    },
    {
      rollNo: 3,
      name: "jugal",
    },
    {
      rollNo: 4,
      name: "sanket",
    },
  ]);
  //console.log(studentData);
  function saveData() {
    setStudentData([...studentData, { rollNo: roll, name: nam }]);
    setNam("");
    setRoll("");
  }

  return (
    <>
      <div className="container">
        <h1>{name}</h1>
        <h1>{input}</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>

        <input
          type="number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
        <input
          type="text"
          value={nam}
          onChange={(e) => setNam(e.target.value)}
        />
        <button onClick={saveData}>save student</button>

        <div className="student-data">
          {studentData.map((currentStudent) => {
            return (
              <h1>
                {currentStudent.rollNo} {currentStudent.name}
              </h1>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Demo;
