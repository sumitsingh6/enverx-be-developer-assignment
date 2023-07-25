import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    username: {type: String, required: true},
    name: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, required: true},
    createdAt: { type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export const BlogPostModal = mongoose.model('BlogPost', postSchema);

export const getPosts = (query: any) => BlogPostModal.find(query).sort({ createdAt: 'asc', name: 'asc' });
export const getPostByCategory = (tag: string) => BlogPostModal.find({ tag });
export const getPostById = (id: string) => BlogPostModal.findById(id);

export const creatPost = (values: Record<string, any>) => new BlogPostModal(values).save().then((post) => {
    return post.toObject();
});


export const deletePostById = (id: string) => BlogPostModal.findOneAndDelete({ _id: id });
export const updatePostById = (id: string, values: Record<string, any>) => BlogPostModal.findByIdAndUpdate(id, values, {new: true}); 


