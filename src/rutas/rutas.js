import { Router } from 'express';
import * as PostController from './../controllers/PostsController'

const router = Router();

router.get('/', PostController.index);

router.get('/posts', PostController.findAllPosts);

router.get('/posts-by-date', PostController.findAllPostsByDate);

router.get('/post/:id', PostController.findOnePost);

router.get('/posts/user/:id', PostController.findUsersPost);

router.post('/post/create', PostController.createPost);

router.delete('/post/delete/:id', PostController.deletePost);

router.put('/post/update/:id', PostController.updatePost);


export default router;