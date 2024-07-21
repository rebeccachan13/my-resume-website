// components/footer.js

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>&copy; {new Date().getFullYear()} Rebecca Chan</div>
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/rebeccachan13" className="hover:text-gray-400">
            LinkedIn
          </Link>
          <Link href="https://www.github.com/rebeccachan13" className="hover:text-gray-400">
            GitHub
          </Link>
          <Link href="/resume.pdf" className="hover:text-gray-400">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
