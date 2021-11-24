const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

//get all the users
router.get("/", (req, res) => {
    User.findAll({
      attributes: { exclude: ["password"] },
    })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//get user by id
router.get("/:id", (req, res) => {
  User.findOne({
    attribute: { exclude: ['password']},
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Post,
        as: "posts",
        attributes: ["id", "title", "content"],
      },
      {
        model: Comment,
        as: "comments",
        attributes: ["id", "comment_text", "post_id"],
      },
    ],
  }) //include the posts and comments of this user
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No User found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add user
router.post('/', (req, res) => {
  User.create({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.name = dbUserData.name;
      req.session.loggedIn = true;
      res.json(dbUserData);
    });
  });
});

//log in the user
router.post("/login", (req, res) => {
  console.log(req.body.email)
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: "Email is invalid" });
        return;
      }
      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: "Password is invalid" });
        return;
      }

      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        res.json({ user: dbUserData, message: "You are now logged in!" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Log out the user
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end(); // if there was no session
  }
});


module.exports = router;