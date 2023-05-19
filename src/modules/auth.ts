import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// compares the password that the user sends us with the hashed password in the database
export const comparePasswords = (password, hashedPassword ) => {
    return bcrypt.compare(password, hashedPassword) // returns a promisee
}

// hashes the password
export const hashPassword = (password) => {
    return bcrypt.hash(password, 5) // returns a promisee
}

// Converts an object to a cryptic string (jwt)
export const createJWT = (user) => {
    const token = jwt.sign({
            id: user.id, 
            email: user.email
        },
        process.env.JWT_SECRET        
    )
    return token
}

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        res.status(401)
        res.json({ message: 'No Authorization' })
        return
    }

    const [, token] = bearer.split(' ')
    
    if (!token) {
        res.status(401)
        res.json({ message: 'No token' })
        return
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    } catch (error) {
        console.log(error)
        res.status(401)
        res.json({ message: 'Not valid token' })
        return
    }
}