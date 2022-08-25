import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/prisma";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== 'GET') {
        res.status(405).json({
            status: 'error',
            message: 'Method not allowed'
        })
    }

    const id = req.query.id;
    const idSrt = Array.isArray(id) ? id[0] : id || '';
    const idNum = parseInt(idSrt);

    if (isNaN(idNum)) {
        res.status(400).json({
            status: 'error',
            message: 'Id must be a number'
        })
    }

    const character = await prisma.tog_character.findUnique({
        where: {
            id: idNum
        }
    });
    res.status(200).json(character);

}

export default handler;