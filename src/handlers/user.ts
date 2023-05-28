import prisma from "../db"
import { comparePasswords, createJWT, hashPassword } from "../modules/auth"

// Creates a user/ sign up
export const createUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: await hashPassword(req.body.password),
            phone: req.body.phone,
            birthdate: req.body.birthdate,
            homeAddress: req.body.homeAdress,
        }
    })

    const token = createJWT(user)
    res.json({ token })
}

export const signIn = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email
        }
    })

    const isValid = await comparePasswords(req.body.password, user.password)

    if (!isValid) {
        res.status(401)
        res.json({ message: 'Invalid password' })
    }

    const token = createJWT(user)
    res.json({ token })
}