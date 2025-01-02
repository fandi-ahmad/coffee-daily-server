import { UserRepository } from "@/repositories/user/userRepository";
import { Request, Response, NextFunction } from "express"

export const verifyToken =  (req: Request, res: Response, next: NextFunction): void => {
  (async () => {
    try {
      const { access_token } = req.headers

      if (access_token && typeof access_token === 'string') {
        const user = await UserRepository.getUserByAccessToken(access_token)
        if (!user) {
          return res.status(401).json({ status: 401, message: "Unauthorized" });
        }
        return next()
      } else {
        return res.status(401).json({ status: 401, message: "Unauthorized" });
      }
    } catch (error) {
      res.status(500).json({ status: 500, message: "Internal server error" });
    }
  })()
}