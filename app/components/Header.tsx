import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const Links = [
    { name: "Explore", link: "/" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://dcassetcdn.com/design_img/10150/25224/25224_294121_10150_image.jpg"
            alt="logo"
            width={45}
            height={45}
            className="rounded-full border border-gray-300 shadow-sm"
          />
          <span className="text-xl font-bold text-gray-800 tracking-wide">
            RecipeFinder
          </span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-6">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.link}
                className="text-gray-700 font-medium hover:text-indigo-600 transition-colors text-lg"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </header>
  );
};

export default Header;
