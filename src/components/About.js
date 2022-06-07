import React from "react";
import user from "../data/user";
import Links from "./Links";


function About() {

  const showBio = () => {
    if(!user.bio) {
      return null
    }
      else {
        return user.bio
      }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{showBio()}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
