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

### Dependencies

The client-side application is built using the following major dependencies:

- React
- Axios for API requests
- React Router for routing
- React Redux for state management
- React Toastify for notifications
- Bcrypt for hashing
- CORS for cross-origin resource sharing
- Express as the backend framework
- Mongoose for MongoDB object modeling

#### Installation

`yarn add axios`

`yarn add express`

`yarn add mongoose`

`yarn add cors`

`yarn add bcryptjs`

### Installation

1. Create new folder 'transaction-client' in your project root

2. Clone the repository to the folder:
   ```bash
   git clone <repository URL>
   ```
3. Navigate to the folder 'transaction-client' and install Vite + React

```bash
yarn create vite
```

Installation will ask for your project name, description, author etc. Just leave it blank and keep hitting enter until the installation complete.

4. Start the application:

```bash
yarn dev
```
