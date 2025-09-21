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
        <section className="flex flex-col items-center bg-hero w-full h-full min-h-[671px]">
          <Image
            src="/hero-text.svg"
            width={804}
            height={206}
            alt="logo"
            className="mt-[40px]"
          />
          <div className="bg-black h-2" />
        </section>

        <section
          id="how-it-works"
          className="flex items-center justify-center py-16 gap-10 bg-pixel bg-top bg-cover bg-no-repeat w-full h-full min-h-[479px]"
        >
          <Image
            src="/how-it-works-side.svg"
            width={442}
            height={443}
            alt="logo"
          />
          <div className="flex flex-col gap-6">
            <h2
              className={`font-bold text-[60px] leading-[44px] ${jersey25.className}`}
            >
              How It Works
            </h2>
            <ul>
              <li>
                Purchase{" "}
                <span className="font-bold">
                  Juggernauts Fantasy Player Card Packs.
                </span>
              </li>
              <li>
                Build your <span className="font-bold">Juggernauts Roster</span>{" "}
                on our peer-to-peer marketplace.
              </li>
              <li>
                Deploy your cards in weekly{" "}
                <span className="font-bold">fantasy sports contests.</span>
              </li>
              <li>
                Score points based on the <span className="font-bold"></span>
                <span className="font-bold">real-life performance</span> of your
                Juggernauts roster.{" "}
              </li>
              <li>
                Own the competition and{" "}
                <span className="font-bold">win BIG!</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex items-center justify-center w-full h-[140px] bg-gray">
          <Image src="/divider.svg" width={1294} height={115} alt="logo" />
        </section>

        <section
          id="fantasy-contests"
          className="flex items-center justify-center py-16 bg-pixel bg-center bg-cover bg-no-repeat w-full h-full min-h-[479px]"
        >
          <Image
            src="/fantasy-sports-side.svg"
            width={716}
            height={403}
            alt="logo"
          />
          <div className="flex flex-col max-w-[661px] gap-6">
            <h2
              className={`font-bold text-[60px] leading-[44px] ${jersey25.className}`}
            >
              Fantasy Sports Contests
            </h2>
            <div className="flex flex-col gap-10">
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

        <section className="flex items-center justify-center py-16  w-full h-full min-h-[479px] gap-[120px]">
          <div className="flex flex-col items-center max-w-[543px] gap-8">
            <Image src="/blitz-logo.svg" width={280} height={142} alt="logo" />

            <p>
              Deploy your Juggernauts Fantasy Player Cards into unique mini
              games every week. Each and every{" "}
              <span className="font-bold">Blitz Mini Game</span> presents a
              completely novel, never-before-seen fantasy sports experience.
              Beat the competition and WIN!
            </p>
          </div>

          <Image src="/blitz-side.svg" width={646} height={377} alt="logo" />
        </section>

        <section className="flex items-center justify-center py-16 bg-pixel bg-center bg-cover bg-no-repeat w-full h-full min-h-[479px] gap-[120px]">
          <Image
            src="/gauntlet-side.svg"
            width={485}
            height={293}
            alt="logo"
            className="mt-[40px]"
          />
          <div className="flex flex-col max-w-[661px] gap-8">
            <Image
              src="/gauntlet-logo.svg"
              width={349}
              height={124}
              alt="logo"
              className="ml-[-20px]"
            />
            <div>
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

        <section className="flex items-center justify-center w-full h-[140px] bg-gray">
          <Image src="/divider.svg" width={1294} height={115} alt="logo" />
        </section>

        <section className="flex flex-col items-center justify-center w-full h-[203px] bg-gradient-to-b from-gray to-white  gap-10">
          <h2
            className={`font-bold text-[45px] leading-[44px] ${jersey25.className}`}
          >
            Partners
          </h2>
          <div className="flex items-center justify-center w-full gap-10">
            {partners.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 px-8 bg-gray rounded-lg transition-transform hover:scale-105 hover:drop-shadow-lg"
              >
                <Image src={item} width={163} height={42} alt="logo" />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center w-full h-[433px] bg-white gap-10 mt-14">
          <h2
            className={`font-bold text-[60px] mb-[-130px] leading-[44px] ${jersey25.className}`}
          >
            The Juggernauts Team
          </h2>
          <div className="flex items-center justify-center w-full">
            <Image src="/team.svg" width={990} height={424} alt="logo" />
          </div>
        </section>

        <section
          id="contact-us"
          className="flex flex-col items-center justify-center w-full h-[264px] bg-gradient-to-b from-white to-gray gap-10"
        >
          <h2
            className={`font-bold text-[45px] leading-[44px] ${jersey25.className}`}
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
                  className="transition-all hover:scale-105 hover:drop-shadow-lg"
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
