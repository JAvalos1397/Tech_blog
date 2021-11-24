const router = require('express').Router();

const userRoutes = require('./user_route');
const postRoutes = require('./post_route');
const commentRoutes = require('./comment_route');

router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;