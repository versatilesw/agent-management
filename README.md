# TypeScript Developer Home Assignment

## Overview
This project is a simple web application that allows an admin to manage a network of agents. The admin can add, update, view, and delete agents efficiently.

## Tech Stack
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Storage**: localStorage for data persistence
- **Language**: TypeScript

## Features
### Must-Have Features (Implemented)
- **List of Agents**: Displays a list of agents with:
  - Name
  - Email
  - Status (Active/Inactive)
  - Last Seen Timestamp
- **Add Agent**: A form to add a new agent with validation for email.
- **Edit Agent**: Allows updating an agent’s details.
- **Delete Agent**: Provides an option to remove an agent from the list.
- **Persistent Storage**: Uses `localStorage` to retain agent data across page reloads.
- **TypeScript**: Ensures strong type safety for props, states, and functions.

## Getting Started
### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/versatilesw/agent-management.git
   cd agent-management
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Run the development server:
   ```sh
   npm run start  # or yarn start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Project Screenshots
Below are some screenshots of the application:

![Agent List](/screenshots/agent-list.png)
![Add Agent](/screenshots/add-agent.png)
![Edit Agent](/screenshots/edit-agent.png)

## Demo Video
A short demo video showcasing the project in action can be found [here](/screenshots/demo.wmv).

## Why These Choices?
- **Next.js**: Provides server-side rendering (SSR) and static site generation (SSG) for improved performance.
- **Tailwind CSS**: Ensures fast and efficient styling with a utility-first approach.
- **React Context**: Lightweight state management without the need for Redux.
- **localStorage**: Simple data persistence for this assignment without requiring a backend.
- **TypeScript**: Enforces type safety and improves code maintainability.

## Future Enhancements
- Implement sorting and filtering for the agent list.
- Add a search functionality for quick lookup.
- Improve UI/UX with animations and better form validation.
- Integrate a backend for real database persistence.

## Conclusion
This project showcases a simple yet effective admin dashboard for managing agents using modern web technologies. It follows best practices in TypeScript, Next.js, and Tailwind CSS while ensuring code maintainability and usability.

---
Developed by **Danny Levons**

