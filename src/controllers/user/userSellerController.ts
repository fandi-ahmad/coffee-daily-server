import { errorResponse } from "@/helper/errorResponse";
import { successResponse, validationErrorResponse } from "@/helper/responseHelper";
import { UserSellerService } from "@/services/user/userSellerService";
import { Request, Response } from "express";

export const createUserSeller = async (req: Request, res: Response) => {
  const { id } = req.params
  const { photo, username, address } = req.body

  if (!photo || !username || !address) {
    res.status(400).json(validationErrorResponse('Input belum sesuai!'));
    return
  }

  try {
    await UserSellerService.createUserSeller(Number(id), { photo, username, address })
    res.status(200).json(successResponse('user seller berhasil dibuat'))
  } catch (error: any) {
    return errorResponse(res, error)
  }
}

export const updateUserSeller = async (req: Request, res: Response) => {
  const { id } = req.params
  const { photo, username, address } = req.body

  if (!photo || !username || !address) {
    res.status(400).json(validationErrorResponse('Input belum sesuai!'));
    return
  }
  
  try {
    await UserSellerService.updateUserSeller(Number(id), { photo, username, address })
    res.status(200).json(successResponse('user seller berhasil diperbarui'))
  } catch (error: any) {
    return errorResponse(res, error)
  }
}