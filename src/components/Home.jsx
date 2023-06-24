import React from "react";
import { content } from "./content";


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
