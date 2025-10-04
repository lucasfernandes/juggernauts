"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { routes } from "@/consts";
import Link from "next/link";
import { StateContext } from "../context/StateContext";
import { Transition } from "@headlessui/react";

export default function Nav() {
  const { page, setPage } = useContext(StateContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* DESKTOP */}
      <main
        id="top"
        className="hidden lg:flex w-full max-w-[1920px] h-[84px] bg-white bg-pixel bg-contain bg-center"
      >
        <div className="flex justify-center items-center w-full gap-[50px]">
          <Link href="/" className="hover:opacity-75 mr-16">
            <Image
              src="/header-logo.svg"
              width={310}
              height={69}
              placeholder="blur"
              blurDataURL="/logo.svg"
              alt="logo"
            />
          </Link>
          <div className="text-[#18191F] flex items-center text-center md:gap-6 2xl:gap-10 font-light md:text-[16px]">
            {routes.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`transition-all ${
                  item.title !== "Whitepaper" && "hover:border-b-[5px]"
                } border-green pb-1 relative ${
                  item.href === page.href && "border-b-[5px]"
                } `}
              >
                {item.title}
                {item.title === "Whitepaper" && (
                  <div className="absolute top-4 w-full text-center text-[10px] font-light text-black">
                    (Coming Soon)
                  </div>
                )}
              </Link>
            ))}
          </div>
          {/* <button
            className={`transition-all bg-green w-[198px] h-[49px] flex justify-center items-center rounded-lg text-white text-[20px] font-medium hover:scale-[1.02]`}
          >
            Connect Wallet
          </button> */}
        </div>
      </main>
      {/* MOBILE */}
      <main className="flex flex-col lg:hidden w-full relative z-20">
        <div className={`flex items-center w-full pt-[25px] px-[20px]`}>
          <div className="flex gap-2 sm:gap-4 items-center">
            <button
              onClick={() => setOpen(!open)}
              className="transition-all w-[59px] h-[53px] text-black p-1 px-2  rounded-lg hover:scale-[1.02]"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>
          <Link href="/" className="hover:opacity-75">
            <Image
              src="/header-logo.svg"
              width={210}
              height={69}
              placeholder="blur"
              blurDataURL="/logo.svg"
              alt="logo"
              className="mt-[-8px]"
            />
          </Link>
        </div>
        <Transition
          show={open}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          // onMouseLeave={() => setOpen(false)}
        >
          <div className="px-[20px]">
            <div className="flex flex-col w-full self-center pt-5 gap-1">
              {routes.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`
                    transition-all font-light text-[16px] text-gray bg-grayer p-4 bg-opacity-90 hover:bg-opacity-60 hover:text-white hover:border-l-[6px] hover:border-white rounded-lg shadow-md                     
                    ${
                      item.href === page.href &&
                      "border-l-[6px] hover:text-jugz-light hover:border-white"
                    }
                    
                  `}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </Transition>

        <div className="border-b border-jugz/40 pt-5 border-green-fss" />
      </main>
    </>
  );
}
