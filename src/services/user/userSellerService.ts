import { UserService } from "./userService"
import { UserSellerDTO } from "@/interface/UserDTO"
import { UserSellerRepository } from "@/repositories/user/userSellerRepository"

export const UserSellerService = {
  async createUserSeller(id: number, data: UserSellerDTO) {
    await UserService.getUserById(id)
    return await UserSellerRepository.create(data)
  },

  async updateUserSeller(id: number, data: UserSellerDTO) {
    await UserService.getUserById(id)
    return await UserSellerRepository.update(id, data)
  }
}