import { UserBuyerRepository } from "@/repositories/user/userBuyerRepository"
import { UserService } from "./userService"
import { UserBuyerDTO } from "@/interface/UserDTO"

export const UserBuyerService = {
  async updateUserBuyer(id: number, data: UserBuyerDTO) {
    await UserService.getUserById(id)
    return await UserBuyerRepository.update(id, data)
  }
}