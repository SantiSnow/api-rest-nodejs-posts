import { Router } from 'express';

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


router.get('/posts/create', (req, res)=>{
    res.json({
        message: "Aqui se crean posts"
    })
});


router.get('/posts/delete', (req, res)=>{
    res.json({
        message: "Aqui se eliminan posts"
    })
});


export default router;