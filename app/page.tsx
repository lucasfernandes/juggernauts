import Image from "next/image";
import localFont from "next/font/local";

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
  return (
    <main className="flex flex-col w-full max-w-[1920px]">
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
            className="hidden xl:block"
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
      <section className="bg-black bg-jugz2 xl:bg-numbers bg-no-repeat bg-center">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-16 bg-black/60 shadow-inner relative">
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

      {/* PARTNERS */}
      <section className="bg-jugz4 bg-section bg-no-repeat bg-center">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[80px] leading-[40px]  px-[26px] xl:px-[100px] py-16 bg-gradient-to-r from-jugz/20 to-black shadow-inner relative">
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
    </main>
  );
}
