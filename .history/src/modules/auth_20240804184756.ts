import jwt from 'jsonwebtoken';

export const createJWT = () => {
    const token = jwt.sign({
        id: userInfo.id,
    })
}