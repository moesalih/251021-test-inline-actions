import type { Metadata } from 'next'
import Image from "next/image";

import { appUrl, description, title } from '@/lib/metadata'


const miniapp = {
  version: '1',
  // imageUrl: `${appUrl}/opengraph-image`,
  imageUrl: `https://imgur.com/5ze4aZw.png`,
  button: {
    title: 'Launch Frame',
    action: {
      type: 'launch_frame',
      name: title,
      // url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: '#111111',
    },
  },
  buttons: [
    {
      title: 'RSVP Yes',
      variant: 'filled',
      action: {
        type: 'api_call',
        url: 'https://251021-test-inline-actions.vercel.app/api/inline-action',
      },
    },
    // {
    //   title: 'RSVP No',
    //   variant: 'outlined',
    //   action: {
    //     type: 'api_call',
    //     url: 'https://251021-test-inline-actions.vercel.app/api/inline-action',
    //   },
    // },
    {
      title: 'Event Details',
      variant: 'outlined',
      action: {
        type: 'launch_frame_tray',
        // url: 'https://frames-v2-demo-lilac.vercel.app/test?answer=true&payment=false',
        url: 'https://251021-test-inline-actions.vercel.app/event',
      },
    },
    {
      title: 'Share',
      variant: 'outlined',
      action: {
        type: 'sdk_action',
        sdkAction: 'actions.composeCast',
        options: {
          text: 'Check out this event!',
          embeds: ['https://251021-test-inline-actions.vercel.app/event'],
        },
      },
    },
  ],

}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
    other: {
      'fc:miniapp': JSON.stringify(miniapp),
    },
  }
}


export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Farcaster Fridays</h1>
        <div className="flex flex-col gap-8 items-center sm:items-start">
          <img
            src="https://imgur.com/5ze4aZw.png"
            alt="Event Image"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div className="max-w-xl">
            <p className="mb-4">
              Join us for Farcaster Fridays, an exciting event dedicated to exploring the latest advancements in decentralized social networking and blockchain technology. Whether you're a developer, enthusiast, or just curious about the future of social media, this event offers something for everyone.
            </p>
            <p className="mb-4">
              Date: March 15-17, 2024<br />
              Location: Silicon Valley Conference Center, CA<br />
              Registration Fee: $299 (Early Bird Discount Available)
            </p>
            <p>
              Don't miss out on this opportunity to connect with like-minded individuals and stay ahead in the ever-evolving tech landscape. Register now to secure your spot!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
