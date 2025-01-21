// //component Navbar3
// "use client"
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar3() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="bg-white shadow">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image
//             alt="Logo"
//             className="mr-2"
//             height={40}
//             src="/Meubel House_Logos-05.png"
//             width={40}
//           />
//           <span className="text-xl font-bold">Furniro</span>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="space-x-4 hidden md:flex">
//           <Link className="text-gray-700 hover:text-gray-900" href="/">
//             Home
//           </Link>
//           <Link className="text-gray-700 hover:text-gray-900" href="/shop">
//             Shop
//           </Link>
//           <Link className="text-gray-700 hover:text-gray-900" href="/Blog">
//             Blog
//           </Link>
//           <Link className="text-gray-700 hover:text-gray-900" href="/Contact">
//             Contact
//           </Link>
//         </nav>

//         {/* Icons */}
//         <div className="space-x-4 flex items-center">
//           <Link
//             className="text-gray-700 hover:text-gray-900"
//             href="#"
//             aria-label="User Profile"
//           >
//             <i className="fas fa-user"></i>
//           </Link>
//           <Link
//             className="text-gray-700 hover:text-gray-900"
//             href="#"
//             aria-label="Wishlist"
//           >
//             <i className="fas fa-heart"></i>
//           </Link>
//           <Link
//             className="text-gray-700 hover:text-gray-900"
//             href="/CartSidebar"
//             aria-label="Shopping Cart"
//           >
//             <i className="fas fa-shopping-cart"></i>
//           </Link>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-gray-700 hover:text-gray-900"
//             aria-label="Toggle Menu"
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMobileMenuOpen && (
//         <nav className="md:hidden bg-white shadow-lg p-4">
//           <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/">
//             Home
//           </Link>
//           <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/shop">
//             Shop
//           </Link>
//           <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/Blog">
//             Blog
//           </Link>
//           <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/Contact">
//             Contact
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }
"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar3() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            alt="Logo"
            className="mr-2"
            height={40}
            src="/Meubel House_Logos-05.png"
            width={40}
          />
          <span className="text-xl font-bold">Furniro</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <Link className="text-gray-700 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/shop">
            Shop
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/Blog">
            Blog
          </Link>
          <Link className="text-gray-700 hover:text-gray-900" href="/Contact">
            Contact
          </Link>
        </nav>

        {/* Search Input */}
        <div className="flex items-center space-x-4 flex-grow md:flex-grow-0">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-3 py-2 text-sm w-full md:w-64 focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
            aria-label="Search"
          >
            Search
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-gray-900"
            aria-label="Toggle Menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg p-4">
          <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/">
            Home
          </Link>
          <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/shop">
            Shop
          </Link>
          <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/Blog">
            Blog
          </Link>
          <Link className="block text-gray-700 hover:text-gray-900 py-2" href="/Contact">
            Contact
          </Link>

          {/* Mobile Search Input */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
              className="text-white bg-blue-600 hover:bg-blue-700 w-full mt-2 px-4 py-2 rounded-lg"
              aria-label="Search"
            >
              Search
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

