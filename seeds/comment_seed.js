const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "This is amazing!"
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "Isn't that fantastic that you can create an almighty tree that fast? If we're gonna walk though the woods, we need a little path. A fan brush is a fantastic piece of equipment. Use it. Make friends with it. Mix your color marbly don't mix it dead."

    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "Isn't that fantastic that you can create an almighty tree that fast? If we're gonna walk though the woods, we need a little path. A fan brush is a fantastic piece of equipment. Use it. Make friends with it. Mix your color marbly don't mix it dead."
        
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "Isn't that fantastic that you can create an almighty tree that fast? If we're gonna walk though the woods, we need a little path. A fan brush is a fantastic piece of equipment. Use it. Make friends with it. Mix your color marbly don't mix it dead."
        
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "Isn't that fantastic that you can create an almighty tree that fast? If we're gonna walk though the woods, we need a little path. A fan brush is a fantastic piece of equipment. Use it. Make friends with it. Mix your color marbly don't mix it dead."
        
    }
]

const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;