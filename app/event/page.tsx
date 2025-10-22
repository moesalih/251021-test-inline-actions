import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Farcaster Fridays</h1>
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <Image
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
