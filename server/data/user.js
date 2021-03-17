const bcrypt = require('bcryptjs')

const users =[ 
    {
        name: 'Mohamed Youssef',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('12345'),
        isAdmin:true
    },
    {
        name: 'Ahmed Mostafa',
        email: 'influencer@gmail.com',
        password: bcrypt.hashSync('54321'),
        isInfluencer:true
    },
    {
        name: 'Ibrahim',
        email: 'ibrahim@gmail.com',
        password: bcrypt.hashSync('54321'),
        isInfluencer:true
    },
    {
        name: 'John Doe',
        email: 'guest@gmail.com',
        password: bcrypt.hashSync('112233'),
    },
    {
        name: 'Ahmed Mostafa',
        email: 'influencer2@gmail.com',
        password: bcrypt.hashSync('54321'),
        isInfluencer:true
    },
]

module.exports = users;