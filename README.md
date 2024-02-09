# Transaction Manager (Client)

## Overview

Transaction Manager is a client-side application designed to help users track their daily income and expenses. It provides a simple yet effective way to manage personal finances through features like login, signup, adding and deleting transactions.

## Features

- User authentication (login and signup)
- Add income and expense entries
- Delete selected entries
- Delete all entries at once

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [MongoDB Compass](https://www.mongodb.com/products/compass) for managing MongoDB
- [Visual Studio Code](https://code.visualstudio.com/) or any preferred IDE

### Installation

1. Navigate your terminal to project root 'transaction-manager'

2. Install Vite + React using npm or yarn:

   ```bash
   npm create vite@latest`
   ```

   ```bash
   yarn create vite
   ```

3. Installation will ask for your:

- Project name : transaction-v2 (you can give any name as per your choice)
- Select a framework: React
- Select a variant: JavaScript

4. Navigate to your front-end folder and run yarn

```bash
cd transaction-v2
```

```bash
yarn
```

5. Start the application:

```bash
yarn dev
```

### Dependencies

The client-side application is built using the following major dependencies:

- React
- Axios for API requests
- React Router for routing
- React Bootstrap Framework
- React Redux for state management
- React Toastify for notifications
- Bcrypt for hashing
- CORS for cross-origin resource sharing
- Express as the backend framework
- Mongoose for MongoDB object modeling

#### Install all dependencies

`yarn add react-bootstrap bootstrap`

`yarn add axios`

`yarn add express`

`yarn add mongoose`

`yarn add cors`

`yarn add bcryptjs`

### Cleaning Up

You must clean-up some codes from default files

#### App.jsx

Open `src/App.jsx` and replace following code:

```Javascript
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;

```

#### Change Page Title

Open `index.html` and change your page title.

#### Cleaning up CSS

Open `src/App.css` and `src/Index.css` files and delete all the codes inside. You can write your own CSS styles in those files.

### Create Pages

You need to create following pages using React Bootstrap framework.

- Login Page
- Signup/Registration Page
- Transaction Page

#### Creating Components

To build complete page, you need to create components for each page. For example, in our project, we are creating 2 components for login and signup page as below:

```bash
src/components/loginForm.jsx
```

```bash
src/components/signupForm.jsx
```
