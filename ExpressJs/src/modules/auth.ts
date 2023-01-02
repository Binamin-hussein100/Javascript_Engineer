import jwt from 'jsonwebtoken'

export const createJWT = (user)=>{
      const token = jwt.sign({id: user.id, username: user.username, password: user.username},process.env.JWT_SECRET)
      return token
}
