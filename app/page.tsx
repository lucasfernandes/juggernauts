"use client";
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import { partners, socials } from "@/consts";
import Link from "next/link";

const jersey25 = localFont({
  src: "./Jersey25-Regular.woff2",
  display: "swap",
});

export default function Home() {
  return (
    <main
      id="main"
      className="flex flex-col justify-center items-center w-full bg-white text-[18px]"
    >
      <div className="flex flex-col w-full">
        {/* HERO */}
        <section className="flex flex-col items-center bg-hero-mobile bg-center xl:bg-hero bg-cover bg-no-repeat w-full h-[350px] sm:h-[500px] md:h-[671px] 2xl:h-[871px]">
          <Image
            src="/hero-text.svg"
            width={804}
            height={206}
            alt="logo"
            className="mt-[20px] xl:mt-[70px] w-[340px] sm:w-[500px] md:w-[700px] lg:w-[804px]"
          />
        </section>
        <div className="w-full h-2 bg-black" />

        <section
          id="how-it-works"
          className="flex xl:hidden flex-col justify-center pt-14 bg-pixel bg-top bg-cover bg-no-repeat w-full h-full min-h-[479px]"
        >
          <h2
            className={`block xl:hidden px-5 font-bold text-[36px] leading-[44px] ${jersey25.className}`}
          >
            How It Works
          </h2>
          {/* <Image
            src="/how-it-works-side.svg"
            width={442}
            height={443}
            alt="logo"
          /> */}
          <div className="flex flex-col gap-4 text-lg pt-5 px-5">
            <div className="flex flex-col justify-center gap-6 bg-gray/40 rounded-lg h-30 p-5 border border-white shadow-md">
              <h2 className="text-xl text-emerald-700 font-semibold uppercase">
                Purchase
              </h2>
              <div className="leading-tight text-lg">
                <span className="text-grayer/80 font-medium">
                  Juggernauts Fantasy Player Card Packs.
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 bg-gray/40 rounded-lg h-30 p-5 border border-white shadow-md">
              <h2 className="text-xl text-emerald-700 font-semibold uppercase">
                Build
              </h2>
              <div className="leading-tight text-lg">
                your{" "}
                <span className="text-grayer/80 font-medium">
                  Juggernauts Roster
                </span>{" "}
                on our peer-to-peer marketplace.
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 bg-gray/40 rounded-lg h-30 p-5 border border-white shadow-md">
              <h2 className="text-xl text-emerald-700 font-semibold uppercase">
                Deploy
              </h2>
              <div className="leading-tight text-lg">
                Your cards in weekly{" "}
                <span className="text-grayer/80 font-medium">
                  fantasy sports contests.
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 bg-gray/40 rounded-lg h-30 p-5 border border-white shadow-md">
              <h2 className="text-xl text-emerald-700 font-semibold uppercase">
                Score
              </h2>
              <div className="leading-tight text-lg">
                Points based on the{" "}
                <span className="text-grayer/80 font-medium">
                  real-divfe performance
                </span>{" "}
                of your Juggernauts roster.{" "}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 bg-gray/40 rounded-lg h-30 p-5 border border-white shadow-md">
              <h2 className="text-xl text-emerald-700 font-semibold uppercase">
                Own
              </h2>
              <div className="leading-tight text-lg">
                The competition and{" "}
                <span className="text-grayer/80 font-medium">win BIG!</span>
              </div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="hidden xl:flex flex-col xl:flex-row items-center justify-center pt-16 xl:py-16 xl:gap-10 bg-pixel bg-top bg-cover bg-no-repeat w-full h-full min-h-[479px]"
        >
          <h2
            className={`block xl:hidden font-bold text-[40px] xl:text-[60px] leading-[44px] ${jersey25.className}`}
          >
            How It Works
          </h2>
          <Image
            src="/how-it-works-side.svg"
            width={442}
            height={443}
            alt="logo"
          />
          <div className="flex flex-col gap-6">
            <h2
              className={`hidden xl:block font-bold text-[60px] leading-[44px] xl:ml-[-22px] ${jersey25.className}`}
            >
              How It Works
            </h2>
            <ul className="flex flex-col items-center xl:items-start text-center xl:text-start gap-4 xl:list-decimal text-xl xl:text-2xl bg-grayer xl:bg-transparent px-10 xl:px-0 text-white xl:text-grayer py-10 xl:py-0 xl:leading-loose">
              <li className="flex xl:hidden justify-center items-center w-8 h-8 font-bold bg-pixels bg-gray/30 bg-blend-difference text-white p-2 px-8">
                1
              </li>
              <li>
                Purchase{" "}
                <span className="font-bold">
                  Juggernauts Fantasy Player Card Packs.
                </span>
              </li>
              <li className="flex xl:hidden justify-center items-center w-8 h-8 font-bold bg-pixels bg-gray/30 bg-blend-difference text-white p-2 px-8">
                2
              </li>
              <li>
                Build your <span className="font-bold">Juggernauts Roster</span>{" "}
                on our peer-to-peer marketplace.
              </li>
              <li className="flex xl:hidden justify-center items-center w-8 h-8 font-bold bg-pixels bg-gray/30 bg-blend-difference text-white p-2 px-8">
                3
              </li>
              <li>
                Deploy your cards in weekly{" "}
                <span className="font-bold">fantasy sports contests.</span>
              </li>
              <li className="flex xl:hidden justify-center items-center w-8 h-8 font-bold bg-pixels bg-gray/30 bg-blend-difference text-white p-2 px-8">
                4
              </li>
              <li>
                Score points based on the <span className="font-bold"></span>
                <span className="font-bold">real-life performance</span> of your
                Juggernauts roster.{" "}
              </li>
              <li className="flex xl:hidden justify-center items-center w-8 h-8 font-bold bg-pixels bg-gray/30 bg-blend-difference text-white p-2 px-8">
                5
              </li>
              <li>
                Own the competition and{" "}
                <span className="font-bold">win BIG!</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex items-center justify-center w-full md:h-[140px] bg-gradient-to-b from-white to-gray/20 xl:from-green/80 xl:to-green/80 mt-10 xl:mt-0">
          <Image
            src="/divider-mobile.svg"
            width={500}
            height={50}
            alt="logo"
            className="block xl:hidden mt-10 mb-14"
          />
          <Image
            src="/divider.svg"
            width={1294}
            height={115}
            alt="logo"
            className="hidden xl:block"
          />
        </section>

        <section
          id="fantasy-contests"
          className="flex flex-col xl:flex-row xl:items-center justify-center py-10 xl:py-16 bg-pixel bg-center bg-cover bg-no-repeat w-full h-full min-h-[479px]"
        >
          <h2
            className={`block xl:hidden px-5 font-bold text-[36px] leading-[44px] ${jersey25.className}`}
          >
            Fantasy Sports Contests
          </h2>
          <Image
            src="/fantasy-sports-side.svg"
            width={716}
            height={403}
            alt="logo"
            className="hidden xl:block"
          />
          <div className="flex flex-col w-full xl:max-w-[661px] gap-6">
            <h2
              className={`hidden xl:block font-bold text-[60px] leading-[44px] ${jersey25.className}`}
            >
              Fantasy Sports Contests
            </h2>

            {/* <Image
              src="/fantasy-sports-side.svg"
              width={716}
              height={403}
              alt="logo"
              className="block xl:hidden mt-5"
            /> */}
            <div className="flex xl:hidden flex-col justify-center self-center  bg-gray/40 rounded-lg min-h-30 max-w-[93%] border border-white shadow-md mt-5">
              <p className="p-5">
                In the{" "}
                <span className="font-bold">
                  Juggernauts SportsFi ecosystem
                </span>
                , you maintain true ownership over all of your game assets;
                every player on your roster is yours to collect, trade, and
                enter into high-stakes fantasy games.
              </p>
              <p className="p-5 bg-grayer/70 text-white rounded-b-lg border-t-2">
                Participate in the core weekly fantasy game to compete against
                thousands of players worldwide and Run the Gauntlet. Or enter
                your Player Cards into special event games{" "}
                <span className="font-bold">
                  completely unique to Juggernauts!
                </span>
              </p>
            </div>
            <div className="hidden xl:flex flex-col gap-10 text-lg xl:text-2xl bg-grayer/60 xl:bg-transparent px-10 xl:px-0 text-white xl:text-grayer py-8 xl:py-0">
              <p>
                In the Juggernauts SportsFi ecosystem, you maintain true
                ownership over all of your game assets; every player on your
                roster is yours to collect, trade, and enter into high-stakes
                fantasy games.
              </p>
              <p>
                Participate in the core weekly fantasy game to compete against
                thousands of players worldwide and Run the Gauntlet. Or enter
                your Player Cards into special event games{" "}
                <span className="font-bold">
                  completely unique to Juggernauts!
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row items-center justify-center py-8 xl:py-16 w-full h-full xl:min-h-[479px] gap-10 xl:gap-[120px]">
          <div className="flex flex-col text-center xl:text-start items-center w-full xl:max-w-[543px] gap-8">
            <Image
              src="/blitz-logo.svg"
              width={280}
              height={142}
              alt="logo"
              className="w-[200px] xl:w-[280px]"
            />

            <p className="text-2xl leading-relaxed xl:leading-normal px-8 xl:px-0">
              Deploy your Juggernauts Fantasy Player Cards into unique mini
              games every week. Each and every{" "}
              <span className="font-bold">Blitz Mini Game</span> presents a
              completely novel, never-before-seen fantasy sports experience.
              Beat the competition and WIN!
            </p>
          </div>

          <Image
            src="/blitz-side.svg"
            width={746}
            height={377}
            alt="logo"
            className="hidden xl:block"
          />
        </section>

        <section className="flex flex-col xl:flex-row items-center justify-center py-16 bg-pixel bg-center bg-cover bg-no-repeat w-full h-full min-h-[479px] gap-10 xl:gap-[120px]">
          <Image
            src="/gauntlet-logo.svg"
            width={349}
            height={124}
            alt="logo"
            className="block xl:hidden w-[309px] xl:w-[349px]"
          />

          <Image
            src="/gauntlet-side.svg"
            width={585}
            height={293}
            alt="logo"
            className="xl:mt-[40px]"
          />
          <div className="flex flex-col max-w-[661px] gap-8">
            <Image
              src="/gauntlet-logo.svg"
              width={349}
              height={124}
              alt="logo"
              className="ml-[-20px] hidden xl:block"
            />
            <div className="flex flex-col text-2xl gap-10 leading-relaxed px-8 xl:px-0 text-center xl:text-start">
              <p>
                <span className="font-bold">The Gauntlet</span> is our
                season-long flagship game mode: a tense battle for survival with
                the biggest rewards of all. Avoid elimination each week by
                staying ahead of the ever-rising points cut-off.{" "}
                <span className="font-bold">
                  Advance further into the season and watch your prize pot grow.
                </span>
              </p>
              <p>
                Every Juggernauts Fantasy Player Pack comes with{" "}
                <span className="font-bold">one free entry ticket!</span>
              </p>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center w-full h-[70px] md:h-[140px] bg-green/80">
          <Image
            src="/divider-mobile.svg"
            width={500}
            height={50}
            alt="logo"
            className="block xl:hidden"
          />
          <Image
            src="/divider.svg"
            width={1294}
            height={115}
            alt="logo"
            className="hidden xl:block"
          />
        </section>

        <section className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-gray to-white gap-10">
          <h2
            className={`block xl:hidden self-start mt-14 px-5 font-bold text-[36px] leading-[44px] ${jersey25.className}`}
          >
            Partners
          </h2>
          <h2
            className={`hidden xl:block font-bold text-[40px] xl:text-[45px] leading-[44px] mt-20 ${jersey25.className}`}
          >
            Partners
          </h2>

          <div className="flex items-center w-full xl:min-h-[120px] gap-4 xl:gap-5 overflow-x-scroll xl:justify-center pb-5 px-5">
            {partners.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-8 bg-gray rounded-lg w-[400px] h-40 p-5 border border-white shadow-md shrink-0"
              >
                <Image src={item} width={163} height={42} alt="logo" />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center w-full xl:h-[433px] bg-gray bg-pixel bg-no-repeat bg-cover xl:gap-10 mt-24 py-10 xl:py-0">
          <h2
            className={`block xl:hidden self-start px-5 font-bold text-[36px] leading-[44px] ${jersey25.className}`}
          >
            The Juggernauts Team
          </h2>
          <h2
            className={`hidden xl:block font-bold text-center xl:text-start text-[40px] xl:text-[60px] xl:mb-[-130px] leading-[44px] ${jersey25.className}`}
          >
            The Juggernauts Team
          </h2>

          <div className="flex xl:hidden w-full mt-[-100px]">
            {/* The parent div controls the viewport size for the scroll */}
            <div className="relative w-full overflow-x-scroll">
              {/* Added a negative left margin (-ml-N) to shift the content left */}
              <div className="w-[1400px] h-[500px] relative -ml-[200px]">
                <Image src="/team.svg" fill alt="logo" />
              </div>
            </div>
          </div>
          <div className="hidden xl:flex items-center justify-center w-full">
            <Image src="/team.svg" width={990} height={424} alt="logo" />
          </div>
        </section>

        <section
          id="contact-us"
          className="flex flex-col items-center justify-center w-full xl:h-[264px] bg-gradient-to-b from-white to-gray gap-10  py-10 xl:py-0"
        >
          <h2
            className={`font-bold text-[40px] leading-[44px] ${jersey25.className}`}
          >
            Contact Us
          </h2>
          <div className="flex items-center justify-center w-full gap-10">
            {socials.map((item, index) => (
              <Link key={index} href={item.href} target="blank">
                <Image
                  src={item.src}
                  width={72}
                  height={72}
                  alt="logo"
                  className="transition-all hover:scale-105 hover:drop-shadow-lg w-[52px] xl:w-[72px]"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
