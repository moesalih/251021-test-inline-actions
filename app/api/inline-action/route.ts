import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

  const body = await request.json();
  console.log(body)

  return Response.json({
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

}