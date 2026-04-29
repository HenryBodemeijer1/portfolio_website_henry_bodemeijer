"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px", // iets stabieler
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0a0a0a]/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <a href="#home" className="font-semibold text-lg">
          Henry Bodemeijer
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={`#${item.href}`}
                className={`relative transition ${
                  active === item.href
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}

                {/* underline indicator */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white transition-transform duration-300 ${
                    active === item.href
                      ? "scale-x-100"
                      : "scale-x-0"
                  } origin-left`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 pb-4 text-sm font-medium text-zinc-300">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={`#${item.href}`}
                onClick={() => setOpen(false)}
                className="block hover:text-white transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}