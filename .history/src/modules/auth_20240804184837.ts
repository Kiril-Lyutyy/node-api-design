import jwt from 'jsonwebtoken';

export const createJWT = () => {
    const token = jwt.sign({
        id: user.id,
        username: user.username,
    }, process.env.JWT_SECRET)
}