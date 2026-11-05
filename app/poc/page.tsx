"use client";

import { useState } from "react";

const tasks = [
  "Sword Control",
  "Physical Endurance",
  "Team Coordination",
] as const;

type Task = (typeof tasks)[number];

export default function PocPage() {
  const [completedTasks, setCompletedTasks] = useState<Set<Task>>(
    () => new Set(),
  );
  const completedCount = tasks.filter((task) =>
    completedTasks.has(task),
  ).length;
  const completionPercentage = Math.round(
    (completedCount / tasks.length) * 100,
  );

  function toggleTask(task: Task) {
    setCompletedTasks((currentTasks) => {
      const nextTasks = new Set(currentTasks);

      if (nextTasks.has(task)) {
        nextTasks.delete(task);
      } else {
        nextTasks.add(task);
      }

      return nextTasks;
    });
  }

  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-6 py-12">
      <h1 className="text-2xl font-semibold">Mission Four: POC</h1>
      <p className="mt-2 text-sm text-gray-600">Task completion progress</p>

      <section aria-label="Task progress" className="mt-8">
        <div className="flex items-center justify-between">
          <p className="font-medium">
            {completedCount} / {tasks.length} tasks completed
          </p>
          <p>{completionPercentage}%</p>
        </div>
        <div
          aria-label="Completion progress"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={completionPercentage}
          className="mt-3 h-2 w-full overflow-hidden rounded bg-gray-200"
          role="progressbar"
        >
          <div
            className="h-full bg-blue-600 transition-[width]"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </section>

      <ul className="mt-8 space-y-3">
        {tasks.map((task) => (
          <li key={task} className="rounded border border-gray-300 px-4 py-3">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                checked={completedTasks.has(task)}
                className="size-4 accent-blue-600"
                onChange={() => toggleTask(task)}
                type="checkbox"
              />
              <span>{task}</span>
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}
