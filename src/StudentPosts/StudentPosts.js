import React, { useState, useEffect } from "react";
//Usually in React we are using some parent element to wrap our components like <div>
//We can use React.Fragment to wrap our components without using <div>
//React.Fragment is a component that does not render anything, it is a placeholder
//Shorthand syntax for <React.Fragment> is <></
export const StudentPosts = ({isAdmin}) => {
  const [posts, setPosts] = useState([]);
  // If dependency array is empty, useEffect will run only once
  //if dependency array is not empty, useEffect will run every time the values
  // in dependency array are changing
  //if there is no dependency array, useEffect will run on every render
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
    return () => {
      "Cleanup codes";
    };
  }, []);

  if (!isAdmin) {
    return null;
  }
  return (
    <>
      <h2>What students are thinking</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.slice(0, 10).map(({ index, title, body }) => (
            <tr key={index}>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
