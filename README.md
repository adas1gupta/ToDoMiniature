# ToDoMiniature - README

## Introduction

ToDoMiniature is a simple and responsive task management web application built using modern frontend technologies. It allows users to create, edit, and delete tasks with ease.

---

## Features

- Add tasks with titles and descriptions.
- Edit tasks seamlessly in a modal interface.
- Delete tasks with a single click.
- Responsive design for a clean user experience.

---

## Technologies Used

- **React**: For building dynamic and reusable UI components.
- **Vite**: As the build tool and development server.
- **CSS**: For styling the application (with a focus on responsiveness).
- **Prettier**: For code formatting.
- **ESLint**: For linting the codebase.
- **JavaScript (ES6+ features)**: As the primary programming language.

---

## Prerequisites

Before running the project, ensure you have the following installed:

1. **Node.js** (version 14+ recommended)
2. **npm** or **yarn** for dependency management

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd ToDoMiniature
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

2. Build for production:
   ```bash
   npm run build
   ```

3. Preview the production build:
   ```bash
   npm run preview
   ```

---

## Project Structure

- **index.html**: The entry HTML file for the application.
- **src/**: Contains all the React components and CSS.
  - `App.jsx`: The main component managing state and rendering other components.
  - `ToDo.jsx`, `ToDoList.jsx`, `InputForm.jsx`: Task management components.
  - `TaskTitle.jsx`, `TaskDescription.jsx`: Input components for tasks.
  - `Edit.jsx`, `Delete.jsx`: Functional components for editing and deleting tasks.
- **global.css**: Global styling for the application.
- **vite.config.js**: Configuration for Vite.
- **eslint.config.mjs**: Configuration for ESLint.

---

## License

This project is licensed under the ISC license.

---

Feel free to reach out for any questions or contributions! 😊