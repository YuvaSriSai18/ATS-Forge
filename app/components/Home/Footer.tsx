import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Copyright + Links */}
        <div className="flex flex-col space-y-4 md:space-y-6">
          <p className="text-sm">
            © 2025 <span className="text-white font-semibold">ATS Forge</span>.
            All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Developer Info */}
        <div className="text-center md:text-right space-y-3">
          <p className="text-sm">
            Developed with <span className="text-pink-500">❤️</span> by{" "}
            <Link
              href="https://yuvasrisai18.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Yuva Sri Sai
            </Link>
          </p>
          <div className="flex justify-center md:justify-end gap-5">
            <Link
              href="https://www.linkedin.com/in/yuvasrisai18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/yuvasrisai18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </Link>
            <Link
              href="mailto:yuvasanakaranagasrisai_thota@srmap.edu.in"
              className="hover:text-white transition"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
