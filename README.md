##  _Assginment For Backend Developer Role_

  Author: Sumit Kumar Singh
  Resume: https://drive.google.com/file/d/1mfdmodzdsbRY2lTMScKfcCyCuiyYHkmZ/view?usp=sharing

### How to setup

``` diff

1. Clone this repo and run

- npm install
- npm start

```
This will run the app in the development mode.

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### API Endpoints

 - `GET /posts` - Get all blog posts (Sorted based on created Date, blog name).
 - `GET /posts?category=category1,category2` - To apply filter based on category

-  `GET /posts/:id` - Get a specific blog post by ID.

-  `POST /posts` - Create a new blog post.

-  `PUT /posts/:id` - Update an existing blog post.

-  `DELETE /posts/:id` - Delete a blog post.