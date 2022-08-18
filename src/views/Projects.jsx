import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
      <button><Link to="/projects/projectsgames">See Games</Link></button>
      <button><Link to="/projects/projectsapps">See Apps</Link></button>
      <Outlet />
    </div>
  )
}
