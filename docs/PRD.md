# Asta’s Preparation Dashboard — Product Requirements Document (PRD)

## 1. Product Overview

**Product name:** Asta’s Preparation Dashboard  
**Product type:** Single-page preparation and task-tracking dashboard  
**Technology stack:** Next.js, TypeScript, and Tailwind CSS

Asta is a fictional fighter preparing for a confrontation with Lucifero. His training notes are scattered, making it difficult to see what he needs to complete and how prepared he is.

The dashboard brings his three predefined preparation tasks into one clear view. Asta can mark tasks as complete or incomplete and see his overall preparation progress update immediately.

## 2. User

**Primary user:** Asta, a fictional fighter preparing to face Lucifero.

Asta needs a simple way to:
- See all of his preparation tasks in one place.
- Know which tasks are complete and which still need attention.
- Understand his overall preparation progress at a glance.

This user description is based on the supplied product scenario. No user interviews, surveys, or other user research have been conducted for this PRD.

## 3. Problem Statement

Asta’s training notes are scattered. As a result, he does not have one clear place to review his preparation tasks or understand how much preparation remains.

The dashboard will organize the tasks into a single view and calculate progress from their completion status.

## 4. Product Goal

Create a focused, easy-to-use dashboard that allows Asta to track three predefined preparation tasks and immediately understand his progress toward completing them.

**Success condition for this scope:** The dashboard correctly displays all three tasks, allows each task to be marked complete or incomplete, and keeps the completed count, total count, percentage, and progress bar in sync.

## 5. Core Features

### Feature 1: Predefined Preparation Tasks

The dashboard displays exactly these three tasks:

1. Sword control
2. Physical endurance
3. Team coordination

All tasks start as incomplete when the dashboard is initialized.

Each task should have a clear title and a visible completion control.

### Feature 2: Task Completion Toggles

Asta can mark each task as complete or incomplete using its completion toggle.

- Completing a task updates its status immediately.
- A completed task can be marked incomplete again.
- No Save button or separate confirmation step is required.
- Changing one task must not change the completion status of another task.

### Feature 3: Preparation Progress

The dashboard calculates progress from the task completion states.

It displays:
- The number of completed tasks.
- The total number of tasks.
- The completion percentage.
- A visual progress bar.

The calculation is:

**Preparation progress = (completed tasks ÷ total tasks) × 100**

For the three-task dashboard, progress changes in increments of approximately 33.3 percentage points:
- 0 of 3 completed = 0%
- 1 of 3 completed = 33.3%
- 2 of 3 completed = 66.7%
- 3 of 3 completed = 100%

The displayed count, percentage, and progress bar must always reflect the same task state. The percentage may be rounded to a whole number for display.

## 6. User Stories

- As Asta, I want to see all three preparation tasks together so I know what I need to work on.
- As Asta, I want to mark a task as complete so I can track what I have finished.
- As Asta, I want to undo a completion so I can correct a task’s status.
- As Asta, I want to see how many tasks I have completed out of the total so I can understand my remaining workload.
- As Asta, I want to see a percentage and progress bar so I can understand my overall preparation progress quickly.

## 7. Acceptance Criteria

### Task list
- [ ] The dashboard displays exactly three tasks.
- [ ] The task names are Sword control, Physical endurance, and Team coordination.
- [ ] All three tasks are incomplete when the dashboard is initialized.
- [ ] Each task has an identifiable completion toggle.

### Completion behavior
- [ ] Selecting an incomplete task marks it complete immediately.
- [ ] Selecting a completed task marks it incomplete immediately.
- [ ] A task can be toggled repeatedly without breaking the dashboard.
- [ ] Changing one task does not change the state of the other tasks.
- [ ] No Save button is needed to apply a change.

### Progress display
- [ ] The dashboard displays the completed task count.
- [ ] The dashboard displays the total task count, which is always 3.
- [ ] The dashboard calculates the completion percentage from the current task states.
- [ ] The progress bar visually represents the calculated percentage.
- [ ] Completing or undoing a task updates the count, percentage, and progress bar immediately.
- [ ] With no completed tasks, progress is 0%.
- [ ] With all three tasks completed, progress is 100%.

### Scope and technical constraints
- [ ] The dashboard is implemented as one dashboard view.
- [ ] The application uses Next.js, TypeScript, and Tailwind CSS.
- [ ] No login, database, or external persistence service is required.
- [ ] Refreshing the page may reset all tasks to incomplete.

## 8. Design Requirements

### Visual direction
Use a **dark fantasy theme inspired by Black Clover**, suitable for Asta’s preparation setting.

Suggested visual direction:
- Dark backgrounds to create a focused fantasy atmosphere.
- Gold accents for important highlights and progress indicators.
- Red accents for selected states or secondary emphasis.
- Clear contrast between text, task cards, controls, and the background.
- A strong, readable heading that identifies the dashboard as Asta’s preparation space.

The design should feel thematic without making the information difficult to read.

### Layout and usability
- Present the three tasks together in the main dashboard view.
- Make each task title and completion toggle easy to identify.
- Give the completed/total count and progress visualization a clear, visible position.
- Keep spacing, alignment, and typography consistent.
- Make the dashboard usable on both desktop and mobile screen sizes.
- Provide clear visual feedback for completed and incomplete tasks.
- Do not rely on color alone to communicate completion; use the toggle state and/or a visible text or icon cue as well.

### Interaction
- Task toggles should respond immediately.
- Progress information should update without navigation or page reload.
- Controls should have accessible labels and visible keyboard focus states.

## 9. Assumptions

- The dashboard has one primary user: Asta.
- The three task names are predefined and do not need to be edited.
- Every task has equal weight in the preparation progress calculation.
- The initial state of every task is incomplete.
- Completion state is managed within the dashboard while it is in use.
- State may reset after a page refresh; persistence is not required.
- The dashboard does not need real training data or integration with other systems.
- The Black Clover-inspired direction is a visual reference, not a requirement to reproduce copyrighted artwork or official assets.

## 10. Limitations

- Task completion may not survive a page refresh.
- The dashboard does not store a history of completed tasks.
- The dashboard does not support adding, deleting, or editing tasks.
- Progress represents task completion only; it does not measure Asta’s actual physical ability or combat readiness.
- The dashboard does not synchronize task status between devices or users.

## 11. Out of Scope

The following features are explicitly excluded from this version:

- User registration, login, or authentication.
- Database integration or backend services.
- Persistent storage of task completion.
- Payments or subscriptions.
- Chatbot or AI assistant.
- Combat simulation or battle mechanics.
- Additional routes or separate dashboard pages.
- Creating, editing, or deleting tasks.
- Custom task categories, priorities, deadlines, or reminders.
- Team accounts or multi-user collaboration.
- Analytics, reports, or training history.
- External APIs or integrations.

**Development note:** The `/poc` route was an isolated Proof of Concept used during development to test task completion and progress calculations. It was not part of the final user-facing MVP scope.

## 12. Scope Summary

The first version is limited to one responsive dashboard containing three predefined tasks. Asta can toggle each task between incomplete and complete. The dashboard calculates and displays the completed/total count, percentage, and progress bar from those task states.

No application code, backend, database, authentication, or additional product features are included in this PRD.