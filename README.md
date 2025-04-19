# ✅ React Todo App with API

A powerful and modern Todo application built with React and TypeScript.
It supports full CRUD operations via API, authorization, and seamless user experience with loading states, notifications, and filtering.

## 🌐 Live Demo

- 🔗 [Live Demo](https://dvdmsk.github.io/ToDo-App/)
- 🧪 API-based app with persistent todos per user

## 📦 Repository

- 📁 [GitHub Repo](https://github.com/dvdmsk/ToDo-App.git)

## 🛠️ Technologies Used

- **React (with Hooks)** — component-based UI
- **React Context (useContext)** — global access to the user
- **TypeScript** — strong typing and IDE support
- **SCSS** — modular styling
- **Fetch API** — interaction with backend
- **React Router** — navigation and filters
- **Classnames Utility** — conditional class management
- **Prettier** — auto-formatting on save
- **Vite** — fast dev environment and build tool

## ✨ Features

- 🧾 **Register/Login support** — user-specific todos via userID
- 📥 **Load Todos from API** — fetch on app mount
- ➕ **Add Todos** — input handling with validation and async UI feedback
- ❌ **Delete Todos** — with loading overlay and error handling
- 🔁 **Toggle Todo Status** — individual and "Toggle All" feature
- ✏️ **Rename Todos** — inline editing with full UX flow
- 🧹 **Clear Completed** — batch deletion of completed todos
- 📎 **Filter Todos by Status** — All / Active / Completed
- ⚠️ **Notifications** — error messages shown and auto-hidden
- 🔄 **Spinners and Loaders** — clear user feedback for all API actions

## 🖼️ Screenshot

![Todo App Screenshot](./todoapp.gif)

## 🚀 Getting Started

To run the project locally:

1. **Clone the repository**

    ```bash
    git clone https://github.com/dvdmsk/ToDo-App.git
    cd ToDo-App
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    ```


## ✅ UX & Logic Considerations

- Input disabled while async actions are in progress
- Prevents accidental double submissions
- Focus returns to input on success
- Loader overlays used on todos during update/delete
- API errors show non-intrusive notifications
- Edge cases covered (empty titles, repeat edits, batch operations)

## 🤝 Contributing

Want to improve the app or report a bug?
Feel free to open an issue or submit a PR!

## 📬 Contact Me

- 💬 Telegram: [@dvd5678](https://t.me/dvd5678)
- 📧 Email: [dvdmsk21@gmail.com](mailto:dvdmsk21@gmail.com)
- 💼 LinkedIn: [David Moskalenko](https://www.linkedin.com/in/david-moskalenko-0a68051b8)
