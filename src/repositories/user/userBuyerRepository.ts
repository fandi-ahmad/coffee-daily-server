import prisma from "@/lib/prisma";
import { UserBuyerDTO } from "@/interface/UserDTO";

export const UserBuyerRepository = {
  create: async (data: UserBuyerDTO) => {
    return await prisma.user_Buyer.create({ data })
  },

  update: async (id: number, data: UserBuyerDTO) => {
    return await prisma.user_Buyer.update({
      where: { id },
      data: data
    })
  },

}