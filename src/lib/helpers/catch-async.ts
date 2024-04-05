import { NextApiResponse, NextApiRequest } from "next"

export const catchAsync = (fn: any) => {
  return async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    try {
      await fn(req, res, next)
    } catch (err) {
      next(err)
    }
  }
}
