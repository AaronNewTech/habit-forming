import NavBar from "@/app/navbar/page";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <NavBar></NavBar>
      <h1 className="text-4xl font-bold">Signup</h1>
      <h2 className="text-1xl pt-10 font-bold">
        Signup to track your goals and habits
      </h2>
      <h2 className="text-1xl pt-10 font-bold"></h2>
      <div className="container">
        <form className="flex flex-col items-end gap-4 pt-8">
          <label htmlFor="goal" className="w-full">
            Name:
          </label>
          <input
            type="text"
            id="goal"
            name="goal"
            className="text-black w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Enter your full name"
          />
          <label htmlFor="details" className="w-full">
            Email:
          </label>
          <input
            type="text"
            id="details"
            name="details"
            className="text-black w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Enter your email"
          />
          <label htmlFor="tasks1" className="w-full">
            Password:
          </label>
          <input
            type="text"
            id="tasks1"
            name="tasks1"
            className="text-black w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Enter a password"
          />

          <button
            id="goal-button"
            type="submit"
            className=" mt-6 border-2 border-black text-black bg-white py-2 px-4 rounded-lg cursor-pointer"
          >
            Signup
          </button>
        </form>
      </div>
    </main>
  );
};

export default page;
