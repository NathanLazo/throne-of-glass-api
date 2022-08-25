import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/prisma";

type QueryConfig = {
    skip?: number;
    take?: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== 'GET') {
        res.status(405).json({
            status: 'error',
            message: 'Method not allowed'
        })
    }

    const limit = req.query.limit;
    const limitSrt = Array.isArray(limit) ? limit[0] : limit;

    const skip = req.query.skip;
    const skipSrt = Array.isArray(skip) ? skip[0] : skip;

    const queryConfig: QueryConfig = {};

    if (limitSrt) {
        const take = parseInt(limitSrt);
        if (isNaN(take)) {
            res.status(400).json({
                status: 'error',
                message: 'Limit must be a number'
            })
        }
        queryConfig.take = take;
    }

    if (skipSrt) {
        const skip = parseInt(skipSrt);
        if (isNaN(skip)) {
            res.status(400).json({
                status: 'error',
                message: 'Skip must be a number'
            })
        }
        queryConfig.skip = skip;
    }

const characters = await prisma.tog_character.findMany(queryConfig);

return res.status(200).json(characters);
}

export default handler;