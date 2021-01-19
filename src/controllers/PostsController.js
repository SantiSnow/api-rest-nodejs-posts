import Post from './../models/Post';

export const index = (req, res)=>{
    res.json({
        message: "Bienvenido al index de la aplicación"
    });
}

export const findAllPosts = async (req, res)=>{
    const allPosts = await Post.find().sort({ id: 1 });

    if(!allPosts){
        return res.status(500).json({ message: `No se encontraron posts`});
    }

    res.json({ allPosts });
}

export const findOnePost = async (req, res)=>{
    const id = req.params;
    const postFound = await Post.find(id);

    if(!postFound){
        return res.status(404).json({ message: `No se encontró un post con el id ${id}`});
    }

    res.json({ postFound });
}

export const findUsersPost = async (req, res)=>{
    const id = req.params.id;
    const postFounds = await Post.find({ userId: id });

    if(!postFounds){
        return res.status(404).json({ message: `No se encontraron posts de ese usuario`});
    }

    res.json({ postFounds });
}

export const createPost = async (req, res)=>{    
    if(!req.body.userId || !req.body.id || !req.body.title || !req.body.body ){
        return res.status(500).send({ message: 'El contenido no puede estar vacio'});
    }

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

    if(!req.params){
        return res.status(500).send({ message: 'Se necesitan los parametros para eliminar datos'});
    }

    try{
        const id = req.params;
        await Post.deleteOne(id)
        res.json({ message: "Se elimino el post correctamente" });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor '});
    }

}

export const updatePost = async (req, res)=>{

    if(!req.params){
        return res.status(500).send({ message: 'Se necesitan los parametros para actualizar datos'});
    }
    try{
        await Post.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Post actualizado" });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor '});
    }
}