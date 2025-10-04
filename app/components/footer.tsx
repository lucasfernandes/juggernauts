import Link from "next/link";
import Image from "next/image";
import { docs, socials } from "@/consts";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center w-full pt-[70px] min-h-[244px] xl:min-h-[324px] bg-black text-[10px] leading-3 xl:text-xs gap-6 xl:gap-[160px] text-white">
        <div className="flex flex-col text-sm gap-6">
          <Image
            src="/header-logo.svg"
            width={310}
            height={69}
            placeholder="blur"
            blurDataURL="/logo.svg"
            alt="logo"
            className="mt-[-10px] xl:mt-[-20px] ml-[-10px] w-[180px] xl:w-[310px]"
          />
          <div className="flex xl:hidden flex-col gap-2 mt-[-12px]">
            <p>
              Copyright 2025 © <br />
              Juggernauts Fantasy Sports.
            </p>
            <p>All rights reserved. </p>
          </div>
          <div className="hidden xl:flex flex-col gap-2">
            <p>Copyright 2025 © Juggernauts Fantasy Sports.</p>
            <p>All rights reserved. </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Links</h2>
          <div className="flex flex-col gap-2 text-gray">
            {socials.map((item, index) => (
              <Link key={index} href={item.href} target={item.target}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Docs</h2>
          <div className="flex flex-col gap-2 text-gray">
            {docs.map((item, index) => (
              <Link
                key={index}
                target="blank"
                href={item.href}
                className={
                  item.href === "#" ? "pointer-events-none cursor-default" : ""
                }
              >
                {item.title}{" "}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden flex-col gap-4">
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
