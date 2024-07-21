import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-accent font-bold text-xl">Rebecca Chan</div>
        <div className="flex text-white">
          <Link href="/#home" className="mr-6 transition-transform transform hover:scale-110 hover:text-teal-600">
            Home
          </Link>
          <Link href="/#resume" className="mr-6 transition-transform transform hover:scale-110 hover:text-teal-600">
            Resume
          </Link>
          <Link href="/#contact" className="transition-transform transform hover:scale-110 hover:text-teal-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
