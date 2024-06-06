import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center mb-8 mt-2">
      <h1 p-8 className="text-1xl font-bold mr-8 ">
        Habit Forming!
      </h1>
      <ul className="flex gap-8">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
      </ul>
    </nav>
  );
}
