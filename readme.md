# Recipe Management App

## 📝 Overview
The Recipe Management App is a web platform designed to help users create, manage, and view recipes. It provides features for recipe discovery, management, and saving favorite recipes, offering an engaging experience for food enthusiasts.

## 🌟 Features

1. **User Authentication**: Secure registration and login system.
2. **Recipe Management**: Create, edit, and delete your recipes with ease.
3. **Recipe Discovery**: Browse and search for recipes shared by other users.
4. **Saved Recipes**: Save your favorite recipes for quick access later.
5. **Responsive Design**: Optimized for desktop and mobile devices.

## 🛠 Prerequisites

Ensure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or remote instance)
- [Git](https://git-scm.com/) (for version control)
- A text editor or IDE (e.g., Visual Studio Code)

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/codingwizzzard/recipe-app.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd recipe-app
   ```
3. **Frontend Setup:**
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Return to the root directory:
     ```bash
     cd ..
     ```

4. **Backend Setup:**
   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `server` directory and add the following environment variables:
     ```env
     PORT=2000
     MONGODB_URI=mongodb://localhost/recipe-app
     JWT_SECRET=your-secret-key
     ```
     Replace `your-secret-key` with a secure secret for JWT token generation.

5. **Start the Development Server:**
   ```bash
   node index.js
   ```

6. **Access the Application:**
   - Frontend: Open `http://localhost:3000` in your browser.
   - Backend: The server runs on `http://localhost:2000` by default.

## 💻 Technologies Used

### Frontend:
- React
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication
- bcrypt for secure password hashing

## 🤝 Contributing

Contributions are welcome! If you have ideas or fixes, please fork the repository and create a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.

## ❓ Troubleshooting

- **MongoDB Connection Issues:**
  Ensure MongoDB is running locally or update the `MONGODB_URI` in the `.env` file with the correct remote URL.
- **Port Conflicts:**
  If the default ports are in use, update the `PORT` variable in the `.env` file.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Happy Cooking! 🍲

