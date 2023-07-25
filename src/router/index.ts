import express, { Router } from "express";
import { postBlog, fetchPosts, fetchPostById, updatePost, deletePost} from "../controllers/handleRequest";

const router = express.Router();

export default (): express.Router => {

    //GET /posts - Get all blog posts 
    //(Mandatory: Apply sorting based on created Date, blog name and filters based on category).
    router.get('/posts', fetchPosts);

    //GET /posts/:id - Get a specific blog post by ID.
    router.get('/posts/:id', fetchPostById);

    //POST /posts - Create a new blog post.
    router.post('/posts', postBlog);

    //PUT /posts/:id
    router.put('/posts/:id', updatePost);

    //DELETE /posts/:id
    router.delete('/posts/:id', deletePost);

    return router;
};
