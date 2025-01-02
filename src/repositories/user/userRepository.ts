import prisma from "@/lib/prisma";
import { UserDTO, UserUpdateDTO } from "@/interface/UserDTO";

export const UserRepository = {
  createUser: async (data: UserDTO) => {
    return await prisma.user.create({ data });
  },

  getUserById: async (id: number) => {
    return await prisma.user.findUnique({ where: { id } })
  },

  getUserByEmail: async (email: string) => {
    return await prisma.user.findFirst({ where: { email } })
  },
  
  getAllUsers: async () => {
    return await prisma.user.findMany({
      select: { id: true, email: true }
    })
  },

  getUserByAccessToken: async (access_token: string) => {
    return await prisma.user.findFirst({ where: { access_token } })
  },

  updateUser: async (id: number, data: UserUpdateDTO) => {
    return await prisma.user.update({
      where: { id },
      data: data
    })
  },

  deleteUser: async (id: number) => {
    return await prisma.user.delete({ where: { id } })
  },

}