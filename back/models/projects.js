const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: String,
  desc: String,
  stack_front: [String],
  stack_back: [String],
  pic_url: String,
  days_spent: Number,
  idproject: Number,
});

exports.projectModel = mongoose.model('projects', projectSchema);
exports.projectsCapsule = {
  result: true,
  projects: [
    {
      stack_front: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      stack_back: [],
      _id: '5c8670584a619a0e49ca886b',
      idproject: 1,
      name: 'MyMails',
      desc: 'Une Web App de messagerie minimaliste',
      pic_url:
        'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313710/close-envelope.png',
      days_spent: 4,
      __v: 0,
    },
    {
      stack_front: [
        'HTML',
        'CSS',
        'Bootstrap',
        'JavaScript',
        'jQuery',
        'E-Paiement Stripe',
      ],
      stack_back: ['E-Paiement Stripe'],
      _id: '5c8670584a619a0e49ca886c',
      idproject: 2,
      name: 'BikeShop',
      desc: 'Un site e-commerce avec moyen de paiement',
      pic_url:
        'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313710/bike.png',
      days_spent: 5,
      __v: 0,
    },
    {
      stack_front: [
        'HTML',
        'CSS',
        'Bootstrap',
        'JavaScript',
        'jQuery',
        'ChartJS',
      ],
      stack_back: ['MongoDB', 'Mongoose'],
      _id: '5c8670584a619a0e49ca886e',
      idproject: 4,
      name: 'BlackBoard',
      desc: 'Un Backoffice de gestion de site e-commerce',
      pic_url:
        'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/presentation-board-with-graph.png',
      days_spent: 5,
      __v: 0,
    },
    {
      stack_front: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
      stack_back: ['MongoDB', 'Mongoose', 'Rest API'],
      _id: '5c8670584a619a0e49ca886d',
      idproject: 3,
      name: 'WeatherApp',
      desc: 'Une appli web de météo en temps réel',
      pic_url:
        'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/sun.png',
      days_spent: 5,
      __v: 0,
    },
    {
      stack_front: ['JavaScript', 'ReactJS', 'JSX'],
      stack_back: ['MongoDB', 'Mongoose', 'Rest API'],
      _id: '5c8670584a619a0e49ca886f',
      idproject: 5,
      name: 'MyMoviz',
      desc: 'Une plateforme avec les derniers films en temps réel',
      pic_url:
        'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/video-camera.png',
      days_spent: 6,
      __v: 0,
    },
    {
      stack_front: ['JavaScript', 'React Native', 'JSX', 'Expo', 'Redux'],
      stack_back: ['MongoDB', 'Mongoose'],
      _id: '5c8670584a619a0e49ca8870',
      idproject: 6,
      name: "Whol'Up",
      desc: 'Une application mobile de contacts',
      pic_url:
        'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/phone-book.png',
      days_spent: 4,
      __v: 0,
    },
    {
      stack_front: ['JavaScript', 'React Native', 'JSX', 'Expo', 'Redux'],
      stack_back: ['MongoDB', 'Mongoose', 'Rest API'],
      _id: '5c8670584a619a0e49ca8872',
      idproject: 8,
      name: "Face'Up",
      desc: 'Une application  mobile de reconnaissance faciale',
      pic_url:
        'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/photocam.png',
      days_spent: 3,
      __v: 0,
    },
    {
      stack_front: ['JavaScript', 'React Native', 'JSX', 'Expo', 'Redux'],
      stack_back: [
        'MongoDB',
        'Mongoose',
        'Rest API',
        'SocketIO',
        'Facebook Connect',
      ],
      _id: '5c8670584a619a0e49ca8871',
      idproject: 7,
      name: 'LocaPic',
      desc: 'Une appli mobile de géolocalisation avec un chat',
      pic_url:
        'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/placeholder.png',
      days_spent: 5,
      __v: 0,
    },
  ],
};
