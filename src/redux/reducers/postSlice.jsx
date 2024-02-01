import { createSlice } from "@reduxjs/toolkit";
import { addPost, deletePost } from "../actions/postActions";

const initialValue = [
    {
        key: "t35ty5g234-dummyhash-5452thy76j",
        imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        date: new Date(),
        postLink: "#",
        title: "Introducing Machine Learning",
        description: "Learn the fundamentals of machine learning and its applications.",
        tags: ["ML", "TensorFlow", "Javascript"]
    },
    {
        key: "t2354gf567-dummyhash-3456hjk980",
        imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        date: new Date(),
        postLink: "#",
        title: "Building Neural Networks with TensorFlow",
        description: "Create and train neural networks using TensorFlow for various tasks.",
        tags: ["AI", "Deep Learning", "Python"]
    },
    {
        key: "t4365hf789-dummyhash-1234qwe567",
        imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        date: new Date(),
        postLink: "#",
        title: "Exploring Computer Vision Applications",
        description: "Discover how to build computer vision systems for image and video analysis.",
        tags: ["Computer Vision", "Natural Language Processing"]
    },
];

export const postSlice = createSlice({
    name: "post",
    initialState: initialValue,
    reducers: {
        // Register all action functions here, define them in ../actions/
        addPost,
        deletePost
    }
});

export const { addPostAction, deletePostAction } = postSlice.actions;
export default postSlice.reducer;