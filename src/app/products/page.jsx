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
    type: "image",  // Set type as "image" for regular images
    backgroundColor: "bg-[#F8F9FF]"
  },
  {
    name: "MauthN",
    description: "Remote authentication to provide flexibility of using any device for authentication with the security of multimodal and multifactor authentication",
    features: [
      "Advanced multifactor authentication for platform independent services",
      "Allowing user to use one or the combination of various passwordless authentication factors",
      "Allowing user to use one or the combination of various passwordless authentication factors"
    ],
    image: MauthImg,
    type: "image",  // Set type as "image" for regular images
    backgroundColor: "bg-[#F3FFF9]"
  },
  {
    name: "mIsolate",
    description: "The platform ensures secure email interactions, mitigating the risk of phishing attacks and unauthorized access through attachments. Users can browse and interact with the digital world without compromising the security of their endpoints.",
    features: [
      "Agentless Security",
      "Flexible and Customizable",
      "Open-Source Foundations",
      "Complete Endpoint Protection"
    ],
    image: MAuthSvg,
    type: "svg",  // Set type as "svg" for SVG component
    backgroundColor: "bg-[#FFF8F3]"
  }
];

export default function Product() {
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
                    {/* Conditionally render SVG component or Next.js Image */}
                    {product.type === "image" ? (
                      <Image
                        src={product.image}
                        alt={`${product.name} interface`}
                        className="rounded-lg"
                        priority={product.name === "Mukham"}
                        quality={90}
                      />
                    ) : (
                      <MAuthSvg className="w-[320px] md:w-[400px] h-[300px] md:h-[450px]" /> // Render SVG component directly
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
                    <button className="mt-6 text-[#FF4A17] flex items-center gap-1 hover:gap-2 transition-all">
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
    </section>
  );
}
