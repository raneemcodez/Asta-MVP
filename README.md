
# Asta's Preparation Dashboard

A responsive training dashboard designed to help Asta organize and track his preparation for the battle against Lucifero.

The project focuses on a simple and clear experience: managing three training tasks and monitoring overall preparation progress through a visual progress indicator.

## About the Project

Asta needs a clear way to organize his training because his preparation notes and tasks are scattered.

This dashboard provides a centralized view of his training plan, helping him understand what needs to be completed and how much of the plan is finished.

**Important:** The progress percentage represents completion of the training plan. It does not represent Asta's probability of defeating Lucifero.

## Features

- Responsive dashboard for desktop and mobile screens.
- Three predefined training tasks:
  - Sword Control
  - Physical Endurance
  - Team Coordination
- Mark tasks as completed or undo completion.
- Automatically updated completed-task count.
- Dynamic progress percentage from 0% to 100%.
- Accessible task controls and progress indicator.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Stitch MCP for design exploration and refinement
- Git and GitHub for version control

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/raneemcodez/Asta-MVP.git
   ```

2. Navigate to the project directory:

   ```bash
   cd asta-mvp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Run the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

### Run Project Checks

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Project Structure

```text
asta-mvp/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── task-data.ts
│   ├── components/
│   │   └── preparation-dashboard.tsx
│   └── poc/
│       └── page.tsx
├── docs/
│   ├── PRD.md
│   ├── DESIGN.md
│   ├── MCP.md
│   ├── POC.md
│   ├── REVIEW.md
│   └── evidence/
├── public/
├── README.md
└── package.json
```

## Progress Logic

The dashboard uses a `Set` of completed task IDs as its single source of truth.

- Completing a task adds its ID to the Set.
- Undoing a task removes its ID.
- The completed task count is derived from the Set size.
- The progress percentage is calculated using:

  `Progress = (Completed Tasks / Total Tasks) × 100`

The result is rounded to the nearest whole number.

The dashboard starts at 0/3, and progress resets when the page is refreshed.

## Limitations

This project is a front-end MVP with a deliberately limited scope.

- No authentication or user accounts.
- No backend or database.
- Task progress is not saved after refreshing the page.
- Tasks are predefined and cannot be added or deleted.
- No notifications or external integrations.

These limitations are intentional and keep the project focused on its core functionality.

## Documentation

Additional project documentation and supporting evidence are available here:

- [Product Requirements Document](docs/PRD.md)
- [Design Decisions](docs/DESIGN.md)
- [MCP Integration and Fallback](docs/MCP.md)
- [Proof of Concept](docs/POC.md)
- [Engineering Review](docs/REVIEW.md)
- [Design Evidence and Screenshots](docs/evidence/)

## Author

**Raneem Mohammad Alrefaie**
