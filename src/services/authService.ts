import { AuthRepository } from "@/repositories/authRepository"
import { UserRepository } from "@/repositories/user/userRepository"
import { sign } from "jsonwebtoken"
import { BcryptPassword } from "@/utils/bcryptPassword"

export const AuthService = {
  async addOrUpdateAccessToken(id: number, token: string) {
    return await AuthRepository.addOrUpdateAccessToken(id, token)
  },

  async deleteAccessToken(id: number) {
    return await AuthRepository.deleteAccessToken(id)
  },

  async loginUser(email: string, password: string) {
    const user = await UserRepository.getUserByEmail(email)
    if (!user) {
      throw { status: 404, message: 'User is not found' }
    }

    const isMatch = await BcryptPassword.verify(password, user.password)
    if (!isMatch) {
      throw { status: 400, message: 'Password is wrong' }
    }

    const accessToken = sign({email: user.email}, 'coda-access-token', {
      expiresIn: '1d'
    })

    await AuthRepository.addOrUpdateAccessToken(user.id, accessToken)
    
    return { accessToken: accessToken, id: user.id, email: user.email }
  }
}