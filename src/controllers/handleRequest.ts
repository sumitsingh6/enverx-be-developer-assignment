import express from "express";
import { creatPost, getPostById, getPosts, updatePostById, deletePostById } from "../db/blogpost";

export const postBlog = async (req: express.Request, res: express.Response) => {
    try {
        const {username, name, content, category} = req.body;
        console.log(username);
        if(!username || !name || !content || !category) {
            return res.status(400).send(`Missing data in body`);
        }

        console.log('before creation blogpost');
        const blogPost = await creatPost({
            username,
            name,
            content,
            category
        });

        return res.status(200).json(blogPost).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }    
}

export const fetchPosts = async (req: express.Request, res: express.Response) => {
    try {
        const category = req.query.category as string;
        let query = {};

        if(category) {
            query = { category: { $in: category.split(',') } };
        }

        const posts = await getPosts(query);
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const fetchPostById =async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;

        if(!id) {
            return res.status(400).send('Need ID');
        }

        const blogPost = await getPostById(id);

        if(!blogPost) {
            return res.status(400).send('ID does not match');
        }

        return res.status(200).json(blogPost).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updatePost = async (req:express.Request, res:express.Response) => {
    try {
        const id = req.params.id;
        const {username, name, content, category} = req.body;
        //console.log('content===========>',content);
        if(!id) {
            return res.status(400).send('Need ID');
        }else if(!username || !name || !content || !category) {
            return res.status(400).send('Need username, name, category and content to update');
        }

        const post = await updatePostById(id, {
            username,
            name,
            content,
            category,
            updatedAt: new Date()
        });
        //console.log('#####inupdate====>', post);
        return res.status(200).json(post).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deletePost =async (req:express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        if(!id) {
            return res.status(400).send('Need ID to delete');
        }

        const post = await deletePostById(id);
        return res.status(200).json(post).end()

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}