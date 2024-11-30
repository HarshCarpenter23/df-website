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
import Fido from 'src/images/fidoimg.png';
import RightImg from "src/images/verify.png";
import Lottie from 'react-lottie-player';

import animationData from 'src/images/Animation - 1731382855191.json';

function Hero() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between px-4 lg:px-24 py-10 lg:py-24 mt-10 md:mt-0">
      <div className="flex flex-col gap-8 lg:gap-12 w-full mb-[70px] justify-center items-start text-left">
        {/* Full-width container */}
        <div className="flex flex-col  lg:flex-row justify-between items-start w-full gap-8 lg:gap-12">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 ">
            <h2 className="text-2xl lg:text-4xl font-bold mt-2 leading-tight">
              Protect your digital world with <span className="text-orange-600">password-less </span>authentication.
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Experience seamless security. Say goodbye to passwords and hello to a safer digital life with Digital Fortress.
            </p>
            {/* <div className='flex gap-11  items-end'>
              <Image
                src={CSAImg} // replace with correct path
                width={120}
                height={140}
                alt="Fido Certified"
                className="mt-5  h-16.5"
              />

              <Image
                src={TrophyImg} // replace with correct path
                width={70}
                height={100}
                alt="Fido Certified"
                className="mt-5 h-14.2"
              />

              <Image
              
                src={Fido} // replace with correct path
                width={150}
                height={300}
                alt="Fido Certified"
                className="mt-8 h-13.5"
              />

              

              <Image
                src={DeepTechImg} // replace with correct path
                width={100}
                height={300}
                alt="Fido Certified"
                className="mt-5 h-12"
              />


            </div> */}
            
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
            <Lottie
              loop
              animationData={animationData}
              play
              style={{ width: 300, height: 300 }} // Adjust as needed
            />
          </div>
        </div>

        {/* Stats Section Full-Width */}
        <div className="w-full bg-gradient-to-r from-orange-400 to-orange-500 py-4 lg:py-4 text-white mt-8 flex justify-around rounded-lg px-6 lg:px-16 font-sans">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">100%</span>
            <span className="text-sm">Password-Free</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">35+</span>
            <span className="text-sm">Experts on Board</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">6+</span>
            <span className="text-sm">Identity</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">2+</span>
            <span className="text-sm">Awards</span>
          </div>
          
        </div>
      </div>

      {/* Section below with Header */}
      <div className="md:h-screen flex flex-col gap-6 justify-center items-center w-full text-center mt-20">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center gap-3 px-6 lg:px-16">
          <h3 className="text-sm text-orange-500 font-semibold">
            How Are We Transforming Security with AI?
          </h3>
          <h2 className="font-sans text-2xl lg:text-4xl font-bold mt-2 leading-tight">
            Changes we Introduced to the World
          </h2>
          <p className="text-gray-600 text-lg">
            Harness the power of AI and enhance your security measures with our cutting-edge product offerings.
          </p>
          <MukhamCard />
        </div>



        <div
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
        </div>


        {/* Additional Section with Illustration */}
        <Container className="mt-16 w-full px-6 lg:px-16">
          <FadeIn className="flex flex-col md:flex-row gap-10 items-center justify-between">
            {/* Left Content */}
            <div className="flex-1 text-left">
              <h3 className="text-xl font-bold mb-4">
                How it works?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Facial recognition technology analyzes 80 unique facial features, creating a distinct code for each person. By mapping facial curves on a micro scale, it matches these facial signatures to identify individuals accurately. This advanced technology offers seamless, secure identification solutions.
              </p>
            </div>

            {/* Right Image Section (Your original images stay unchanged) */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div>
                <Image
                  src={FaceInfo2Img}
                  className="h-[350px] rounded-lg"
                  width={350}
                  height={350}
                />
              </div>

              <div>
                <Image
                  src={FaceInfoImg}
                  className="h-[350px] rounded-lg md:mt-[60px]"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>




      <Container className="mt-36">
        <FadeIn className="flex flex-col items-center justify-center gap-6">
          <div className="mb-5">
            <h3 className="text-5xl font-bold">Choose <span className="text-[#D4611E]">your </span> plan</h3>
          </div>

          <div className="flex md:flex-row flex-col gap-4 items-end">
            <div className="bg-[#D4611E] h-[330px] rounded-lg p-4 text-white shadow">
              <h3 className="font-semibold text-2xl">Free Trial</h3>
              <h3 className="font-bold text-3xl">$0</h3>
              <p className="mb-4">The perfect way to get started</p>
              <hr />
              <div className="flex flex-col gap-4 mt-6 text-md">
                <div className="flex gap-2 items-center">
                  <Image
                    src={RightImg} // Path to your image
                    alt="Description of the image"
                    width={20} // Desired width of the image
                    height={20} // Desired height of the image
                  />
                  <p>Upto 2 users</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={RightImg} // Path to your image
                    alt="Description of the image"
                    width={20} // Desired width of the image
                    height={20} // Desired height of the image
                  />
                  <p>No support</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={RightImg} // Path to your image
                    alt="Description of the image"
                    width={20} // Desired width of the image
                    height={20} // Desired height of the image
                  />
                  <p>Limited statistic</p>
                </div>
              </div>
              <div>
                <button className="w-full bg-white text-black rounded-md mt-3 mb-2 py-1">START TRIAL</button>
              </div>
            </div>

            <div className="bg-[#D4611E] h-[370px] rounded-lg p-4 text-white shadow">
              <h3 className="font-semibold text-2xl">Premium</h3>
              <h3 className="font-bold text-3xl">$49</h3>
              <p className="mb-4">The perfect way to get started</p>
              <hr />
              <div className="flex flex-col gap-4 mt-6 text-md">
                <div className="flex gap-2 items-center">
                  <Image
                    src={RightImg} // Path to your image
                    alt="Description of the image"
                    width={20} // Desired width of the image
                    height={20} // Desired height of the image
                  />
                  <p>Upto 2 users</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={RightImg} // Path to your image
                    alt="Description of the image"
                    width={20} // Desired width of the image
                    height={20} // Desired height of the image
                  />
                  <p>No support</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={RightImg} // Path to your image
                    alt="Description of the image"
                    width={20} // Desired width of the image
                    height={20} // Desired height of the image
                  />
                  <p>Limited statistic</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={RightImg} // Path to your image
                    alt="Description of the image"
                    width={20} // Desired width of the image
                    height={20} // Desired height of the image
                  />
                  <p>Limited statistic</p>
                </div>
              </div>
              <div>
                <button className="w-full bg-white text-black rounded-md mt-3 mb-2 py-1">GET STARTED</button>
              </div>
            </div>

            <div className="bg-[#D4611E] h-[330px] rounded-lg p-4 text-white shadow">
              <h3 className="font-semibold text-2xl">Supreme</h3>
              <h3 className="font-bold text-3xl">$0</h3>
              <p className="mb-4">The perfect way to get started</p>
              <hr />
              <div className="flex flex-col gap-4 mt-6 text-md">
                <div className="flex gap-2 items-center">
                  <Image
                    src={RightImg} // Path to your image
                    alt="Description of the image"
                    width={20} // Desired width of the image
                    height={20} // Desired height of the image
                  />
                  <p>Upto 2 users</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={RightImg} // Path to your image
                    alt="Description of the image"
                    width={20} // Desired width of the image
                    height={20} // Desired height of the image
                  />
                  <p>No support</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={RightImg} // Path to your image
                    alt="Description of the image"
                    width={20} // Desired width of the image
                    height={20} // Desired height of the image
                  />
                  <p>Limited statistic</p>
                </div>
              </div>
              <div>
                <button className="w-full bg-white text-black rounded-md mt-3 mb-2 py-1">START TRIAL</button>
              </div>
            </div>
          </div>

        </FadeIn>
      </Container>

    </main>

  );
}

export default Hero;