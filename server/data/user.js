import bcrypt from 'bcryptjs'

const users =[ 
    {
        name: 'Mohamed Youssef',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('12345'),
        isAdmin:true
    },
    {
        name: 'Ahmed Mostafa',
        email: 'influencerd@gmail.com',
        password: bcrypt.hashSync('54321'),
        isInfluencer:true
    },
    {
        name: 'John Doe',
        email: 'guest@gmail.com',
        password: bcrypt.hashSync('112233'),
    },
]

export default  users;