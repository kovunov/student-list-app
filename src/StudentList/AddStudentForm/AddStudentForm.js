import React from "react";

export const AddStudentForm = ({
  name,
  setName,
  age,
  setAge,
  classroom,
  setClassroom,
  addStudent,
}) => {
  return (
    <div>
      <h1>Add Student Form</h1>
      <label>Name: </label>
      <input type="text" value={name}  onChange={(e) => setName(e.target.value)}></input>
      <label>Age: </label>
      <input type="number" value={age}  onChange={(e) => setAge(e.target.value)}></input>
      <label>Classroom: </label>
      <input type="text" value={classroom}  onChange={(e) => setClassroom(e.target.value)}></input>
      <button
        onClick={() =>
          addStudent({ name: name, age: age, classroom: classroom })
        }
      >
        Add Student
      </button>
    </div>
  );
};
