let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Incident Management',
    displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact',
    displayName: req.user ? req.user.displayName : ''});
}

