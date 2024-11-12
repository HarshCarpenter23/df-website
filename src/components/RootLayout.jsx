"use client";

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Footer from "./Footer";
import { Logo, Logomark } from "./Logo";

const RootLayoutContext = createContext({});

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  );
}

function Header({
  panelId,
  invert = false,
  expanded,
  onToggle,
  toggleRef,
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext);

  return (
    <div className="w-full bg-white border-b-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark
            className="h-1 sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
          <Logo
            className="hidden h-8 sm:block mb-1"
            invert={invert}
            filled={logoHovered}
          />
        </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 font-semibold hover:text-gray-600">
              Home
            </Link>
            <Link href="/products" className="text-gray-800 font-semibold hover:text-gray-600">
              Products
            </Link>
            {/* <Link href="/blog" className="text-gray-800 font-semibold hover:text-gray-600">
              Blog
            </Link> */}
            <Link href="/about" className="text-gray-800 font-semibold hover:text-gray-600">
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors"
              onClick={() => {
                window?._cio?.track("Clicked Contact Button", {
                  location: window.location.href,
                });
              }}
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className="md:hidden p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            {expanded ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function NavigationRow({ children }) {
  return (
    <div className="py-2">
      {children}
    </div>
  );
}

function NavigationItem({ href, children, onClick }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-gray-800 hover:text-gray-600 hover:bg-gray-50"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function Navigation({ onToggle }) {
  return (
    <nav className="px-4 py-2">
      <NavigationItem href="/" onClick={onToggle}>
        Home
      </NavigationItem>
      <NavigationItem href="/products" onClick={onToggle}>
        Products
      </NavigationItem>
      <NavigationItem href="/blog" onClick={onToggle}>
        Blog
      </NavigationItem>
      <NavigationItem href="/about" onClick={onToggle}>
        About Us
      </NavigationItem>
      <div className="px-4 py-2">
        <Link 
          href="/contact" 
          className="block w-full bg-orange-500 text-white text-center px-6 py-2 rounded hover:bg-orange-600 transition-colors"
          onClick={onToggle}
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
}

function RootLayoutInner({ children }) {
  let panelId = useId();
  let [expanded, setExpanded] = useState(false);
  let openRef = useRef();
  let closeRef = useRef();
  let navRef = useRef();

  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full top-0 z-50 bg-white">
        <Header
          panelId={panelId}
          toggleRef={openRef}
          expanded={expanded}
          onToggle={() => {
            setExpanded(!expanded);
            window.setTimeout(() =>
              closeRef.current?.focus({ preventScroll: true })
            );
          }}
        />

        {/* Mobile Navigation */}
        {expanded && (
          <div
            id={panelId}
            className="md:hidden bg-white shadow-lg"
            aria-hidden={expanded ? undefined : "true"}
            inert={expanded ? undefined : ""}
          >
            <Navigation
              onToggle={() => {
                setExpanded(false);
                window.setTimeout(() =>
                  closeRef.current?.focus({ preventScroll: true })
                );
              }}
            />
          </div>
        )}
      </header>

      <main className="pt-20 flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export function RootLayout({ children }) {
  let [logoHovered, setLogoHovered] = useState(false);

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  );
}