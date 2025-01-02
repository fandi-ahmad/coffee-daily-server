import { errorResponse } from "@/helper/errorResponse";
import { successResponse, validationErrorResponse } from "@/helper/responseHelper";
import { UserBuyerService } from "@/services/user/userBuyerService";
import { Request, Response } from "express";

export const updateUserBuyer = async (req: Request, res: Response) => {
  const { id } = req.params
  const { photo, username, phone_number, gender, address } = req.body

  if (!photo || !username || !phone_number || !gender || !address) {
    res.status(400).json(validationErrorResponse('Input belum sesuai!'));
    return
  }
  
  try {
    await UserBuyerService.updateUserBuyer(Number(id), { photo, username, phone_number, gender, address })
    res.status(200).json(successResponse('user berhasil diperbarui'))
  } catch (error: any) {
    return errorResponse(res, error)
  }
}