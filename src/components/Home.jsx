import React from "react";
const content=['constant function expressions','arrow functions',' React: functional components',
              'React Hooks','CSS-Conditional styling','Framer motion']


export const Home = () => {
  return (
    <div className="home">
      <h1>Overview</h1>
      <p>In this exercise, the code is implemeting with :</p>
      <ul>
        {content.map((txt, i) => (
          <li key={i}>
            <i className="fa-solid fa-check "></i>&nbsp;{txt}
          </li>
        ))}
      </ul>
    </div>
  );
};
