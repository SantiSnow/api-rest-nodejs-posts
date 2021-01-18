import Post from './../models/Post';

export const index = (req, res)=>{
    res.json({
        message: "Bienvenido al index de la aplicación"
    });
}

export const findAllPosts = async (req, res)=>{
    const allPosts = await Post.find();
    res.json({ allPosts });
}

export const createPost = async (req, res)=>{
    const newPost = new Post({
        userId: req.body.userId,
        id: req.body.id,
        title: req.body.title,
        body: req.body.body
    });
    await newPost.save();
    res.json({newPost});
}