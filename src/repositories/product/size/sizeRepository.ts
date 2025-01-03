import prisma from "@/lib/prisma"
import { ToppingSizeDTO } from "@/interface/ToppingSizeDTO"

export const SizeRepository = {
  create: async (data: ToppingSizeDTO) => {
    return await prisma.size.create({ data })
  },

  update: async (id: number, data: ToppingSizeDTO) => {
    return await prisma.size.update({ where: { id }, data })
  },

  delete: async (id: number) => {
    return await prisma.size.delete({ where: { id } })
  },

  getAllByUserId: async (id: number) => {
    return await prisma.size.findMany({ where: { id } })
  },
}