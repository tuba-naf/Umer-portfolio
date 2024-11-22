"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import Image from "next/image";


const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="flex flex flex-wrap justify-between items-center p-8 bg-gray-900 border-b-2 border-gray-700">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-wide sm:tracking-wider lg:tracking-widest flex flex-wrap justify-center items-center">
  <span className="text-white">U</span>
  <span className="text-teal-400">C</span>
  <span className="text-white">reates</span>
</h1>

        {/* Hamburger Menu for Mobile (visible on smaller screens) */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <div className="space-y-2 cursor-pointer transition-transform duration-300 transform">
            <span
              className={`block w-8 h-1 bg-teal-400 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-teal-400 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-teal-400 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </div>
        {/* Desktop Navigation (hidden on mobile screens) */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-8">
            <li className="hover:text-yellow-400 cursor-pointer transition duration-300 relative">
              <Link href="/">Home</Link>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-yellow-400 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>

            <li className="hover:text-yellow-400 cursor-pointer transition duration-300 relative">
              <Link href="Components/Services">Services</Link>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-yellow-400 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition duration-300 relative">
              <Link href="Components/Contact">Contact</Link>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-yellow-400 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <nav className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4 items-center bg-gray-800 p-6" >
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300 ">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            <Link href="Components/Services">Services</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            <Link href="Components/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
      {/* Hero Section */}
<section className="relative flex flex-col items-center justify-center text-center py-16 px-4 sm:py-20 sm:px-6 md:py-32 md:px-8 bg-gradient-to-r from-black via-black to-gray-900 animate-fadeIn scale-up overflow-hidden">
  
  
{/* Decorative Geometric Patterns */}
<div className="absolute inset-0 geometric-pattern z-0">
  <div className="shape sparkling-circle small"></div>
  <div className="shape sparkling-circle medium"></div>
  <div className="shape sparkling-circle large"></div>
  <div className="shape sparkling-circle gradient"></div>
  <div className="shape sparkling-circle subtle"></div>
</div>

        {/* Main Content */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug md:leading-tight text-white animate-slideInLeft z-10">
          Design That <span className="text-yellow-400">Inspires</span>
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl text-gray-100 animate-slideInRight z-10">
          Unleashing creativity to transform your brand into a visual
          masterpiece that captivates and connects.
        </p>
         
        {/* Link to Services page */}
        <Link href="/Components/Services">
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 w-full sm:w-auto z-10">
            Explore Our Work
          </button>
        </Link>
        
      </section>


      {/* Behind UCreates Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-gradient-to-r from-gray-950 via-gray-900 to-black text-white flex flex-col items-center lg:flex-row animate-scaleUp">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center">
          <Image
            src="/Images/UMER2.jpg" // Replace with the actual path to Mr. Umer's image
            alt="Mr. Umer"
            width={300} // Original width of the image
            height={200} // Original height of the image
            className="w-2/3 sm:w-3/4 md:w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:brightness-110 hover:shadow-2xl"
            style={{
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)", // Depth shadow
              border: "4px solid rgba(255, 255, 255, 0.15)", // Soft glow border
              transition: "all 0.3s ease",
            }}
          />
          <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-center">
            Mr. Umer Maher (Founder of UCreates)
          </p>
        </div>

        {/* Text Container */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400 mb-6 animate-pulse">
  <strong>About UCreates</strong>
</h1>
  
  <p className="text-sm sm:text-base md:text-lg text-gray-300 transition-opacity duration-300 hover:opacity-80 animate-fadeIn mb-4 text-justify lg:text-justify">
    Meet Mr. Umer Maher, a BBA student at the University of Sindh. He is
    a passionate graphic designer who believes in creating user-friendly
    and compelling designs that generate a lasting impact. His
    dedication to design is driven by a deep love for visual
    storytelling and a commitment to delivering high-quality, creative
    work. This passion ignited him to create Ucreates. Mr. Umer excels at blending aesthetics with functionality,
    ensuring that each design not only captures attention but also
    communicates effectively. He is currently serving as a graphic
    designer and editing team lead at the Sindh Biotechnologists
    Association, where he contributes his expertise and leadership to
    advance impactful visual communication.
  </p>
</div>

      </section>

      {/* Why Choose UCreates Section */}
      <section className="py-10 px-4 sm:px-6 md:px-8 bg-gray-950 text-white">
        <h3 className="text-4xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 text-white animate-scaleUp animate-pulse">
          Why Choose UCreates
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 w-full">
          {/* Individual service items */}
          {[
            {
              title: "Tailored Creativity",
              description:
                "At UCreates, each project is unique, reflecting our dedication to creating tailor-made designs that resonate with your brand’s essence.",
              bgColor: "bg-pink-800",
            },
            {
              title: "User-Centric Approach",
              description:
                "We place your audience at the heart of our design process, ensuring intuitive, impactful, and lasting experiences.",
              bgColor: "bg-blue-700",
            },
            {
              title: "Proven Expertise",
              description:
                "UCreates brings an expert touch to branding, UI/UX, and print design, delivering results that captivate.",
              bgColor: "bg-green-600",
            },
            {
              title: "Cutting-Edge Tools",
              description:
                "Our designers stay ahead with the latest tools and trends, ensuring your brand always has a modern, polished edge.",
              bgColor: "bg-orange-700",
            },
            {
              title: "Reliability & Quality",
              description:
                "We prioritize quality and consistency, ensuring timely delivery and results that exceed expectations, every time.",
              bgColor: "bg-yellow-600",
            },
            {
              title: "End-to-End Solutions",
              description:
                "From concept to completion, UCreates provides comprehensive design solutions that cover every aspect of your brand’s visual identity.",
              bgColor: "bg-purple-700",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 ${service.bgColor} rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90`}
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">
                {service.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About UCreates</h2>
            <p className="text-sm">
              UCreates is dedicated to serving you the best in creative design ideas.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Components/Services">Services</Link>
              </li>
              <li>
                <Link href="/Components/Contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm">Email:umer.maher.um@gmail.com</p>
            <p className="text-sm">Phone:+92 3043282486</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Line above the footer content */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Footer Bottom */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 mt-4 space-y-4 md:space-y-0">
          {/* Left Side: Designer's Credit */}
          <p className="text-sm text-center md:text-left">
            Designed and Created by Tuba Nafees
          </p>

          {/* Right Side: Company Information and Links */}
          <p className="text-sm text-center md:text-right">
            &copy; 2024 UCreates. All rights reserved. |
            <Link
              href="/privacy-policy"
              className="text-teal-400 hover:underline ml-2"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
