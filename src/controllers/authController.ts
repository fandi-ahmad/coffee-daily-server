import { Request, Response } from "express";
import { successResponse, validationErrorResponse } from "@/helper/responseHelper";
import { errorResponse } from "@/helper/errorResponse";
import { AuthService } from "@/services/authService";

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).json(validationErrorResponse('username and password required'))
    return
  }

  try {
    const data = await AuthService.loginUser(username, password)
    
    res.header('Access-Control-Allow-Credentials', 'true');
    res.status(200).json(successResponse('Login succesfully', data))
  } catch (error: any) {
    errorResponse(res, error)
  }
}

export const logoutUser = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await AuthService.deleteAccessToken(Number(id))
    res.status(200).json(successResponse('Logout succesfully'))
  } catch (error: any) {
    errorResponse(res, error)
  }
}