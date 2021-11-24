const { Post } = require('../models');

const postData = [
    {
        title: "Taskmaster goes public!",
        content: "Taskinator is a task-tracker app that will allow you to organize your personal to-do list items by clicking and dragging them into categories like To Do, In Progress, and Completed.",
        user_id: 2
    },
    {
        title: "Zoo Keepr reaches 1 million subscribers!",
        content: "The local zoo has received funding to build a new online catalog, and they've asked to create a web server for a front-end application they’re developing, called Zoo Keepr. This site’s data will be stored on the server. This will allow animal enthusiasts to access the data from different locations and browsers without needing to download it to their device",
        user_id: 1
    },
    {
        title: "Happy Trees",
        content:"You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. No worries. No cares. Just float and wait for the wind to blow you around. At home you have unlimited time. Let your imagination just wonder around when you're doing these things.",
        user_id: 1
    },
    {
        title: "Happy Trees",
        content:"You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. No worries. No cares. Just float and wait for the wind to blow you around. At home you have unlimited time. Let your imagination just wonder around when you're doing these things.",
        user_id: 1
    },
    {
        title: "Happy Trees",
        content:"You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. No worries. No cares. Just float and wait for the wind to blow you around. At home you have unlimited time. Let your imagination just wonder around when you're doing these things.",
        user_id: 1
    },
    {
        title: "Happy Trees",
        content:"You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. No worries. No cares. Just float and wait for the wind to blow you around. At home you have unlimited time. Let your imagination just wonder around when you're doing these things.",
        user_id: 1
    },
]

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;