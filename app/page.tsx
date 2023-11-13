"use client";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";

// Font files can be colocated inside of `app`
const pixeBoy = localFont({
  src: "./Pixeboy.woff2",
  display: "swap",
});

const prognosticators = [
  "Create your SocialBetz Zone ",
  "Post your sports bets, sports betting strategies, and related content ",
  "Achieve a high betting win rate ",
  "Gain a following",
  "Earn crypto rewards",
];

const bettors = [
  "Create a SocialBetz Account",
  "Choose a SocialBetz Zone subscription level",
  "Follow top Social Prognosticator's SocialBetz Zones",
  "Copy bet top Social Prognosticators directly on site",
  "Achieve an amazing sports betting win rate ",
];

export default function Home() {
  const [fss, setFss] = useState(false);
  const [sb, setSb] = useState(false);
  const [ss, setSs] = useState(false);

  return (
    <main id="main" className="flex flex-col w-full max-w-[1920px] relative">
      {/* TOP BANNER */}
      <section className="flex flex-col py-16 gap-10 xl:gap-0">
        <div className="flex justify-center sm:justify-start items-center xl:py-[70px] px-[26px] xl:px-[100px] gap-4 xl:gap-20">
          <Image
            src="/logo-head.svg"
            width={118}
            height={113}
            placeholder="blur"
            blurDataURL="/logo-head.svg"
            alt="logo"
            className="xl:hidden"
          />
          <Image
            src="/logo-head.svg"
            width={448}
            height={443}
            placeholder="blur"
            blurDataURL="/logo-head.svg"
            alt="logo"
            className="hidden xl:block transition-all hover:scale-[1.03] hover:-rotate-[360deg]"
          />

          <div className="flex flex-col text-white z-10 max-w-[920px]">
            <div className="flex flex-col gap-2 font-bold text-[50px] xl:text-[100px] leading-[46px] xl:leading-[110px]">
              <p className={`text-jugz ${pixeBoy.className}`}>
                JUGGERNAUTS <span className="text-white">SPORTS</span>
              </p>
              <p
                className={`font-medium text-[26px] xl:text-[52px] leading-[35px] xl:leading-[60px] 2xl:leading-[65px]`}
              >
                Bringing Sports Fans into the Web3 world through innovative
                SportFi dApps that are very{" "}
                <span className="text-jugz">rewarding</span>, highly{" "}
                <span className="text-jugz">intuitive</span>, and extremely{" "}
                <span className="text-jugz">fun</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHATS IS SPORTIFI */}
      <section
        id="sportifi"
        className="bg-black bg-jugz2 xl:bg-numbers bg-no-repeat bg-center"
      >
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-16 bg-black/60 shadow-inner relative  transition-all hover:pl-20">
          <Image
            src="/section-arrows.svg"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL="/section-arrows.svg"
            alt="game modes"
            className="w-[40px] xl:w-[180px] absolute left-[-50px] top-8"
          />
          <p className={`text-jugz pl-16 ${pixeBoy.className}`}>
            What is SportFi?
          </p>
        </div>
        <div className="flex flex-col  gap-16 text-white xl:pb-24">
          <div className="flex justify-between items-center xl:px-[100px] xl:mt-16 relative">
            <div className="flex flex-col gap-10 w-full xl:max-w-[1000px] px-[22px] xl:px-0 pt-10 pb-10 z-10">
              <p className={`text-[24px] xl:text-[34px] xl:leading-[46px]`}>
                SportFi, a portmanteau of{" "}
                <span className="text-jugz">Sport</span> and{" "}
                <span className="text-jugz">Finance</span> is an amalgamation of
                real word professional sports and finance that allows for the
                creation of novel decentralized applications that are built
                using blockchain technology.
              </p>
              <p className={`text-[24px] xl:text-[34px] xl:leading-[46px]`}>
                With the integration of smart contracts, non fungible tokens,
                and cryptocurrencies, Juggernauts will disrupt the ways in which
                sports fans enjoy their favorite sports and engage with their
                favorite athletes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSET SPORTS */}
      <section
        id="ecosystem"
        className="bg-black bg-jugz2 xl:bg-numbers bg-no-repeat bg-center"
      >
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-16 bg-black/60 shadow-inner relative transition-all hover:pl-20">
          <Image
            src="/section-arrows.svg"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL="/section-arrows.svg"
            alt="game modes"
            className="w-[40px] xl:w-[180px] absolute left-[-50px] top-8"
          />
          <p className={`text-jugz pl-16 ${pixeBoy.className}`}>
            FullSet Sports
          </p>
        </div>
        <div className="flex flex-col  gap-16 text-white xl:pb-24 relative w-full h-[700px] max-h-[700px] bg-fss bg-bottom bg-cover">
          <button className="w-full h-full" onMouseEnter={() => setFss(true)}>
            <Image
              src="/fss.png"
              placeholder="blur"
              blurDataURL="/fss.png"
              alt="game modes"
              fill
              className="absolute w-full h-full"
            />
          </button>
          <Transition
            show={fss}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            onMouseLeave={() => setFss(false)}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-amber-950/50 flex items-center justify-center">
              <Link
                href="https://fullset-sports.vercel.app/"
                target="blank"
                className={`transition-all bg-jugz w-[198px] h-[49px] flex justify-center items-center rounded-lg text-white text-[20px] font-medium hover:scale-[1.02] shadow-lg ${pixeBoy.className}`}
              >
                Learn more
              </Link>
            </div>
          </Transition>
        </div>
      </section>

      {/* SOCIAL BETZ */}
      <section className="bg-black bg-jugz2 xl:bg-numbers bg-no-repeat bg-center">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-16 bg-black/60 shadow-inner relative transition-all hover:pl-20">
          <Image
            src="/section-arrows.svg"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL="/section-arrows.svg"
            alt="arrow"
            className="w-[40px] xl:w-[180px] absolute left-[-50px] top-8"
          />
          <p className={`text-jugz pl-16 ${pixeBoy.className}`}>Socialbetz</p>
        </div>
        <div className="flex flex-col  gap-16 text-white xl:pb-24 relative w-full h-[700px] max-h-[700px] bg-fss bg-bottom bg-cover">
          <button className="w-full h-full" onMouseEnter={() => setSb(true)}>
            <Image
              src="/sb.png"
              placeholder="blur"
              blurDataURL="/sb.png"
              alt="SocialBetz"
              fill
              className="absolute w-full h-full"
            />
          </button>
          <Transition
            show={sb}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            onMouseLeave={() => setSb(false)}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-amber-950/50 flex items-center justify-center">
              <Link
                href="https://socialbetz.vercel.app/"
                target="blank"
                className={`transition-all bg-jugz w-[198px] h-[49px] flex justify-center items-center rounded-lg text-white text-[20px] font-medium hover:scale-[1.02] shadow-lg ${pixeBoy.className}`}
              >
                Learn more
              </Link>
            </div>
          </Transition>
        </div>
      </section>

      {/* SPORT STUFF */}
      <section className="bg-black bg-jugz2 xl:bg-numbers bg-no-repeat bg-center z-20">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-16 bg-black/60 shadow-inner relative transition-all hover:pl-20">
          <Image
            src="/section-arrows.svg"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL="/section-arrows.svg"
            alt="arrow"
            className="w-[40px] xl:w-[180px] absolute left-[-50px] top-8"
          />
          <p className={`text-jugz pl-16 ${pixeBoy.className}`}>SPORTSTUF</p>
        </div>
        <div className="flex flex-col  gap-16 text-white xl:pb-24 relative w-full h-[700px] max-h-[700px] bg-fss bg-bottom bg-cover">
          <button className="w-full h-full" onMouseEnter={() => setSs(true)}>
            <Image
              src="/ss.png"
              placeholder="blur"
              blurDataURL="/ss.png"
              alt="SportStuff"
              fill
              className="absolute w-full h-full"
            />
          </button>
          <Transition
            show={ss}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            onMouseLeave={() => setSs(false)}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-amber-950/50 flex items-center justify-center">
              <Link
                href="#"
                className={`transition-all bg-jugz w-[198px] h-[49px] flex justify-center items-center rounded-lg text-white text-[20px] font-medium hover:scale-[1.02] shadow-lg ${pixeBoy.className}`}
              >
                Learn more
              </Link>
            </div>
          </Transition>
        </div>
      </section>

      {/* JUGZ TOKEN */}
      <section
        id="jugz"
        className="bg-black bg-jugz5 xl:bg-numbers bg-no-repeat bg-center"
      >
        <div className="flex flex-col  gap-16 text-white xl:pb-24">
          <div className="flex justify-between items-center xl:px-[100px] xl:mt-16 relative">
            <div className="flex flex-col gap-14 w-full xl:max-w-[1000px] px-[22px] xl:px-0 pt-10 pb-10 z-10">
              <p
                className={`text-[24px] xl:text-[134px] xl:leading-[46px] ${pixeBoy.className}`}
              >
                $JUGZ TOKEN
              </p>
              <p
                className={`text-[24px] xl:text-[34px] xl:leading-[46px] max-w-[800px]`}
              >
                The $JUGZ token is the medium of exchange for all products and
                services within the juggernauts SportFi ecosystem.
              </p>
            </div>
            <Image
              src="/coins.svg"
              width={180}
              height={180}
              placeholder="blur"
              blurDataURL="/coins.svg"
              alt="coins"
              className="w-[40px] xl:w-[680px] absolute right-0 top-[-130px] z-0 transition-all hover:scale-[1.03] hover:right-10 duration-300"
            />
          </div>
          <div className="flex items-center gap-16 xl:px-[100px]">
            <div className="flex flex-col bg-black/70 border border-jugz rounded-[8px] p-5 text-center min-w-[300px] max-w-[300px] transition-all hover:scale-[1.03]">
              <p className={`text-6xl text-white ${pixeBoy.className}`}>
                1B $JUGZ
              </p>
              <p className="text-[16px] text-jugz">Total Supply</p>
            </div>
            <div className="flex flex-col bg-black/70 border border-jugz rounded-[8px] p-5 text-center min-w-[300px] max-w-[300px] transition-all hover:scale-[1.03]">
              <p className={`text-6xl text-white ${pixeBoy.className}`}>
                $15M USD
              </p>
              <p className="text-[16px] text-jugz">Fully-dilluted Valuation</p>
            </div>
            <div className="flex flex-col bg-black/70 border border-jugz rounded-[8px] p-5 text-center min-w-[300px] max-w-[300px] transition-all hover:scale-[1.03]">
              <p className={`text-6xl text-white ${pixeBoy.className}`}>
                $450K USD
              </p>
              <p className="text-[16px] text-jugz">
                Circulating market cap at TGE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-jugz4 bg-section bg-no-repeat bg-center">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-16 bg-gradient-to-r from-jugz/20 to-black shadow-inner relative transition-all hover:pl-20">
          <Image
            src="/section-arrows.svg"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL="/section-arrows.svg"
            alt="game modes"
            className="w-[40px] xl:w-[180px] absolute left-[-50px] top-8"
          />
          <p className={`text-jugz pl-16 ${pixeBoy.className}`}>Our Team</p>
        </div>

        <div className="hidden md:flex gap-24 items-center flex-wrap px-[26px] xl:px-[100px] xl:mt-16 relative py-24">
          <div className="flex flex-col justify-center items-center w-[200px] h-[200px] xl:w-[350px] xl:h-[350px] bg-jugz/70 border border-jugz rounded transition-all hover:scale-[1.02] hover:rounded-[100px] hover:bg-jugz">
            <Image
              src="/logo-head.svg"
              width={200}
              height={339}
              placeholder="blur"
              blurDataURL="/logo-head.svg"
              alt="social betz"
              className="drop-shadow-xl"
            />
            <p className={`text-3xl text-white ${pixeBoy.className}`}>Name</p>
            <p className="font-bold">Label</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[200px] h-[200px] xl:w-[350px] xl:h-[350px] bg-jugz/70 border border-jugz rounded transition-all hover:scale-[1.02] hover:rounded-[100px] hover:bg-jugz">
            <Image
              src="/logo-head.svg"
              width={200}
              height={339}
              placeholder="blur"
              blurDataURL="/logo-head.svg"
              alt="social betz"
              className="drop-shadow-xl"
            />
            <p className={`text-3xl text-white ${pixeBoy.className}`}>Name</p>
            <p className="font-bold">Label</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[200px] h-[200px] xl:w-[350px] xl:h-[350px] bg-jugz/70 border border-jugz rounded transition-all hover:scale-[1.02] hover:rounded-[100px] hover:bg-jugz">
            <Image
              src="/logo-head.svg"
              width={200}
              height={339}
              placeholder="blur"
              blurDataURL="/logo-head.svg"
              alt="social betz"
              className="drop-shadow-xl"
            />
            <p className={`text-3xl text-white ${pixeBoy.className}`}>Name</p>
            <p className="font-bold">Label</p>
          </div>
        </div>

        <div className="flex md:hidden flex-col items-center justify-center gap-10 py-10">
          <div className="p-4 bg-white">
            <Image
              src="/logo-head.svg"
              width={200}
              height={339}
              placeholder="blur"
              blurDataURL="/logo-head.svg"
              alt="social betz"
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* BUTTON TO TOP */}
      <Link
        href="#top"
        className="fixed bottom-24 right-24 bg-black/90 p-2 rounded-lg text-jugz/90 z-30 transition-all hover:scale-[1.03] hover:text-jugz"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          className="bi bi-chevron-double-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </Link>
    </main>
  );
}
