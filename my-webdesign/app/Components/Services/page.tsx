"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "Brand Promotion",
    title: "Brand Promotion",
    description: "Craft a compelling brand identity.",
    images: [
      "/Images/BI1.png",
      "/images/BI2.png",
      "/images/brand_identity3.jpg",
    ],
    details:
      "Our Brand Identity service focuses on creating a memorable brand image...",
  },
  {
    id: "You-Tube Thumbnails",
    title: "YouTube Thumbnails",
    description: "Enhancing user experience.",
    images: [
      "/Images/YT1.png",
      "/images/YT3.png",
      "/images/uiux_design3.jpg",
    ],
    details:
      "Our UI/UX design service provides intuitive and user-friendly interfaces...",
  },
  {
    id: "SocialMediaGraphics",
    title: "Social Media Graphics",
    description: "Creative social media graphics.",
    images: ["/images/SMG4.png", "/images/SMG3.png", "/images/SMG5.png"],
    details:
      "Our Social Media Graphics service provides custom-made designs that enhance your online presence...",
  },
  {
    id: "Videos",
    title: "Videos",
    description: "Capture your brand’s essence with videos.",
    images: ["/Video/ind.mp4"],
    details:
      "Our video services include professional videography and editing to capture the essence of your brand...",
  },
  {
    id: "Promotional Shorts",
    title: "Promotional Shorts",
    description: "Promote your business with engaging video content.",
    images: ["/Images/YT2.png"],
    details:
      "Our promotional video services help in creating engaging and high-quality videos to promote your brand...",
  },
  {
    id: "Advertising",
    title: "Advertisement",
    description: "Attention-capturing designs for advertising.",
    images: ["/images/adv1.png"],
    details:
      "Our advertising design service focuses on creating impactful designs for print, digital, and social media ads...",
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
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

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <div className="space-y-2 cursor-pointer transition-transform duration-300 transform ">
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
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-8">
            <li className="hover:text-yellow-400 cursor-pointer transition duration-300 relative">
              <Link href="/">Home</Link>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-yellow-400 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition duration-300 relative ">
              <Link href="/Components/Services">Services</Link>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-yellow-400 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition duration-300 relative">
              <Link href="/Components/Contact">Contact</Link>
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-yellow-400 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation Menu */}
      <nav className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4 items-center bg-gray-800 p-6">
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            <Link href="/Components/Services">Services</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition duration-300">
            <Link href="/Components/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Main Services Content */}
      <div className="py-10 px-6 sm:px-8 lg:px-24 text-gray-100 ">
        {!selectedService ? (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 text-white">
  Our Services
</h1>

            <p className="text-base sm:text-lg md:text-xl text-center max-w-6xl mx-auto mb-8 text-gray-300">
              Explore our range of creative services to elevate your brand.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-yellow-500 rounded-lg p-6 cursor-pointer"
                  onClick={() => setSelectedService(service.id)}
                >
                  {service.images[0].endsWith(".mp4") ? (
                    <div className="w-full h-40 mb-4">
                      <video
                        controls
                        className="w-full h-auto object-cover rounded-md"
                        style={{ maxWidth: "400px" }}
                      >
                        <source src={service.images[0]} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <Image
                      src={service.images[0]}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  )}
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-gray-800 mb-4">{service.description}</p>
                  <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
                    See More
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-black text-sm sm:text-sm lg:text-lg ">
            {services
              .filter((service) => service.id === selectedService)
              .map((service) => (
                <div key={service.id}>
                  <button
                    className="text-gray-400 underline mb-4"
                    onClick={() => setSelectedService(null)}
                  >
                    ← Back to Services
                  </button>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold  text-left text-white leading-tight">
                    {service.title}
                  </h1>
                  <p className="lg:text-1xl mt-7 mb-7 text-gray-300 sm:text-2xl">
                    {service.details}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:text-4xl  ">
                    {service.images.map((image, index) => {
                      if (image.endsWith(".mp4")) {
                        return (
                          <div key={index} className="w-full h-auto ">
                            <video
                              controls
                              className="w-full h-auto object-cover rounded-md"
                            >
                              <source src={image} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        );
                      } else {
                        return (
                          <Image
                            key={index}
                            src={image}
                            alt={`Service image ${index + 1}`}
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover rounded-md"
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

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
            <p className="text-sm">Phone:+92 3043282486 </p>
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

export default Services;
