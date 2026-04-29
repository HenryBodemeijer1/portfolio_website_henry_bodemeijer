import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <FadeIn>
      <section id="home" className="py-24 md:py-32 scroll-mt-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Hi, I’m Henry 👋
            </h1>

            <p className="mt-4 text-lg text-zinc-400 max-w-lg">
              I’m a software developer focused on building modern web
              applications with React and Next.js. I enjoy creating clean,
              user-friendly interfaces and solving real-world problems.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-white text-black px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-80 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
               className="border border-zinc-700 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-800 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
             <img
              src="/images/profile.png"
              alt="Profile"
              className="w-56 h-56 object-cover rounded-full border border-zinc-700"
            />
          </div>

        </div>
      </section>
    </FadeIn>
  );
}