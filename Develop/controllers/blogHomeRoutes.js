const router = require('express').Router();
const { Post, User, Comment } = require('../models');


const loggedInMiddleware = (req, res, next) => {
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
    next();
  }
// };
loggedInMiddleware


router.get('/', async (req, res) => {
  try {
    console.log("trying");
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
        {
          model: Comment,
          as: 'post_comments',
          attributes: ['body'],
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['name', 'email'],
            },]
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render('homepage', {
      posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/newPost',async (req, res) => {
  try {
    const { title, body, user_id } = req.body;

    // Create a new post
    const post = await Post.create({ title, body, user_id });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
})



router.post('/newComment',async (req, res) => {
  try {
    const { user_id, body, post_id} = req.body;

    // Create a new comment
    const post = await Comment.create({ user_id, body, post_id });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
})
// {
//   model: Comment,
//   as: 'post_comments', 
//   attributes: ['body', 'user_id' ],
//   include: {
//     model: User,
//     as: 'user', // Specify the alias for the User association
//     attributes: ['name'],
//   },
// },

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
