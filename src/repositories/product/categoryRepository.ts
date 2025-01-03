import prisma from "@/lib/prisma"

export const CategoryRepository = {
  create: async (name: string) => {
    return await prisma.product_category.create({
      data: { name }
    })
  },

  update: async (id: number, name: string) => {
    return await prisma.product_category.update({
      where: { id },
      data: { name }
    })
  },

  delete: async (id: number) => {
    return await prisma.product_category.delete({where: { id }})
  },

  getAll: async () => {
    return await prisma.product_category.findMany()
  }
}