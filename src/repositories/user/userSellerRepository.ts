import prisma from "@/lib/prisma";
import { UserSellerDTO } from "@/interface/UserDTO";

export const UserSellerRepository = {
  create: async (data: UserSellerDTO) => {
    return await prisma.user_Seller.create({ data })
  },

  update: async (id: number, data: UserSellerDTO) => {
    return await prisma.user_Seller.update({
      where: { id },
      data: data
    })
  },

}