'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import MukhamImg from "src/images/MukhamUI.png";
import MauthImg from "src/images/mauthn-main.png";
import { MAuthSvg } from "@/components/MAuthSvg";

const products = [
  {
    name: "Mukham",
    description: "Application integrated to remind and process the flow of marking attendance with simplified UI which takes less than 10 seconds to mark attendance, includes:",
    features: [
      "AI-based Attendance System",
      "Geo Fencing",
      "Data Management",
      "3D Maps"
    ],
    image: MukhamImg,
    type: "image",
    backgroundColor: "bg-[#F8F9FF]",
    moreInfo: [
      "Leverages cutting-edge facial recognition and machine learning algorithms for secure and swift attendance marking.",
      "Enhances workplace compliance by using geo-restrictions to verify attendance within defined geographical zones.",
      "Seamlessly manages and stores attendance records, providing users with organized data views and reporting options.",
      "Integrates interactive 3D map visualization to assist with attendance analysis across multiple locations in real time."
    ]
  },
  {
    name: "MauthN",
    description: "Remote authentication to provide flexibility of using any device for authentication with the security of multimodal and multifactor authentication.",
    features: [
      "Advanced multifactor authentication for platform independent services",
      "Allows users to use one or a combination of various passwordless authentication factors"
    ],
    image: MauthImg,
    type: "image",
    backgroundColor: "bg-[#F3FFF9]",
    moreInfo: [
      "Offers device-agnostic security, enabling authentication across various systems without compromising user experience.",
      "Incorporates biometric and device-based authentication factors for an added layer of protection.",
      "Empowers users to select authentication factors best suited to their security needs, promoting personalized security choices.",
      "Optimizes for both security and ease of use, balancing robust protection with a frictionless login experience."
    ]
  },
  {
    name: "mIsolate",
    description: "The platform ensures secure email interactions, mitigating the risk of phishing attacks and unauthorized access through attachments.",
    features: [
      "Agentless Security",
      "Flexible and Customizable",
      "Open-Source Foundations",
      "Complete Endpoint Protection"
    ],
    image: MAuthSvg,
    type: "svg",
    backgroundColor: "bg-[#FFF8F3]",
    moreInfo: [
      "Protects email workflows by isolating potential threats before they reach users’ inboxes, reducing the risk of phishing.",
      "Adaptable architecture allows customization to meet specific security protocols without extensive setup.",
      "Based on open-source technologies, ensuring a transparent and versatile security solution.",
      "Safeguards endpoints with comprehensive defenses, preventing exploitation from malicious links or infected attachments."
    ]
  }
];

export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const openModal = (product) => {
    setActiveProduct(product);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setActiveProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-16">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#FF4A17]">Our Products</h2>
          <p className="text-gray-600 mt-2">With Quality Products For You</p>
        </div>

        <div className="flex flex-col gap-8">
          {products.map((product) => (
            <FadeIn key={product.name}>
              <div className={`rounded-2xl p-8 ${product.backgroundColor}`}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 relative">
                    {product.type === "image" ? (
                      <Image
                        src={product.image}
                        alt={`${product.name} interface`}
                        className="rounded-lg"
                        priority={product.name === "Mukham"}
                        quality={90}
                      />
                    ) : (
                      <MAuthSvg className="w-[320px] md:w-[400px] h-[300px] md:h-[450px]" />
                    )}
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-sm mt-1">{index + 1}.</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => openModal(product)}
                      className="mt-6 text-[#FF4A17] flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read more
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Modal */}
      {isModalOpen && activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
          <div className={`p-6 rounded-lg shadow-lg max-w-lg mx-auto ${activeProduct.backgroundColor}`}>
            <h3 className="text-2xl font-bold mb-4 text-black">
              {activeProduct.name}
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              {activeProduct.moreInfo.map((info, index) => (
                <li key={index} className="text-gray-700">
                  {info}
                </li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              className="mt-4 text-[#FF4A17] hover:underline"
            >
              Close
            </button>
          </div>
        </div>

      )}
    </section>
  );
}
