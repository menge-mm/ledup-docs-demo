import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="LED-UP Logo" width={32} height={32} />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">LED-UP</span>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <a
                href="https://github.com/NGI-TRUSTCHAIN/LED-UP"
                className="text-gray-600 dark:text-gray-300 hover:text-ngi-pink dark:hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LED-UP GitHub"
              >
                <Github size={20} />
              </a>
            </li>
            {/* 
            <li>
              <a href="#" className="text-gray-600 hover:text-ngi-pink">
                <Twitter size={20} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-ngi-pink">
                <Hash size={20} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-ngi-pink">
                <DollarSign size={20} />
              </a>
            </li> */}
            <li>
              <Link
                href={'/introduction'}
                className="bg-ngi-pink text-white px-4 py-2 ring-2 ring-ngi-pink font-bold  hover:text-ngi-pink hover:bg-white transition duration-300 rounded-full md:block hidden"
              >
                Getting Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
