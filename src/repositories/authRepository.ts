import prisma from "@/lib/prisma";

export const AuthRepository = {
  addOrUpdateAccessToken: async (id: number, token: string) => {
    return await prisma.user.update({
      where: { id },
      data: { access_token: token }
    })
  },
  
  deleteAccessToken: async (id: number) => {
    return await prisma.user.update({
      where: { id },
      data: { access_token: '' }
    })
  }
}