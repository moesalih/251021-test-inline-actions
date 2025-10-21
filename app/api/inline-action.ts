import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

    res.status(200).json({
      message: 'test',
      success: true,
      embed: {
        imageUrl: 'https://imgur.com/NgvRfSF.png',
        buttons: [
          {
            title: 'Event Details...',
            url: 'https://frames-v2-demo-lilac.vercel.app/test?answer=true&payment=false',
            variant: 'outlined',
          },
        ],

      },
    });


  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}