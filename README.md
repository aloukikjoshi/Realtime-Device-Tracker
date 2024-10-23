# 🌍 Realtime Device Tracker

## 📜 Description
This project is a real-time device tracker that uses geolocation to track the user's location and display it on a map. The application uses Node.js, Express, Socket.io, and Leaflet.js to achieve this functionality.

## ✨ Features
- 📍 Real-time location tracking
- 🎯 High accuracy geolocation
- 🗺️ Dynamic map updates
- 🔌 User disconnection handling

## 🛠️ Technologies Used
- 🟢 Node.js
- 🚀 Express
- 📡 Socket.io
- 🗺️ Leaflet.js
- 📝 EJS (Embedded JavaScript templates)

## 📦 Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/Realtime-Device-Tracker.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Realtime-Device-Tracker
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## 🚀 Usage
1. Start the server:
    ```sh
    npx nodemon .\app.js
    ```
2. Open your browser and navigate to `http://localhost:3002` (or the port you have configured).

## 📂 Project Structure
- `app.js`: Main server file.
- `views/index.ejs`: HTML template for the application.
- `public/js/script.js`: Client-side JavaScript for geolocation and socket communication.
- `public/css/style.css`: Styles for the application.
- `steps.yaml`: Rough steps and procedures for the project. This file was used for reference while creating the project, so don't try to make a lot of sense out of it.

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
```