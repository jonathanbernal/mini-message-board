var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  }, 
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

// This route displays the form page users
// can use to send a message.
router.get('/new', (req, res) => {
  res.render('form', { title: 'Message Form' })
})

// This route processes the information sent
// by the user.
router.post('/new', (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ 
    user: messageUser, 
    text: messageText, 
    added: new Date() 
  });
  res.redirect('/');
})

module.exports = router;
