"use client";

import { useState } from "react";
import { tasks } from "../task-data";

type TaskId = (typeof tasks)[number]["id"];

function TaskIcon({ name }: { name: string }) {
  if (name === "swords") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m5 3 6 6m8-6-6 6M4 20l8-8m8 8-8-8M3 5l4-2 2 2-2 4-4-4Zm18 0-4-2-2 2 2 4 4-4Z" />
      </svg>
    );
  }
  if (name === "training") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m14 4 6 6m-2-8 4 4M3 21l11-11m-2-7 6 6M4 14l6 6" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 10v-2a4 4 0 0 0-3-3.87m-3-11.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function PreparationDashboard() {
  const [completedTasks, setCompletedTasks] = useState<Set<TaskId>>(
    () => new Set(),
  );
  const completedCount = tasks.filter((task) =>
    completedTasks.has(task.id),
  ).length;
  const completionPercentage = Math.round(
    (completedCount / tasks.length) * 100,
  );

  function toggleTask(taskId: TaskId) {
    setCompletedTasks((currentTasks) => {
      const nextTasks = new Set(currentTasks);

      if (nextTasks.has(taskId)) {
        nextTasks.delete(taskId);
      } else {
        nextTasks.add(taskId);
      }

      return nextTasks;
    });
  }

  return (
    <>
      <section className="progress-panel" aria-labelledby="progress-title">
        <div className="progress-heading">
          <div>
            <p className="eyebrow muted desktop-execution-label">
              Codex Execution
            </p>
            <p className="eyebrow muted mobile-routine-label">
              Routine Status
            </p>
            <h2 id="progress-title">Readiness Overview</h2>
          </div>
          <div className="progress-summary">
            <div>
              <span className="eyebrow muted desktop-stat-label">
                Directives Met
              </span>
              <strong>
                {completedCount} of {tasks.length} Tasks Completed
              </strong>
            </div>
            <div className="percentage">
              <span className="eyebrow muted desktop-stat-label">
                Progress
              </span>
              <strong>{completionPercentage}%</strong>
            </div>
          </div>
        </div>
        <div
          aria-label="Task completion"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={completionPercentage}
          className="progress-track"
          role="progressbar"
        >
          <span style={{ width: `${completionPercentage}%` }} />
        </div>
        <p className="progress-note">
          Progress represents completed training tasks, not the probability of
          defeating Lucifero.
        </p>
      </section>

      <section className="tasks-section" aria-labelledby="tasks-title">
        <div className="section-heading">
          <h2 id="tasks-title">Combat Directives</h2>
          <span>3 Core Modules</span>
        </div>
        <ul className="task-grid">
          {tasks.map((task) => {
            const isCompleted = completedTasks.has(task.id);

            return (
              <li
                className={`task-card${isCompleted ? " is-completed" : ""}`}
                key={task.id}
              >
                <div className="task-card-heading">
                  <span className="task-icon">
                    <TaskIcon name={task.icon} />
                  </span>
                  <div className="task-badges">
                    <span className="priority-badge">{task.priority}</span>
                    <span className="task-status">
                      {isCompleted ? "Completed" : "Pending"}
                    </span>
                  </div>
                </div>
                <h3>{task.title}</h3>
                <p className="task-description">{task.description}</p>
                <div className="task-divider" />
                <div className="task-footer">
                  <div className="mobile-task-status">
                    <span>Status:</span>
                    <strong>{isCompleted ? "Completed" : "Pending"}</strong>
                  </div>
                  <button
                    aria-pressed={isCompleted}
                    className="task-control"
                    onClick={() => toggleTask(task.id)}
                    type="button"
                  >
                    <span aria-hidden="true">
                      {isCompleted ? "✓" : "○"}
                    </span>
                    {isCompleted ? "Completed" : "Mark as Complete"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
