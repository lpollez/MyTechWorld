const express = require('express');
const Joi = require('joi');
const { projectModel, projectsCapsule } = require('../models/projects');

const router = express.Router();

// get source projects
router.get('/projects', (req, res) => {
  res.json({ result: true, projects: projectsCapsule });
});

// get liked projects
router.get('/myprojects', (req, res) => {
  projectModel.find((error, data) => {
    error
      ? res.status(400).json({ result: false, error })
      : res.json({ result: true, projects: data });
  });
});

// add liked project
router.post('/myprojects', (req, res) => {
  const { error } = validateProject(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const newProject = new projectModel({
    name: req.body.name,
    desc: req.body.desc,
    stack_front: req.body.stack_front,
    stack_back: req.body.stack_back,
    pic_url: req.body.pic_url,
    days_spent: req.body.days_spent,
    idproject: req.body.idproject,
  });

  newProject.save((error, project) => {
    error
      ? res.status(400).json({ result: false, error })
      : res.json({ result: true, project });
  });
});

// delete liked project
router.delete('/myprojects/:idproject', (req, res) => {
  projectModel.deleteOne(
    { idproject: req.params.idproject },
    (error, response) => {
      error
        ? res.status(400).json({ result: false, error })
        : response.deletedCount === 0
        ? res.status(404).json({ result: false })
        : res.json({ result: true });
    }
  );
});

const validateProject = project => {
  const schema = {
    name: Joi.string().min(1).required(),
    desc: Joi.string().min(1).required(),
    stack_front: Joi.string().min(0).allow('').allow(null).required(),
    stack_back: Joi.string().min(0).allow('').allow(null).required(),
    pic_url: Joi.string().min(1).required(),
    days_spent: Joi.number().integer().min(1).required(),
    idproject: Joi.number().integer().min(1).required(),
  };
  return Joi.validate(project, schema);
};

module.exports = router;
