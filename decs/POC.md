# Mission Four - Proof of Concept

## 1. Question

Can task completion and the progress summary stay
consistent when tasks are completed, undone,
and toggled repeatedly?

## 2. Approach

A small interactive page was created at `/poc`
using Next.js, TypeScript, and React state.

The experiment includes three tasks:

- Sword Control
- Physical Endurance
- Team Coordination

A single Set stores the IDs of completed tasks.
The completed count and percentage are derived
from this state instead of being stored separately.

## 3. Actual Test Results

The following interactions were tested:

- Initial state: 0 / 3 tasks, 0%.
- Completing one task: 1 / 3 tasks, 33%.
- Undoing completion: 0 / 3 tasks, 0%.
- Completing two tasks: 2 / 3 tasks, 67%.
- Completing all tasks: 3 / 3 tasks, 100%.
- Repeatedly toggling tasks updated the count,
  percentage, and progress bar correctly.

ESLint and the production build passed.
Browser interaction tests also passed.

## 4. Issue or Observation

Using one source of truth for task completion
kept the count, percentage, and progress bar
synchronized, even after repeated toggling.

## 5. Decision

**Continue.**

The core task completion interaction works
as expected. The implementation can be reused
when building the full dashboard MVP.

## 6. Evidence

- `docs/evidence/poc-test.png`