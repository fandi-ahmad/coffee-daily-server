import { Request, Response } from "express";
import { createdDataResponse, successResponse, validationErrorResponse } from "@/helper/responseHelper";
import { errorResponse } from "@/helper/errorResponse";
import { UserService } from "@/services/user/userService";

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json(validationErrorResponse('email and password are required!'));
    return
  }
  
  try {
    await UserService.createUser({ email, password, role: "nonadmin" })
    res.status(201).json(createdDataResponse('user created successfully'));
  } catch (error: any) {
    return errorResponse(res, error)
  }
};


export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers()
    res.status(200).json(successResponse('ok', users));
  } catch (error: any) {
    return errorResponse(res, error)
  }
}

export const updateUserEmail = async (req: Request, res: Response) => {
  const { id } = req.params
  const { email } = req.body

  if (!email ) {
    res.status(400).json(validationErrorResponse('email are required!'));
    return
  }

  try {
    await UserService.updateUserEmail(Number(id), email)
    res.status(200).json(successResponse('User updated successfully'))
  } catch (error: any) {
    return errorResponse(res, error)
  }
}

export const updateUserPassword = async (req: Request, res: Response) => {
  const { id } = req.params
  const { old_password, new_password } = req.body

  if (!old_password || !new_password ) {
    res.status(400).json(validationErrorResponse('Password lama dan password baru dibutuhkan'));
    return
  }

  try {
    await UserService.updateUserPassword(Number(id), old_password, new_password)
    res.status(200).json(successResponse('Password user berhasil diperbarui'))
  } catch (error: any) {
    return errorResponse(res, error)
  }
}

