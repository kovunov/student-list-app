import React, { useState } from "react";
import "./StudentList.css";
import { AddStudentForm } from "./AddStudentForm/AddStudentForm";

const studentListForReactProgramming = [
  { name: "Bobby", age: "20", classroom: "Advanced programming" },
  { name: "John", age: "30", classroom: "Advanced programming" },
  { name: "Mary", age: "40", classroom: "Advanced programming" },
];
export const StudentList = () => {
  console.log("Student list rendered");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [classroom, setClassroom] = useState("");

  const [studentList, setStudentList] = useState(studentListForReactProgramming);
  const addStudent = (student) => {
    setStudentList([...studentList, student]);
  };
  return (
    <div className="student-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Classroom</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map(({ name, age, classroom }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{classroom}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddStudentForm
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        classroom={classroom}
        setClassroom={setClassroom}
        addStudent={addStudent}
      />
    </div>
  );
};
