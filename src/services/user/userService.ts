import { UserDTO } from "@/interface/UserDTO"
import { UserRepository } from "@/repositories/user/userRepository"
import { UserBuyerRepository } from "@/repositories/user/userBuyerRepository"
import { BcryptPassword } from "@/utils/bcryptPassword"

export const UserService = {
  async createUser(data: UserDTO) {
    if (data.password.length < 8) {
      throw { status: 400, message: 'The password must not be less than 8 characters' }
    } else if (data.email.includes(' ')) {
      throw { status: 400, message: 'Email cannot contain spaces' }
    } else {
      const hashedPassword = await BcryptPassword.hash(data.password)
      await UserRepository.createUser({
        email: data.email,
        password: hashedPassword,
        role: 'nonadmin'
      })

      await UserBuyerRepository.createUserBuyer({
        username: '',
        photo: '',
        address: '',
        phone_number: ''
      })
    }
  },

  async getUserById(id: number) {
    const user = await UserRepository.getUserById(id)
       
    if (!user) {
      throw { status: 404, message: `User with ID ${id} is not found` }
    }
    return user
  },

  async getAllUsers() {
    return UserRepository.getAllUsers()
  },

  async updateUserEmail(id: number, email: string) {
    if (email && email.includes(' ')) {
      throw { status: 400, message: 'Email tidak valid' }
    } else {
      await this.getUserById(id)
      return await UserRepository.updateUser(id, { email })
    }
  },

  async updateUserPassword(id: number, old_password: string, new_password: string) {
    const user = await this.getUserById(id)
    const isTruePassword = await BcryptPassword.verify(old_password, user.password)
    
    if (!isTruePassword) {
      throw { status: 400, message: `Password lama salah!` }
    }

    const hashedPassword = await BcryptPassword.hash(new_password)
    return await UserRepository.updateUser(id, {
      password: hashedPassword
    })
  },


}