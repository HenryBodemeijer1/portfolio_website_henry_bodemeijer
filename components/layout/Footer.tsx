export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-400">
        
        <p>
          © {new Date().getFullYear()} Henry Bodemeijer
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a
            href="https://github.com/HenryBodemeijer1"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/henry-bodemeijer-6715353a4/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}