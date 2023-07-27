# Tokopedia Play Clone

Tokopedia Clone is the final project for a full stack track. Built using MongoDB, Express.js, React.js, Node.js. Currently only available back-end using MongoDB, Express.js, and Node.js.

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
  git clone https://link-to-project
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
    PORT = 3000
```