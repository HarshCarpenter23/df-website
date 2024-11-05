import React from "react";
import Image from "next/image";
import MukhamImg from "@/images/attendance.png";
import AboutImg2 from "@/images/about2.png";
import AboutImg3 from "@/images/about3.png";
import AboutImg4 from "@/images/about4.png";
import AboutImgMain from "@/images/Mukham-Poster.png";
import { PageIntro } from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import imageWhitneyFrancis from "@/images/team/whitney-francis.jpeg";
import Team from "@/components/Team";
import clsx from "clsx";
import { FadeIn } from "@/components/FadeIn";

function Container({ as: Component = "div", className, children }) {
  return (
    <Component className={clsx("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  );
}

function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-6">
        {/* Header Section */}
        <h2 className="text-[#F97316] font-medium text-lg mb-1">About Us</h2>
        <p className="text-gray-500 text-sm mb-20">
          An art of facial recognition
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-20 mb-16">
          {/* Left Column - Phone Mockups */}
          <div className="flex gap-6">
            <div className="border border-gray-100 rounded-[2rem] p-4 shadow-lg bg-white">
              <Image
                src={MukhamImg}
                width={220}
                height={440}
                alt="MAuthN app"
                className="rounded-[1.5rem]"
              />
            </div>
            <div className="border border-gray-100 rounded-[2rem] p-4 shadow-lg bg-white">
              <Image
                src={AboutImg2}
                width={220}
                height={440}
                alt="Dashboard view"
                className="rounded-[1.5rem]"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Experience the Power of <br />
              <span className="text-[#F97316]">Password less</span>
              <br />
              <span className="text-[#F97316]">Authentication</span>
            </h1>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Say goodbye to passwords and protect your digital identity with
              our cutting-edge Passwordless Authentication solution. With our
              innovative technology, you can enjoy a secure and hassle-free
              login experience.
            </p>

            {/* Stats Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 inline-flex gap-12">
              <div>
                <div className="text-2xl font-bold mb-1">35</div>
                <div className="text-sm text-gray-500">Employees</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">52</div>
                <div className="text-sm text-gray-500">Product teams</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">$25M</div>
                <div className="text-sm text-gray-500">Invoices billed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Left Section - Text Content */}
          <div className="flex flex-col md:w-1/2">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our company, DigitalFortress Private Limited, is poised for
              substantial growth due to the innovative and high-impact nature of
              our products, MAuthN and Mukham. MAuthN introduces a revolutionary
              approach to authentication by eliminating traditional passwords
              and implementing passwordless multi-factor authentication. It
              ensures robust identity verification through advanced
              cryptographic techniques, device attestation, and biometrics,
              thereby mitigating cyber threats and unauthorized access.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Mukham, on the other hand, offers state-of-the-art employee
              monitoring, streamlining workforce management with features such
              as facial recognition-based attendance tracking, geo-fencing, an
              anti-spoofing module, and an AI secretary. The compelling reasons
              behind our company&apos;s high growth potential lie in the fact
              that both products directly address pressing market demands, such
              as enhanced cybersecurity and operational efficiency, while
              ensuring a user-friendly experience.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our adaptability to emerging technologies, comprehensive control,
              data-driven insights, and competitive advantages further bolster
              our position in the market, making us the preferred choice for
              businesses across various industries. We are confident that our
              commitment to innovation and security will continue to drive our
              growth and success in the digital realm.
            </p>
          </div>

          {/* Right Section - Image and Title */}
          <div className="flex flex-col items-center md:w-1/2 p-3 rounded-xl text-center text-white">
            <Image
              src={AboutImgMain}
              width={320}
              height={480}
              alt="Mukham features"
              className="rounded-xl mb-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
