import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { About } from './Pages/About';
import { Articles } from './Pages/Articles';
import { Home } from './Pages/Home';

export default function App() {
  return (
    <>
      <h1>SSR Example</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}
