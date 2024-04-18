import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/libs/index";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    res.status(200).json({name:'Abbas'})
} 

