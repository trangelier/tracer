const express = require('express');
const router = express.Router();
const { body } = require('express-validator/check');

//bring in Semester Models
let Semester = require('../models/semester');

/**
 * Returns all Semesters
 */
router.get('/', ensureAuthenticated, async (req, res) => {
  let semesters = await Semester.find({ user: req.user._id });

  res.json(semesters);
});

router.post(
  '/create',
  [
    body('year')
      .not()
      .isEmpty()
      .escape(),
    body('name')
      .not()
      .isEmpty()
      .escape()
  ],
  ensureAuthenticated,
  async (req, res) => {
    const year = req.body.year;
    const name = req.body.name;

    let errors = req.validationErrors();

    if (errors) {
      res.status(401).send('Error with request.');
    } else {
      let newSemester = new Semester({
        user: req.user.user_id,
        year: year,
        name: name,
        assignments: []
      });

      newSemester.save(err => {
        if (err) {
          res.status(500).send('Internal Error creating Semester.');
        } else {
          res.status(200).send(`${name} created!`);
        }
      });
    }
  }
);

module.exports = router;

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  else res.sendStatus(401);
}
