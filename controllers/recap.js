/**
 * GET /recaps
 * List all recaps.
 */
const Recap = require('../models/Recap.js');

exports.getRecaps = (req, res) => {
  Recap.find((err, recaps) => {
    res.render('recaps', {recaps: recaps});
  });
};

exports.createRecap = (req, res) => {
  req.assert('recap', 'Recap cannot be blank').notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/recaps');
  }
  // save new entry
  const entry = {
    email: req.body.email,
    year: 2017,
    title: req.body.title,
    content: req.body.recap
  }
  const recap = new Recap(entry);
  recap.save();
  // go to recaps index
  res.redirect('/');
};

exports.updateRecap = (req, res) => {
  const id = req.params.id
  console.log('looking for a single id: ', id)
  // Recap.find({ _id: id }, (err, recaps) => {      
  //   res.render('api/facebook', {
  //     title: 'Facebook API',
  //     recaps: recaps,
  //     profile: profile
  //   });
  // });
};

exports.deleteRecap = (req, res) => {
};
