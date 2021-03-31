import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body) {
    console.log(req.body);
  } else if (req.query) {
    console.log(req.query);
  }

  res.status(200).send({ success: true });
};
