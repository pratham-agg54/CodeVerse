# CodeVerse: Dynamic Multi-User Code Editor

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Utilities](#utilities)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Introduction

Welcome to CodeVerse, a dynamic multi-user code editor designed to facilitate real-time collaborative coding. This project leverages modern web technologies to create a seamless experience where multiple users can join the same room and collaboratively write and edit code with syntax highlighting, autocompletion, and auto bracket closing across multiple programming languages and themes.

## Features

- **Room Generation**: Users can generate unique room IDs and join rooms with a username.
- **Multi-User Collaboration**: Multiple users can join the same room using the same room ID, allowing for real-time code collaboration.
- **Code Editor**: A powerful code editor with syntax highlighting, autocompletion, and auto bracket closing.
- **Language Support**: Supports 4 different programming languages: C++, Java, Python, Go.
- **Themes**: Choose from 4 different themes: Monokai, GitHub, Twilight, Xcode.
- **Real-Time Synchronization**: Code changes are synchronized in real-time across all users in the room.

## Tech Stack

- **Frontend**: React, Ace Editor, React Avatar, React Hot Toast
- **Backend**: Node.js, Express, Socket.io
- **Utilities**: UUID

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/pratham-agg54/CodeVerse.git
    cd CodeVerse
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the server:**

    ```bash
    npm start
    ```

    The application should now be running at `http://localhost:3000`.

### Usage

1. **Generate a Room ID:**

   Open the application and generate a unique room ID. Enter your username and join the room.

2. **Join a Room:**

   Share the room ID with others. They can enter the same room ID and their username to join the room.

3. **Collaborate:**

   Start writing code in the editor. Your code will be synchronized in real-time with all users in the same room.

## Project Structure

### Frontend

The frontend is built with React and uses the following libraries:

- **Ace Editor**: For the code editor with syntax highlighting, autocompletion, and auto bracket closing.
- **React Avatar**: For user avatars.
- **React Hot Toast**: For notifications.

### Backend

The backend is built with Node.js and Express and uses Socket.io for real-time communication.

### Utilities

- **UUID**: For generating unique room IDs.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## Acknowledgements

- Thanks to the developers of React, Node.js, Express, Socket.io, Ace Editor, React Avatar, and React Hot Toast for their amazing tools.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding with CodeVerse!