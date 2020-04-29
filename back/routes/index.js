const express = require('express');
const router = express.Router();
const { projectModel, projectsCapsule } = require('../models/projects');

// get source projects
router.get('/projects', function (req, res, next) {
  res.json({ result: true, projects: projectsCapsule });
});

// get liked projects
router.get('/myprojects', function (req, res, next) {
  projectModel.find(function (error, data) {
    if (!error) {
      res.json({ result: true, projects: data });
    } else {
      res.json({ result: false, error });
    }
  });
});

// add liked project
router.post('/myprojects', function (req, res, next) {
  const newProject = new projectModel({
    name: req.body.name,
    desc: req.body.desc,
    stack_front: req.body.stack_front,
    stack_back: req.body.stack_back,
    pic_url: req.body.pic_url,
    days_spent: req.body.days_spent,
    idproject: req.body.idproject,
  });
  newProject.save(function (error, project) {
    if (!error) {
      res.json({ result: true, project });
    } else {
      res.json({ result: false, error });
    }
  });
});

// delete liked project
router.delete('/myprojects/:idproject', function (req, res, next) {
  projectModel.deleteOne({ idproject: req.params.idproject }, function (
    error,
    response
  ) {
    if (!error) {
      res.json({ result: true });
    } else {
      res.json({ result: false, error });
    }
  });
});

module.exports = router;
