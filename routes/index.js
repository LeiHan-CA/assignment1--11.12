var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lei Han Website Building Company' });
});

/* GET home page. */
router.get('/home', (req, res, next)=> {
  res.render('home', { title: 'home page'});
});

/* GET about page. */
router.get('/about', (req, res, next)=> {
  res.render('about', { title: 'about'});
});

/* GET projects page. */
router.get('/projects', (req, res, next)=> {
  res.render('projects', { title: 'projects'});
});

/* GET services page. */
router.get('/services', (req, res, next)=> {
  res.render('services', { title: 'services'});
});

/* GET contact page. */
router.get('/contact', (req, res, next)=> {
  res.render('contact', { title: 'contact'});
});

module.exports = router;
