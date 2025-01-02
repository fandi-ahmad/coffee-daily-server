import prisma from "@/lib/prisma";
import { UserBuyerDTO } from "@/interface/UserDTO";

export const UserBuyerRepository = {
  createUserBuyer: async (data: UserBuyerDTO) => {
    return await prisma.user_Buyer.create({ data })
  },

  updateUserBuyer: async (id: number, data: UserBuyerDTO) => {
    return await prisma.user_Buyer.update({
      where: { id },
      data: data
    })
  },

}