# Taskit

<img src="/public/image.png" alt="Taskit Screenshot"  />

Taskit is a simple and elegant to-do list application built with React. It allows users to manage their daily tasks efficiently with features like adding, editing, deleting, and marking tasks as completed.

## Features

-   **Add Tasks**: Add new tasks with ease. Tasks are saved locally for persistence.
-   **Edit Tasks**: Modify existing tasks to reflect any changes.
-   **Delete Tasks**: Remove unwanted tasks from the list.
-   **Mark as Completed**: Mark tasks as finished to keep track of progress.
-   **Show/Hide Completed Tasks**: Filter tasks to focus only on pending ones or view all.

## Demo

You can try the live version of Taskit [here](#) (Add link once deployed).

## Tech Stack

-   **React**: Frontend library
-   **CSS**: Styling
-   **UUID**: For generating unique task IDs
-   **LocalStorage**: To persist tasks across browser sessions

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or later)
-   npm or yarn (comes with Node.js)

### Installation

1.  **Clone the repository**:
    
    ```bash
    git clone https://github.com/your-username/Taskit.git
    cd Taskit
    ```
    
2.  **Install dependencies**:
    
    ```bash
    npm install
    ```
    
3.  **Start the development server**:
    
    ```bash
    npm start
    ```
    
4.  Open your browser and navigate to `http://localhost:3000`.

## Usage

-   **Adding a Task**: Enter a task name in the input field and click **Add** or press `Enter` (if the task name is longer than 3 characters).
-   **Editing a Task**: Click the **Edit** button next to a task, make changes, and click **Update** to save.
-   **Deleting a Task**: Click the **Delete** button next to a task.
-   **Marking a Task as Completed**: Check the box next to a task to mark it as finished.
-   **Filtering Tasks**: Use the **Show Finished** checkbox to toggle between showing all tasks and only incomplete ones.

## Project Structure

```php
Taskit/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.js    # Navigation bar
│   ├── App.css          # Styles for the app
│   ├── App.js           # Main component
│   └── index.js         # Entry point
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Deployment

To deploy the project, follow these steps:

1.  **Build the app**:
    
    ```bash
    npm run build
    ```
    
2.  Use any static site hosting service like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [GitHub Pages](https://pages.github.com/) to deploy the `build` folder.

## Future Improvements

-   Add categories or tags for better task organization.
-   Implement user authentication for a personalized experience.
-   Add a due date feature with reminders.
-   Sync tasks to a backend database for multi-device support.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

-   Inspiration from simple and minimalistic to-do list apps.
-   Built with ❤️ using React.
