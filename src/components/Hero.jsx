import React from "react";
import styles from "../styles";
import { robotHand } from "../assets";
import {} from "../assets";
import GetStarted from "./GetStarted";
import { HeroGiftCard } from "./HeroGiftCard";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} md:mb-[12rem]`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Presentes <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Perfeitos</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          em um clique.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Surpreenda com Gift Cards para todos os gostos.
        </p>
      </div>

      <div
        className={`flex-1 ${styles.flexCenter} flex-col px-6 my-10 sm:px-16 md:my-0 relative `}
      >
        <div className="">
          <HeroGiftCard className="relative" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
