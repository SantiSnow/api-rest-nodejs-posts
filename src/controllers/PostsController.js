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

export const findOnePost = async (req, res)=>{
    const id = req.params;
    const postFound = await Post.find(id);
    res.json({ postFound });
}

export const findUsersPost = async (req, res)=>{
    const id = req.params.id;
    const postFound = await Post.find({ userId: id });
    res.json({ postFound });
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

export const deletePost = async (req, res)=>{
    const id = req.params;
    await Post.deleteOne(id)
    res.json({ message: "Se elimino el post correctamente" });
}

export const updatePost = async (req, res)=>{
    res.json({ message: "Post actualizado" });
}