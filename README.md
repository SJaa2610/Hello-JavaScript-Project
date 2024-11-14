# Node.js Hello World Application

A simple Node.js application using Express that prints "Hi, I am Sarahi. This is my JavaScript project" when accessed via a GET request.

## Description
This project is a basic Node.js application that demonstrates how to set up a simple web service using the Express framework. It handles GET requests and responds with a simple message.

## Prerequisites
- Node.js 20.18.0
- npm (Node Package Manager)
- Docker (optional, for containerization)
- A text editor or IDE of your choice (VS Code, WebStorm, etc.)

## Technologies Used
- Node.js 20.18.0
- Express

## Installation and Running the Application

1. Clone the repository:
   ```bash
   https://github.com/SJaa2610/Hello-JavaScript-Project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Hello-JavaScript-Project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

   The app will be accessible on `http://localhost:3000`.

## Docker Support

If you prefer to run the application in a Docker container, follow these steps:

1. Build the Docker image:
   ```bash
   docker build -t hello-nodejs-app .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 hello-nodejs-app
   ```

   The app will be accessible on `http://localhost:3000`.

## Project Structure
```
src/
├── project.js           # Main JavaScript file
├── Dockerfile           # Docker configuration
├── package.json         # NPM dependencies and scripts
└── node_modules/        # NPM packages installed
```

## Configuration

No additional configuration is required to run this basic application.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your changes
3. Open a pull request with your changes

## Author
Sarahi

## Contact
- GitHub: @sjaa2610
