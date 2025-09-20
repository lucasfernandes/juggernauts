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
          <Link href="/" className="hover:opacity-75">
            <Image
              src="/header-logo.svg"
              width={310}
              height={69}
              placeholder="blur"
              blurDataURL="/logo.svg"
              alt="logo"
              className="pr-14"
            />
          </Link>
          <div className="text-[#18191F] flex items-center md:gap-6 2xl:gap-10 font-light md:text-[16px]">
            {routes.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`transition-all hover:border-b-[5px] border-green pb-1 ${
                  item.href === page.href && "border-b-[5px]"
                } `}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <button
            className={`transition-all bg-green w-[198px] h-[49px] flex justify-center items-center rounded-lg text-white text-[20px] font-medium hover:scale-[1.02]`}
          >
            Connect Wallet
          </button>
        </div>
      </main>
      {/* MOBILE */}
      <main className="flex flex-col hidden w-full bg-nav bg-no-repeat bg-cover relative z-20">
        <div
          className={`flex items-center justify-between w-full pt-[25px] px-[20px]`}
        >
          <div className="min-w-[138px] max-w-[138px] sm:min-w-[168px] sm:max-w-[168px]">
            <Link href="/" className="hover:opacity-75">
              <Image
                src="/logo-mobile.svg"
                width={68}
                height={164}
                placeholder="blur"
                blurDataURL="/logo-mobile.svg"
                alt="logo"
              />
            </Link>
          </div>

          <div className="flex gap-2 sm:gap-4 items-center">
            <button className="bg-jugz transition-all w-[100px] sm:w-[120px] h-[33px] flex justify-center items-center rounded-lg text-jugz-light text-[12px] sm:text-[14px] font-medium hover:scale-[1.02]">
              Connect Wallet
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="transition-all w-[39px] h-[33px] text-jugz p-1 px-2  rounded-lg hover:scale-[1.02]"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
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
                    transition-all font-light text-[16px] text-jugz-light bg-jugz p-4 bg-opacity-90 hover:bg-opacity-60 hover:text-jugz-light hover:border-l-[6px] hover:border-white border-purple-betz rounded-lg shadow-md                     
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
