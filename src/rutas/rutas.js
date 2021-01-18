import { Router } from 'express';
import * as PostController from './../controllers/PostsController'

const router = Router();

router.get('/', PostController.index);

router.get('/posts', PostController.findAllPosts);

router.post('/post/create', PostController.createPost);


export default router;