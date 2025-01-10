import jwt from 'jsonwebtoken';
import * as bcrypt from "bcrypt";
import prisma from '../db';

export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash);
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 5);
}

export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id,
        username: user.username,
    }, process.env.JWT_SECRET)

    return token;
}

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(401);
        res.json({ message: 'not autorized' });
        return;
    }

    const [_, token] = bearer.split(' ');

    if (!token) {
        res.status(401);
        res.json({ message: 'not valid token' });
        return;
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (e) {
        console.log(e);
        res.status(401);
        res.json({ message: 'not valid token' });
        return;
    }
}

export const signIn = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username,
        }
    });

    const isValidPassword = comparePasswords(req.body.password, user.password);

    if (!isValidPassword) {
        res.json(401)
    }
}