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

const team = [
  {
    image: "/logo-head-orange.svg",
    name: "Paul Osmand",
    label: "CEO",
    description:
      "A serial entrepreneur with a love for family, sports, and crypto. Paul has worked in leadership positions for a number of blockchain projects and has advised many successful startups throughout the token and product launch cycles.",
    social: "https://www.linkedin.com/in/paul-osmond-53381b179/",
  },
  {
    image: "/logo-head.svg",
    name: "Lucas Silveira",
    label: "CTO",
    description:
      "Lucas brings 16+ years of development experience to the table with 2+ years developing blockchain-based solutions for the most innovative platforms in the Web3 space. Lucas relishes the opportunity to be an agent of change for processes and people.",
    social: "https://www.linkedin.com/in/lfsilveira/",
  },
  {
    image: "/logo-head-red.svg",
    name: "Slance",
    label: " Creative Growth Partner",
    description:
      "Slance helps crypto & blockchain teams become niche authorities with visual storytelling, identifying growth areas, and fitting creatives plans into the overall marketing strategy.",
    social: "https://www.linkedin.com/company/slance-co/",
  },
];

export default function Home() {
  const [fss, setFss] = useState(false);
  const [sb, setSb] = useState(false);
  const [ss, setSs] = useState(false);

  return (
    <main id="main" className="flex flex-col w-full max-w-[1920px] relative">
      {/* TOP BANNER */}
      <section className="flex flex-col py-16 gap-10 xl:gap-0 relative">
        <div className="flex justify-center sm:justify-start items-center xl:py-[70px] px-[26px] xl:px-[100px] gap-4 xl:gap-20">
          <Image
            src="/logo-head.svg"
            width={118}
            height={113}
            placeholder="blur"
            blurDataURL="/logo-head.svg"
            alt="logo"
            className="xl:hidden absolute bottom-0 right-0"
          />
          <Image
            src="/logo-head.svg"
            width={448}
            height={443}
            placeholder="blur"
            blurDataURL="/logo-head.svg"
            alt="logo"
            className="hidden xl:block xl:w-[288px] 2xl:w-[448px] transition-all hover:scale-[1.03] hover:-rotate-[360deg]"
          />

          <div className="flex flex-col text-white z-10 max-w-[920px]">
            <div className="flex flex-col gap-2 font-bold text-[50px] xl:text-[140px] leading-[46px] xl:leading-[110px]">
              <p
                className={`text-white drop-shadow-black  ${pixeBoy.className}`}
              >
                JUGGERNAUTS
              </p>
              <p
                className={`font-medium text-[26px] xl:text-[32px] leading-[35px] xl:leading-[40px] 2xl:leading-[45px] text-jugz-light drop-shadow-black`}
              >
                Building badass <span className="text-jugz-light">SportFi</span>{" "}
                dApps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHATS IS SPORTIFI */}
      <section
        id="sportifi"
        className="bg-black bg-jugz6 bg-no-repeat bg-cover bg-right"
      >
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-8 xl:py-16 bg-slate-900 shadow-inner relative transition-all hover:pl-2 xl:hover:pl-20 overflow-hidden">
          <Image
            src="/section-arrows-light.svg"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL="/section-arrows.svg"
            alt="game modes"
            className="w-[100px] xl:w-[180px] absolute left-[-40px] xl:left-[-50px] top-6 xl:top-8 drop-shadow-black"
          />
          <p
            className={`text-white pl-16 drop-shadow-black ${pixeBoy.className}`}
          >
            What is SportFi?
          </p>
        </div>
        <div className="flex flex-col  gap-16 text-jugz-light xl:pb-24">
          <div className="flex justify-between items-center xl:px-[80px] xl:mt-16 relative">
            <div className="flex flex-col gap-16 w-full px-[22px] xl:px-0 pt-10 pb-10 z-10 drop-shadow-black">
              <p
                className={`flex text-[24px] xl:text-[30px] xl:leading-[46px] border-2 rounded-[15px] p-10 max-w-[700px] bg-black/70 backdrop-blur-md`}
              >
                SportFi is the intertwining of real world pro sports and
                decentralized finance that allows for the creation of novel
                decentralized applications built on the blockchain.
              </p>
              <p
                className={`flex text-[24px] xl:text-[30px] xl:leading-[46px] border-2 rounded-[15px] p-10 max-w-[700px] self-end bg-black/70 backdrop-blur-md`}
              >
                Utilizing smart contracts, non fungible tokens, and crypto,
                SportFi will SportFi enhances the fan engagement experience and
                creates new ways for sports fans to follow their favorite
                athletes and enjoy their favorite sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSET SPORTS */}
      <section id="ecosystem">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-8 xl:py-16 bg-slate-900 shadow-inner relative transition-all hover:pl-2 xl:hover:pl-20 overflow-hidden">
          <Image
            src="/section-arrows-light.svg"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL="/section-arrows.svg"
            alt="game modes"
            className="w-[100px] xl:w-[180px] absolute left-[-40px] xl:left-[-50px] top-6 xl:top-8 drop-shadow-black"
          />
          <p
            className={`text-white pl-16 drop-shadow-black ${pixeBoy.className}`}
          >
            FullSet Sports
          </p>
        </div>
        <div className="flex flex-col gap-16 text-white xl:pb-24 relative w-full h-[250px] max-h-[250px] md:h-[400px] md:max-h-[400px] xl:h-[700px] xl:max-h-[700px] overflow-hidden">
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
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 to-blue-900/80 flex items-center justify-center">
              <Link
                href="https://fullsetsports.com"
                target="blank"
                className={`transition-all bg-white border border-blue-400 w-[198px] h-[49px] flex justify-center items-center rounded-lg text-jugz text-[20px] font-medium hover:scale-[1.02] hover:drop-shadow-light ${pixeBoy.className}`}
              >
                Learn more
              </Link>
            </div>
          </Transition>
        </div>
      </section>

      {/* SOCIAL BETZ */}
      <section>
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-8 xl:py-16 bg-slate-900 shadow-inner relative transition-all hover:pl-2 xl:hover:pl-20 overflow-hidden">
          <Image
            src="/section-arrows-light.svg"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL="/section-arrows.svg"
            alt="arrow"
            className="w-[100px] xl:w-[180px] absolute left-[-40px] xl:left-[-50px] top-6 xl:top-8 drop-shadow-black"
          />
          <p
            className={`text-white pl-16 drop-shadow-black ${pixeBoy.className}`}
          >
            Socialbetz
          </p>
        </div>
        <div className="flex flex-col gap-16 text-white xl:pb-24 relative w-full h-[250px] max-h-[250px] md:h-[400px] md:max-h-[400px]  lg:h-[600px] lg:max-h-[600px] xl:h-[700px] xl:max-h-[700px]">
          <button className="w-full h-full">
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
            // onMouseLeave={() => setSb(false)}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 to-blue-900/80 flex items-center justify-center">
              <Link
                href="https://socialbetz.vercel.app/"
                target="blank"
                className={`transition-all bg-white border border-blue-400 w-[198px] h-[49px] flex justify-center items-center rounded-lg text-jugz text-[20px] font-medium hover:scale-[1.02] hover:drop-shadow-light ${pixeBoy.className}`}
              >
                Learn more
              </Link>
            </div>
          </Transition>
        </div>
      </section>

      {/* SPORT STUFF */}
      <section className="z-20">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-8 xl:py-16 bg-slate-900 shadow-inner relative transition-all hover:pl-2 xl:hover:pl-20 overflow-hidden">
          <Image
            src="/section-arrows-light.svg"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL="/section-arrows.svg"
            alt="arrow"
            className="w-[100px] xl:w-[180px] absolute left-[-40px] xl:left-[-50px] top-6 xl:top-8 drop-shadow-black"
          />
          <p
            className={`text-white pl-16 drop-shadow-black ${pixeBoy.className}`}
          >
            SPORTSTUFF
          </p>
        </div>
        <div className="flex flex-col  gap-16 text-white xl:pb-24 relative w-full h-[250px] max-h-[250px] md:h-[400px] md:max-h-[400px]  lg:h-[600px] lg:max-h-[600px] xl:h-[700px] xl:max-h-[700px]">
          <button className="w-full h-full">
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
            // onMouseLeave={() => setSs(false)}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 to-blue-900/80 flex items-center justify-center">
              <Link
                href="#"
                className={`transition-all bg-white border border-blue-400 w-[198px] h-[49px] flex justify-center items-center rounded-lg text-jugz text-[20px] font-medium hover:scale-[1.02] hover:drop-shadow-light ${pixeBoy.className}`}
              >
                Learn more
              </Link>
            </div>
          </Transition>
        </div>
      </section>

      {/* JUG TOKEN */}
      <section
        id="jugz"
        className="bg-black bg-jugz5 xl:bg-numbers bg-no-repeat bg-center pb-16"
      >
        <div className="flex flex-col  gap-16 text-white xl:pb-24">
          <div className="flex justify-between items-center xl:px-[100px] xl:mt-16 relative">
            <div className="flex flex-col xl:gap-14 w-full xl:max-w-[1000px] px-[22px] xl:px-0 pt-10 pb-10 z-10">
              <p
                className={`text-[74px] xl:text-[134px] xl:leading-[46px] drop-shadow-black ${pixeBoy.className}`}
              >
                $JUG TOKEN
              </p>
              <p
                className={`text-[24px] xl:text-[34px] xl:leading-[46px] max-w-[800px] text-jugz-light drop-shadow-black`}
              >
                The $JUG token is the medium of exchange for all products and
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
              className="
                w-[240px] absolute right-0 bottom-[-30px] z-0 transition-all hover:scale-[1.03] hover:right-10 duration-300
                xl:w-[680px] xl:right-0 xl:top-[-130px] opacity-30 xl:opacity-100

              "
            />
          </div>
          {/* <div className="flex items-center gap-16 xl:px-[100px]">
            <div className="flex flex-col bg-black/70 border border-jugz-light rounded-[8px] p-5 text-center min-w-[300px] max-w-[300px] transition-all hover:scale-[1.03] hover:drop-shadow-light">
              <p className={`text-6xl text-white ${pixeBoy.className}`}>
                1B $JUG
              </p>
              <p className="text-[16px] text-jugz-light">Total Supply</p>
            </div>
            <div className="flex flex-col bg-black/70 border border-jugz-light rounded-[8px] p-5 text-center min-w-[300px] max-w-[300px] transition-all hover:scale-[1.03] hover:drop-shadow-light">
              <p className={`text-6xl text-white ${pixeBoy.className}`}>
                $15M USD
              </p>
              <p className="text-[16px] text-jugz-light">
                Fully-dilluted Valuation
              </p>
            </div>
            <div className="flex flex-col bg-black/70 border border-jugz-light rounded-[8px] p-5 text-center min-w-[300px] max-w-[300px] transition-all hover:scale-[1.03] hover:drop-shadow-light">
              <p className={`text-6xl text-white ${pixeBoy.className}`}>
                $450K USD
              </p>
              <p className="text-[16px] text-jugz-light">
                Circulating market cap at TGE
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-jugz4 bg-section bg-no-repeat bg-cover">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-8 xl:py-16 bg-slate-900 shadow-inner relative transition-all hover:pl-2 xl:hover:pl-20 overflow-hidden">
          <Image
            src="/section-arrows-light.svg"
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL="/section-arrows-light.svg"
            alt="game modes"
            className="w-[100px] xl:w-[180px] absolute left-[-40px] xl:left-[-50px] top-6 xl:top-8 drop-shadow-black"
          />
          <p
            className={`text-white pl-16 drop-shadow-black ${pixeBoy.className}`}
          >
            Our Team
          </p>
        </div>

        <div className="flex gap-10 2xl:gap-24  items-center flex-wrap px-[26px] xl:px-[100px] xl:mt-16 relative py-24">
          {team.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full md:w-[300px] lg:w-[350px] xl:w-[330px] 2xl:w-[400px] bg-slate-900 border border-jugz rounded transition-all hover:scale-[1.03] hover:bg-slate-800 hover:shadow-xl pt-5"
            >
              <Image
                src={item.image}
                width={200}
                height={339}
                placeholder="blur"
                blurDataURL={item.image}
                alt="social betz"
                className="drop-shadow-xl w-[100px] xl:w-[200px]"
              />
              <p
                className={`text-3xl text-white drop-shadow-black ${pixeBoy.className}`}
              >
                {item.name}
              </p>
              <div className="flex items-center gap-2 font-bold text-jugz-light  drop-shadow-black-small">
                {item.label}
                <Link
                  href={item.social}
                  className="transition-all hover:opacity-75"
                  target="blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Link>
              </div>
              <p
                className={`p-6 text-justify text-jugz-light xl:leading-[32px] drop-shadow-black-small md:min-h-[280px] 2xl:min-h-[200px] ${pixeBoy.className}`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BUTTON TO TOP */}
      <Link
        href="#top"
        className="hidden xl:block fixed bottom-24 right-24 bg-jugz/60 p-2 rounded-lg text-jugz-light z-30 transition-all hover:scale-[1.03] hover:text-white shadow-md"
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
            fillRule="evenodd"
            d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
          />
          <path
            fillRule="evenodd"
            d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </Link>
    </main>
  );
}
