"use client";

import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
// import Placeholder from "../images/cardimg.png";
import { MukhamCard } from './MukhamCard';
import DeepTechImg from '@/images/Deeptech.png';

import FidoImg from '@/images/FIDO_Alliance_logo.png';
import CSAImg from '@/images/DIGITAL-FORTRESS-CSA.png';
import TrophyImg from '@/images/trophy.svg';
import FaceInfoImg from '@/images/about-1.jpg';
import FaceInfo2Img from '@/images/about-2.png';
import { Container } from './Container';
import { FadeIn } from './FadeIn';


function Hero() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-24 mt-16 md:mt-0">
      <div className="flex flex-col gap-4 lg:gap-6 w-full mb-[70px] justify-center text-center items-center">
        <div className="rounded-lg lg:w-2/3">
          <h2 className="text-2xl lg:text-5xl font-bold mt-2">
            Protect Your Digital World with Passwordless Authentication.
          </h2>
          <h2 className="text-xl text-orange-400 lg:text-4xl font-bold mt-2">
            &quot;
            <TypeAnimation
              sequence={[
                'Experience Our Award Winning Products',
                1000,
                'Mukham | MauthN | mIsolate',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
            &quot;
          </h2>
        </div>

        <div className="h-32 rounded-lg flex flex-col items-center justify-center text-center lg:w-2/3">
          <p className="mt-2">
            DigitalFortress Private Limited offers a secure and convenient
            passwordless authentication solution to safeguard your online
            accounts and prevent cyber attacks. Say goodbye to the hassle of
            remembering passwords and protect your digital identity with ease.
          </p>
          <br />
          <a href="/products" className="text-black underline flex text-xl">
            Get Started{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="underline ml-1 mt-1"
            >
              <path
                d="M19 3.5L5 17.5"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 13.77V3.5H8.73"
                stroke="black"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>


      {/* Infinite Scroll */}
      {/* <div
        x-data="{}"
        x-init="$nextTick(() => {
          let ul = $refs.logos;
          ul.insertAdjacentHTML('afterend', ul.outerHTML);
          ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll h-[500px]"
        >
          <li className="rounded-3xl flex-shrink-0">
            <Image
              src={DeepTechImg}
              width={400}
              height={300}
              className="rounded-3xl w-60 h-auto max-w-full lg:w-80 lg:h-auto"
            />
          </li>
          <li className="rounded-3xl flex-shrink-0">
            <Image
              src={FidoImg}
              width={400}
              height={300}
              className="rounded-3xl w-60 h-auto max-w-full lg:w-80 lg:h-auto"
            />
          </li>
          <li className="rounded-3xl flex-shrink-0">
            <Image
              src={CSAImg}
              width={400}
              height={300}
              className="rounded-3xl w-60 h-auto max-w-full lg:w-80 lg:h-auto"
            />
          </li>
          <li className="rounded-3xl flex-shrink-0">
            <Image
              src={TrophyImg}
              width={400}
              height={300}
              className=" rounded-3xl  lg:h-90 lg:w-80 h-80 w-60"
            />
          </li>
        </ul>
      </div> */}

      <div class="w-full inline-flex flex-nowrap overflow-hidden w-full">
        <ul class="flex items-center justify-center w-full md:justify-start h-[400px]">
          <li class="rounded-3xl flex-shrink-0">
            <Image
              src={DeepTechImg}
              width={400}
              height={300}
              className="rounded-3xl w-60 h-auto max-w-full lg:w-70 lg:h-auto"
            />
          </li>
          <li class="rounded-3xl flex-shrink-0">
            <Image
              src={FidoImg}
              width={400}
              height={300}
              className="rounded-3xl w-60 h-auto max-w-full lg:w-70 lg:h-auto"
            />
          </li>
          <li class="rounded-3xl flex-shrink-0">
            <Image
              src={CSAImg}
              width={400}
              height={300}
              className="rounded-3xl w-60 h-auto max-w-full lg:w-70 lg:h-auto"
            />
          </li>
          <li class="rounded-3xl flex-shrink-0">
            <Image
              src={TrophyImg}
              width={400}
              height={300}
              className="rounded-3xl lg:h-70 lg:w-60 h-60 w-50"
            />
          </li>
        </ul>
      </div>

      <div className="md:h-screen rounded-lg flex flex-col gap-6 justify-center items-center">
        <div className='flex flex-col justify-center items-center gap-3'>
          <h2 className="font-sans text-2xl lg:text-5xl font-bold mt-2">
            Changes we Introducted to the world 
          </h2>
          <p>Harness the power of AI and enhance your security measures with our cutting-edge product offerings.</p>
        </div>

        <MukhamCard/>

      </div>

      <Container className="mt-16 ">
        <FadeIn className="flex md:flex-row flex-col gap-7 items-center">
          <div className="flex-1">
            <p className='text-lg'>There are 80 distinguishable features on a human face, which are translated into a unique code to represent individual features. This code serves as a facial signature that can be used for identification. Facial recognition technology measures various facial curves on a micro scale, comparing these details to other facial signatures in a database to match and identify a person. Therefore, through the process of translating unique facial features into a code and matching it with other facial signatures, facial recognition technology is able to recognize and identify individuals.</p>
          </div>
          <div className=' flex md:flex-row flex-col gap-7 bg-ring'>
          <div>
              <Image
                src={FaceInfo2Img}
                className='h-[350px] rounded-lg '
                width={350}
                height={350}
              />
            </div>

            <div>
              <Image
                src={FaceInfoImg}
                className='h-[350px] rounded-lg  md:mt-[60px]'
                width={400}
                height={400}
              />
            </div>
          </div>
          </FadeIn>
        </Container>
      

    </main>
  );
}

export default Hero;