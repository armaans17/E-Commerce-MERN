import bcrypt from 'bcryptjs'

const user = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('qwerty123',8),
        isAdmin: true
    },
    {
        name: 'Taara',
        email: 'taara@gmail.com',
        password: bcrypt.hashSync('qwerty123',8),
    },
    {
        name: 'sakeena',
        email: 'sakeena@gmail.com',
        password: bcrypt.hashSync('qwerty123',8),
    }
]

export default user