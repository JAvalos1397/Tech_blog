const { Post } = require('../models');

const postData = [
    {
        title: "Taskmaster goes public!",
        post_content: "Taskinator is a task-tracker app that will allow you to organize your personal to-do list items by clicking and dragging them into categories like To Do, In Progress, and Completed.",
        user_id: 3
    },
    {
        title: "Zoo Keepr reaches 1 million subscribers!",
        post_content: "The local zoo has received funding to build a new online catalog, and they've asked to create a web server for a front-end application they’re developing, called Zoo Keepr. This site’s data will be stored on the server. This will allow animal enthusiasts to access the data from different locations and browsers without needing to download it to their device",
        user_id: 1
    }
]

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;