import prisma from "@/lib/prisma";
import { ProductDTO } from "@/interface/ProductDTO";

export const ProductRepository = {
  create: async (data: ProductDTO) => {
    return await prisma.products.create({ data })
  },

  update: async (id: number, data: ProductDTO) => {
    return await prisma.products.update({
      where: { id },
      data: data
    })
  },

  delete: async (id: number) => {
    return await prisma.products.delete({ where: { id } })
  },

  getAll: async () => {
    return await prisma.products.findMany()
  },

  getById: async (id: number) => {
    return await prisma.products.findFirst({ where: { id } })
  },

  getByUserId: async (id: number) => {
    return await prisma.products.findMany({ where: { id_user_seller: id } })
  },

  getByCategoryId: async (id: number) => {
    return await prisma.products.findMany({ where: { id_category: id } })
  },

}