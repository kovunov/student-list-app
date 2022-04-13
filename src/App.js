import "./App.css";
import React from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { StudentList } from "./StudentList/StudentList";
import { StudentPosts } from "./StudentPosts/StudentPosts";

//React component name should be PascalCase
//react component are functions that return JSX
//React component can be functional or class based
//JSX stands for JavaScript XML
//JSX expressions must have one parent element
//react components can work with data (state and props)
//Let's create two components, login form and student list, as soon as
//users logs in successfully, student list is displayed

//we can pass data as props to a child component, prop is basically a html attribute
//Your state should be as low in the component hierarchy as possible
export function App() {

  return (
    <div className="App">
      <LoginForm/>
      <StudentList/>
      <StudentPosts/>
    </div>
  );
}
