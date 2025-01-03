import prisma from "@/lib/prisma"

export const ProductSizeRepository = {
  create: async (id_product: number, id_size: number) => {
    return await prisma.product_Size.create({
      data: { id_product, id_size }
    })
  },

  getAllById: async (id: number) => {
    return await prisma.product_Size.findMany({ where: { id } })
  },

  delete: async (id: number) => {
    return await prisma.product_Size.delete({ where: { id } })
  },

  deleteAllByProductId: async (id: number) => {
    return await prisma.product_Size.deleteMany({ where: { id_product: id } })
  }
}