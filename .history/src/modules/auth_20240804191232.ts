import jwt from 'jsonwebtoken';

export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id,
        username: user.username,
    }, process.env.JWT_SECRET)

    return token;
}

export const protect = (req, res) => {
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

    } catch (e) {
        
    }
}