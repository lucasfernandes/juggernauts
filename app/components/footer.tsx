import Link from "next/link";
import Image from "next/image";
import { socials } from "@/consts";

export default function Footer() {
  return (
    <>
      {/* DESKTOP */}
      <footer className="flex justify-center w-full pt-[70px] min-h-[324px] bg-black text-xs gap-[160px] text-white">
        <div className="flex flex-col text-sm gap-6">
          <Image
            src="/header-logo.svg"
            width={310}
            height={69}
            placeholder="blur"
            blurDataURL="/logo.svg"
            alt="logo"
            className="mt-[-20px] ml-[-10px]"
          />
          <div className="flex flex-col gap-2">
            <p>Copyright 2025 © Juggernauts Fantasy Sports.</p>
            <p>All rights reserved. </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Links</h2>
          <div className="flex flex-col gap-2 text-gray">
            {socials.map((item, index) => (
              <Link key={index} href={item.href} target="blank">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Docs</h2>
          <div className="flex flex-col gap-2 text-gray">
            <Link target="blank" href="https://medium.com/juggernauts-sports">
              Medium
            </Link>
            <Link href="#">Whitepaper</Link>
            <Link href="#">Pitch Deck</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Never miss an update</h2>
          <div className="flex relative w-[255px] h-[40px]">
            <input
              type="text"
              placeholder="Your email address"
              className="w-[255px] h-[40px] bg-grayer rounded-xl px-4 text-gray placeholder-gray"
            />
            <button className="w-[18px] h-[18px] absolute top-3 right-4">
              <Image src="/send.svg" width={18} height={18} alt="logo" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
