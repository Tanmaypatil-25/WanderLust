# Wanderlust

A full-stack Airbnb-inspired web application built by following the Apna College project series, with additional custom improvements and modifications.

## 🚀 Project Overview

This project is an Airbnb clone that allows users to browse property listings, view location details, and interact with a responsive user interface similar to the original Airbnb platform.

While building the project, I added several enhancements and modifications to improve usability, responsiveness, and map integration.

---

# ✨ Custom Modifications & Improvements

## 📱 Mobile Responsive Design

Added custom media queries and responsive layouts to improve the experience on:

* Mobile devices
* Tablets
* Smaller screen laptops

### Improvements include:

* Responsive navbar
* Flexible listing cards
* Better spacing and alignment
* Optimized image sizing
* Improved mobile navigation experience

---

## 🗺️ Replaced Mapbox with OpenStreetMap

Instead of using Mapbox, this project uses **OpenStreetMap** for map functionality.

### Why OpenStreetMap?

* Free and open-source
* No dependency on Mapbox API pricing
* Lightweight and easy to integrate
* Community-driven map data

### Features:

* Location display for listings
* Interactive map integration
* Marker support for property locations

---

## 🛠️ Minor UI & Functional Enhancements

Additional small improvements were added throughout the project, including:

* UI refinements
* Better responsiveness
* Cleaner styling adjustments
* Improved user experience
* Small bug fixes and layout corrections

---

# 🧰 Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap
* EJS Templates

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication & Utilities

* Passport.js
* Express Session
* Connect Flash
* Method Override

## Maps

* OpenStreetMap
* Leaflet.js

---

# 📂 Features

* User authentication
* Add new listings
* Edit listings
* Delete listings
* Upload images
* View listing details
* Responsive UI
* Interactive maps using OpenStreetMap

---

# 📸 Screenshots

Add your project screenshots here.

```md
/screenshots/homepage.png
/screenshots/listing-page.png
/screenshots/mobile-view.png
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Tanmaypatil-25/WanderLust.git
```

## 2️⃣ Navigate to project folder

```bash
cd WanderLust
```

## 3️⃣ Install dependencies

```bash
npm install
```

## 4️⃣ Create environment variables

Create a `.env` file and add:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key
```

---

# ▶️ Run the Project

```bash
node app.js
```

or

```bash
npm start
```

Visit locally:

```txt
http://localhost:8080
```

---

# 🌐 Live Demo

The project is deployed on Render.

## Live Website

```txt
https://wanderlust-s3wq.onrender.com
```

Replace the above URL with your actual deployed Render link.

---txt
[http://localhost:8080](http://localhost:8080)

````

---

# 📁 Folder Structure

```bash
AIRBNB/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   ├── js/
│   └── favicon.ico
│
├── routes/
│   ├── listing.js
│   ├── reviews.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── error.ejs
│
├── .env
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── schema.js
└── README.md
````

---

# 🎯 Learning Outcomes

Through this project, I learned:

* Full-stack web development
* RESTful routing
* Authentication and authorization
* MongoDB database handling
* Responsive web design
* Map integration using OpenStreetMap
* Backend and frontend integration

---

# 🙌 Credits

Base project inspired by the Apna College Airbnb Clone project.

Custom modifications and enhancements implemented independently.

---

# 📜 License

This project is for educational and learning purposes.
