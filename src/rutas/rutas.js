import { Router } from 'express';
import Post from './../models/Post';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        message: "Bienvenido al index de la aplicación"
    })
});

router.get('/posts', (req, res)=>{
    res.json({
        message: "Estos son los posts de la pagina"
    })
});


router.get('/post/1', (req, res)=>{
    res.json({
        message: "Este es un post"
    })
});


router.post('/post/create', async (req, res)=>{
    const newPost = new Post({
        userId: req.body.userId,
        id: req.body.id,
        title: req.body.title,
        body: req.body.body
    });
    await newPost.save();
    res.json({newPost});
});


router.get('/posts/delete', (req, res)=>{
    res.json({
        message: "Aqui se eliminan posts"
    })
});


export default router;