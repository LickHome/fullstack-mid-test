import { NextApiRequest, NextApiResponse } from 'next';

/**
 * For more info on API and Dynamic API routes please read the nextJS docs here
 * https://nextjs.org/docs/api-routes/introduction
 */

const singleCharacterCtrl = (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  res.status(200).json(slug);
};

export default singleCharacterCtrl;
