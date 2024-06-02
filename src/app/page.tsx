import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Habit Forming!</h1>
      <h2 className="text-2xl pt-10 font-bold">
        This app will help you reach your goals by helping build daily habits
      </h2>
      <h2 className="text-2xl pt-10 font-bold">
        This form uses the smart goal topic. (add a question mark icon here that
        has more info)
      </h2>
      <div className="container">
        <form className="flex flex-col items-end gap-4 pt-8">
          <label htmlFor="goal" className="w-full">
            Goal:
          </label>
          <input
            type="text"
            id="goal"
            name="goal"
            className="w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Enter your goal"
          />
          <label htmlFor="details" className="w-full">
            Goal details:
          </label>
          <input
            type="text"
            id="details"
            name="details"
            className="w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Enter goal details"
          />
          <label htmlFor="tasks1" className="w-full">
            Goal task 1:
          </label>
          <input
            type="text"
            id="tasks1"
            name="tasks1"
            className="w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Enter tasks to get goal"
          />
          <label htmlFor="tasks2" className="w-full">
            Goal task 2:
          </label>
          <input
            type="text"
            id="tasks2"
            name="tasks2"
            className="w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Enter tasks to get goal"
          />
          <label htmlFor="tasks3" className="w-full">
            Goal task 3:
          </label>
          <input
            type="text"
            id="tasks3"
            name="tasks3"
            className="w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Enter tasks to get goal"
          />
          <label htmlFor="realistic" className="w-full">
            Realistic?:
          </label>
          <input
            type="text"
            id="realistic"
            name="realistic"
            className="w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Is this goal realistic?"
          />
          <label htmlFor="reward" className="w-full">
            Goal reward:
          </label>
          <input
            type="text"
            id="reward"
            name="reward"
            className="w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Enter reward for getting goal"
          />
          <label htmlFor="deadline" className="w-full">
            Goal deadline:
          </label>
          <input
            type="text"
            id="deadline"
            name="deadline"
            className="w-full rounded-[5rem] bg-white p-6 h-4"
            placeholder="Enter goal deadline"
          />
          <button
            id="goal-button"
            type="submit"
            className=" mt-6 border-2 border-black text-black bg-white py-2 px-4 rounded-lg cursor-pointer"
          >
            Add Goal
          </button>
        </form>
      </div>
    </main>
  );
}
