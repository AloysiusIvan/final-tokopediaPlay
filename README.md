# Tokopedia Play Clone

Tokopedia Clone is the final project for a full stack track. Built using MongoDB, Express.js, React.js, Node.js. In this application users can watch videos from YouTube while shopping and leave comments.

## Features
1. User can open Home Page and Video Detail Page
2. User can see video list with thumbnail from YouTube in home page
3. User can click each video and go to video detail page
4. User can see list products, embed YouTube, list comment, and form submit comment
5. User just need input name and comment when submit comment in form
6. User can see their comment in list comment section after success submit comment

## Database Structure

```bash
tokpedplaydb.videos

{
    _id: ObjectId,
    urlVideoId: String
    product: [{
        _id: ObjectId,
        productLink: String,
        title: Number,
    }],
    commentList: [{
        username: String,
        comment: String,
        createdAt: Date,
        updateddAt: Date
    }]
}
```

Currently there is only one collection to store all the data needed in the form of video data, product data, and comment data. Everything is put together in one collection because product data and comment data are related to video data.


## API Structure

**GET /api/videos**
----
  Returns all videos available.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Videos doesn't exist" }`   
  **Content:**
```
{
    videos: [
        {<video_object>},
        {<video_object>},
        {<video_object>}
    ]
}
```

**GET /api/videos/:id**
----
  Returns video by id.
* **URL Params**  
  id
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Video doesn't exist" }`   
  **Content:**
```
{
    {<video_object>}
}
```

**GET /api/videos/:id/products**
----
  Returns all products related with video.
* **URL Params**  
  id
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Products doesn't exist" }`   
  **Content:**
```
{
    products:[
        {<product_object>},
        {<product_object>},
        {<product_object>}
    ]
}
```

**GET /api/videos/:id/comments**
----
  Returns all comments related with video.
* **URL Params**  
  id
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Comments doesn't exist" }`   
  **Content:**
```
{
    comments:[
        {<comments_object>},
        {<comments_object>},
        {<comments_object>}
    ]
}
```

**POST /api/videos/:id/comments**
----
  Post a comment to related with video.
* **URL Params**  
  id
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ message : "Fail" }`   
  **Content:**
```
{
    message: "Success"
}
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/AloysiusIvan/final-tokopediaPlay.git
```

Go to the project directory

```bash
  cd final-tokopediaplay
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npx nodemon
```

**Make sure you have MongoDB and Node.js installed. If not, you can follow the install guide on the official site directly.**

Create new database with MongoDB shell

```bash
  use your-db-name
```
Below is just an example but you can change it as you wish as long as it matches the database structure above.
```bash
  videos = { urlVideoId: 'e03G3Q-ukl8', product: [{ _id: ObjectId(), productLink: 'https://www.tokopedia.com/duniacom-srv/logitech-g502-hero-high-performance-gaming-mouse?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D13355454', title: 'Logitech G502 HERO High Performance Gaming Mouse', price: 639000 },{ _id: ObjectId(), productLink: 'https://www.tokopedia.com/duniacom-srv/logitech-g502-hero-high-performance-gaming-mouse?extParam=ivf%3Dfalse%26src%3Dsearch%26whid%3D13355454', title: 'Logitech G502 HERO High Performance Gaming Mouse', price: 639000 }], commentList: [{ username: 'Aloysius Ivan', comment: 'Request bang', timestamp: '2023:07:27 18:52:00' },{ username: 'James Martin', comment: 'Mantaapp', timestamp: '2023:07:27 18:52:00' }] };
```
```bash
  db.videos.insertOne(videos)
```

Setting up .env at project folder
```bash
    DATABASE_URL = 'mongodb://localhost:your-mongo-port/your-db'
    PORT = 3001
```

## Installation and Setup Instructions (React)

Go to the React directory

```bash
  cd views
```

Install dependencies

```bash
  npm install
```

To Start Server:

```bash
  npm start
```

## Note

Make sure you open 2 terminals/bash. One for Express application(Back-End), one for React application(Front-End).