"use client";
import React from "react";
import Link from "next/link";
import { FaEnvelope, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-gray-800 p-4 shadow-lg z-50">
        <nav className="flex justify-center space-x-6 text-lg">
          <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
          <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
          <a href="#resume" className="hover:text-blue-400 transition duration-300">Resume</a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen text-center px-4">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-300">Showcasing my projects, skills, and experiences.</p>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-gray-800 py-16 px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
        <img src="/images/profile.jpg" alt="Profile" className="w-40 h-40 rounded-full shadow-lg mb-4 hover:scale-110 transition-transform duration-500" />
        <p className="text-gray-300 max-w-3xl">
          I am Shawn Charles, a Computer Engineering student passionate about system simulations, performance optimization, and algorithmic strategies. 
          I specialize in developing **high-performance applications** and leveraging **modern computational techniques** to solve complex problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-700 py-16 px-6">
        <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "CPU Emulator", image: "cpu_emulator.png", description: "A C-based CPU emulator that executes binary machine code and assembly instructions." },
            { title: "MedSafe", image: "medsafe.png", description: "A secure medicine storage solution with a smart locking mechanism and cooling system." },
            { title: "Raspberry Pi Relay", image: "raspberry_pi_relay.png", description: "A Raspberry Pi-based data logger for Dephy exoskeleton devices." },
            { title: "Nexus Django Web Server", image: "nexus_django.png", description: "A cloud-based web server for real-time data processing using AWS." },
            { title: "Virtual Reality Games for Mice", image: "vr_games.png", description: "Neurobiology-based VR experiments for mice, tracking neural activity through motion." },
            { title: "Homefinder", image: "homefinder.png", description: "A Streamlit web application for realtors to track home prices and locations." }
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-transform duration-500">
              <img src={`/images/${project.image}`} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-gray-800 py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Resume</h2>
        <p className="text-gray-300 mb-4">Download my latest resume for more details.</p>
        <a href="/resume.pdf" download>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300 flex items-center justify-center space-x-2">
            <FaDownload />
            <span>Download Resume</span>
          </button>
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-700 py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-300 mb-4">Let's connect! Feel free to reach out via email.</p>
        <a href="mailto:your.email@example.com">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300 flex items-center justify-center space-x-2">
            <FaEnvelope />
            <span>Contact Me</span>
          </button>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 text-gray-400">
        &copy; {new Date().getFullYear()} Shawn Charles. All Rights Reserved.
      </footer>
    </div>
  );
}
