import React from "react";
import Footerimage from "../images/footer.png";
import Image from "next/image";
import { SocialMedia } from "./SocialMedia";
import { socialMediaProfiles } from "@/components/SocialMedia";
import { FadeIn } from "./FadeIn";
import Link from "next/link";
import { Logo, Logomark } from "./Logo";

export function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
}

function NewsletterForm() {
  return (
    <form
      className="max-w-sm"
      onSubmit={function handleSubmit(e) {
        console.log(e);
      }}
    >
      <h2 className="text-sm font-semibold tracking-wider text-gray-800">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-gray-700">
        Subscribe to get the latest Tech news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          name="newsletter-email"
          id="newsletter-email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-gray-300 py-2 pl-4 pr-16 text-gray-800 placeholder-gray-500 focus:border-gray-800 focus:outline-none"
        />
        <div className="absolute inset-y-1 right-1 flex items-center">
          <button
            type="submit"
            aria-label="Submit"
            className="flex h-full items-center justify-center rounded-xl bg-gray-800 text-white px-4 py-2 hover:bg-gray-700"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}

const navigation = [
  {
    title: "Links",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "How it works", href: "/how-it-works" },
      { title: "Blog", href: "/blog" },
      { title: "Careers", href: "/careers" },
      { title: "Areas We Serve", href: "/areas" },
    ],
  },
];

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-semibold tracking-wide text-gray-800">
              {section.title}
            </div>
            <ul role="list" className="mt-4">
              {section.links.map((link) => (
                <li key={link.title} className="mt-2">
                  <Link
                    href={link.href}
                    className="hover:text-gray-900 transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50  lg:grid lg:grid-cols-5 mt-4">
      <div className="relative block h-4 lg:col-span-2 lg:h-full flex items-center pl-8">
        <div className="text-gray-700 text-sm">
        <Link
          href="/"
          aria-label="Home"
        >
          <Logomark
            className="h-1 sm:hidden"
          />
          <Logo
            className="hidden h-8 sm:block mb-1"
          />
        </Link>
          <Image
            
            alt="Digital Fortress Logo"
            className="h-10 w-auto"
          />
          <p className="mt-2">Digital Fortress Private Limited offers a secure and convenient passwordless authentication solution</p>
        </div>
      </div>

      <div className="px-4 py-10 sm:px-6 lg:col-span-3 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <Navigation />
            <div className="flex lg:justify-end">
              <NewsletterForm />
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 border-t border-gray-100 pt-4 flex justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; 2023. digitalfortress.in . All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-800 transition">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-gray-800 transition">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-gray-800 transition">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-gray-800 transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
