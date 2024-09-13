# Real-Estate-Site
Real Estate Portal
This project is a web-based real estate platform where users can browse property listings, log in to their accounts, and receive AI-driven property recommendations. It is built with a Node.js backend, MongoDB for data storage, a Python AI recommendation system, and a frontend designed with HTML, CSS, and Bootstrap.

Table of Contents
Project Features
Technologies Used
Setup Instructions
Frontend Setup
Backend Setup
AI Recommendation System
Testing
Deployment
Project Screenshots
Contributing
Project Features

User Authentication:
User registration and login.
Password encryption using bcrypt.
Secure token-based authentication using JWT.
Property Listings:
Display real estate property listings.
Each listing contains title, description, and price.

#AI-driven Property Recommendations:
Personalized property recommendations using a collaborative filtering algorithm.
Responsive Design:
The website is fully responsive, with mobile and desktop support.

#Documentation & Deployment:
Complete project documentation and hosted on a cloud platform.

#Technologies Used
Frontend: HTML, CSS, Bootstrap
Backend: Node.js, Express.js
Database: MongoDB (Atlas)
AI/ML: Python (scikit-learn)
Other: JWT, bcrypt, Mongoose

#Setup Instructions
Requirements
Node.js (v12 or higher)
MongoDB (local or MongoDB Atlas for cloud)
Python (v3.6 or higher for the AI system)

#Installation
Clone the repository:
git clone https://github.com/your-username/real-estate-portal.git
cd real-estate-portal
Install backend dependencies:
cd server
npm install
Install Python dependencies for AI recommendations:
pip install numpy pandas scikit-learn

#Frontend Setup
The frontend is built using HTML, CSS, and Bootstrap for styling. It serves as the user interface, allowing users to browse properties and log in to the platform.

Steps to run the frontend:
Navigate to the client folder:
cd client
Open the index.html file in your browser, or you can deploy it via GitHub Pages.

#Backend Setup
The backend is built using Node.js and Express.js, and it interacts with MongoDB to store user and property data.

Steps to run the backend:
Set up a MongoDB database (local or Atlas).

Add your MongoDB connection string in server/config.js:
module.exports = {
  mongoURI: "your-mongodb-connection-string",
  secretKey: "your-jwt-secret"
};
Run the backend server:
npm start

#AI Recommendation System
The AI recommendation system is implemented using Python with collaborative filtering to suggest properties based on user preferences and interactions.
Running the AI System:
Create a dummy interaction matrix (or use real data from your database) in recommend.py:
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Dummy interaction matrix (replace with real data)
user_property_matrix = np.array([
    [5, 3, 0, 0],   # User 1 interactions
    [4, 0, 0, 1],   # User 2 interactions
    [0, 0, 5, 4],   # User 3 interactions
    [0, 0, 4, 5],   # User 4 interactions
])

# Calculate similarity between users
user_similarity = cosine_similarity(user_property_matrix)

# Recommend properties for User 1
user_idx = 0
similar_users = user_similarity[user_idx].argsort()[::-1][1:]
recommended_properties = user_property_matrix[similar_users].mean(axis=0)

print("Recommended properties for User 1:", recommended_properties)
Run the AI recommendation system:
python ai/recommend.py

#Testing
You can test the backend and frontend using tools like Postman or directly through the browser.

API Endpoints:
User Registration:
POST /register
Content-Type: application/json
Body:
{
  "email": "test@example.com",
  "password": "password123"
}
User Login:
POST /login
Content-Type: application/json
Body:
{
  "email": "test@example.com",
  "password": "password123"
}
Get Property Listings:
GET /api/properties

#Deployment
#Backend Deployment on Heroku
Create a Heroku account and install the Heroku CLI.

Push your project to GitHub.

Create a Heroku app and deploy:
heroku login
heroku create real-estate-portal
git push heroku main
Add MongoDB connection strings and JWT secret as config vars in Heroku.

#Frontend Deployment on GitHub Pages
If the frontend is static, you can deploy it via GitHub Pages:
