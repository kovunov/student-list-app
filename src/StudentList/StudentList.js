import React from "react";
import "./StudentList.css";
import { AddStudentForm } from "./AddStudentForm/AddStudentForm";
import { useSelector } from "react-redux";

//useSelector is a hook that allows us to access the state of the store
//useSelector returns a piece of the state tree
//by useSelector we also subscribe to the updates of the stat
export const StudentList = () => {
  const studentList = useSelector((state) => state.students.list);
  const token = useSelector((state) => state.login.token);
  const error = useSelector((state) => state.login.error);
  if (error) {
    return <div>{error}</div>;
  }
  if (!token || token.length === 0) {
    return <div>Please login to see student list</div>
  }
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
      <AddStudentForm/>
    </div>
  );
};
