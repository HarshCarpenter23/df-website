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
import Lock from 'src/images/lock.png';


function Hero() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 lg:px-24 py-10 lg:py-24 mt-16 md:mt-0">
      <div className="flex flex-col gap-8 lg:gap-12 w-full mb-[70px] justify-center items-start text-left">
        {/* Full-width container */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-12">
          {/* Left Side: Text */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl font-bold mt-2 leading-tight">
              Protect your digital world with <span className="text-orange-600">password-less </span>authentication.
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Experience seamless security. Say goodbye to passwords and hello to a safer digital life with Digital Fortress.
            </p>
            {/* <Image
              src={FidoImg} // replace with correct path
              width={300}
              height={300}
              alt="Fido Certified"
              className="mt-4 h-10"
            /> */}
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
            <Image
              src={Lock} // Assuming this is already imported
              width={300}
              height={300}
              className="rounded-3xl w-auto h-auto"
            />
          </div>
        </div>

        {/* Stats Section Full-Width */}
        <div className="w-full bg-gradient-to-r from-orange-400 to-orange-500 py-4 lg:py-4 text-white mt-8 flex justify-around rounded-lg px-6 lg:px-16 font-sans">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">35+</span>
            <span className="text-sm">Experts on Board</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">52</span>
            <span className="text-sm">Valued Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">$25M+</span>
            <span className="text-sm">Invoices Billed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">100%</span>
            <span className="text-sm">Password-Free</span>
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




      <section className="w-full max-w-screen-lg mx-auto py-16 px-4 lg:px-16 text-center mt-28">
      <div className="mb-10">
        <h3 className="text-sm text-orange-500 font-semibold">
          Flexible pricing options designed for every level of security.
        </h3>
        <h2 className="text-2xl lg:text-4xl font-bold mt-2">
          Find the Perfect Plan for Your Needs
        </h2>
        <p className="text-gray-600 text-lg mt-2">
          Choose your plan and experience AI-driven protection tailored to you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-center items-start">
        {/* Free Tier */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 flex flex-col items-center text-left shadow-lg">
          <h3 className="text-xl font-bold mb-2">Free Tier</h3>
          <p className="text-gray-500 mb-6">
            Ideal for individuals who need quick access to basic features.
          </p>
          <p className="text-4xl font-bold">$0 <span className="text-lg font-medium">/ Month</span></p>
          <button className="mt-6 px-6 py-2 border border-orange-600 text-orange-600 font-semibold rounded-lg">
            Get Started Now
          </button>
          <ul className="mt-6 space-y-4 text-gray-600">
            <li>✔️ 20,000+ of PNG & SVG graphics</li>
            <li>✔️ Access to 100 million stock images</li>
            <li>❌ Upload custom icons and fonts</li>
            <li>❌ Unlimited Sharing</li>
            <li>❌ Upload graphics & video in up to 4k</li>
            <li>❌ Unlimited Projects</li>
            <li>❌ Instant Access to our design system</li>
            <li>❌ Create teams to collaborate on designs</li>
          </ul>
        </div>

        {/* Premium Tier */}
        <div className="flex-1 bg-gray-900 text-white rounded-lg p-6 flex flex-col items-center text-left shadow-lg transform scale-105">
          <h3 className="text-xl font-bold mb-2">Premium</h3>
          <p className="text-gray-400 mb-6">
            Ideal for individuals who need advanced features and tools for client work.
          </p>
          <p className="text-4xl font-bold">$25 <span className="text-lg font-medium">/ Month</span></p>
          <button className="mt-6 px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg">
            Get Started Now
          </button>
          <ul className="mt-6 space-y-4">
            <li>✔️ 20,000+ of PNG & SVG graphics</li>
            <li>✔️ Access to 100 million stock images</li>
            <li>✔️ Upload custom icons and fonts</li>
            <li>✔️ Unlimited Sharing</li>
            <li>✔️ Upload graphics & video in up to 4k</li>
            <li>✔️ Unlimited Projects</li>
            <li>✔️ Instant Access to our design system</li>
            <li>❌ Create teams to collaborate on designs</li>
          </ul>
        </div>

        {/* Supreme Tier */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 flex flex-col items-center text-left shadow-lg">
          <h3 className="text-xl font-bold mb-2">Supreme</h3>
          <p className="text-gray-500 mb-6">
            Ideal for businesses who need personalized services and security for large teams.
          </p>
          <p className="text-4xl font-bold">$100 <span className="text-lg font-medium">/ Month</span></p>
          <button className="mt-6 px-6 py-2 border border-orange-600 text-orange-600 font-semibold rounded-lg">
            Get Started Now
          </button>
          <ul className="mt-6 space-y-4 text-gray-600">
            <li>✔️ 20,000+ of PNG & SVG graphics</li>
            <li>✔️ Access to 100 million stock images</li>
            <li>✔️ Upload custom icons and fonts</li>
            <li>✔️ Unlimited Sharing</li>
            <li>✔️ Upload graphics & video in up to 4k</li>
            <li>✔️ Unlimited Projects</li>
            <li>✔️ Instant Access to our design system</li>
            <li>✔️ Create teams to collaborate on designs</li>
          </ul>
        </div>
      </div>
    </section>
      
    </main>

  );
}

export default Hero;