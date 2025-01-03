import prisma from "@/lib/prisma"

export const ProductToppingRepository = {
  create: async (id_product: number, id_topping: number) => {
    return await prisma.product_Topping.create({
      data: { id_product, id_topping }
    })
  },

  // multiCreate: async (id_product: number, id_topping: number[]) => {
  //   return await prisma.product_Topping.createMany({
  //     data: [
  //       // { id_product, id_topping },
  //     ]
  //   })
  // },

  getAllById: async (id: number) => {
    return await prisma.product_Topping.findMany({ where: { id } })
  },

  delete: async (id: number) => {
    return await prisma.product_Topping.delete({ where: { id } })
  },

  deleteAllByProductId: async (id: number) => {
    return await prisma.product_Topping.deleteMany({ where: { id_product: id } })
  }
}