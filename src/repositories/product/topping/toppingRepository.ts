import prisma from "@/lib/prisma"
import { ToppingSizeDTO } from "@/interface/ToppingSizeDTO"

export const ToppingRepository = {
  create: async (data: ToppingSizeDTO) => {
    return await prisma.topping.create({ data })
  },

  update: async (id: number, data: ToppingSizeDTO) => {
    return await prisma.topping.update({ where: { id }, data })
  },

  delete: async (id: number) => {
    return await prisma.topping.delete({ where: { id } })
  },

  getAllByUserId: async (id: number) => {
    return await prisma.topping.findMany({ where: { id } })
  },
}