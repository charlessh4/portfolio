"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Head from "next/head";

export default function Home() {
  return (
    <>
    {/* Add Favicon in Head */}
    <Head>
      <title>Shawn Charles Portfolio</title>
      <meta name="description" content="A portfolio showcasing my projects, skills, and experience." />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <main className="bg-gray-900 text-white">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="https://www.linkedin.com/in/shawn-m-charles-8364a0225/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-blue-500 hover:text-blue-300 transition duration-300" />
          </a>
          <ul className="flex space-x-6">
            {["About", "Projects",  "Experience", "Resume", "Contact"].map((section) => (
              <li key={section}>
                <Link href={`#${section.toLowerCase()}`} className="hover:text-gray-300 transition duration-300">
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-32 px-6 bg-gray-900"
      >
        <div className="bg-gray-800 rounded-lg p-10 max-w-3xl w-full shadow-lg backdrop-blur-md">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-light text-white drop-shadow-lg"
          >
            Shawn Charles
          </motion.h1>
          <p className="mt-4 text-lg text-gray-300 drop-shadow-md">
            Pursuing Masters of Science in Electrical and Computer Engineering with a concentration in Computer Systems and Software
          </p>

          {/* Programming Skills Section */}
          <div className="w-full max-w-2xl mt-8">
            <h3 className="text-2xl font-semibold text-center mb-4 text-white drop-shadow-md">
              Top Programming Skills
            </h3>
            {[
              { name: "C++", level: 100 },
              { name: "C", level: 90 },
              { name: "Python", level: 80 },
              { name: "Java", level: 70 },
              { name: "JavaScript", level: 60 },
            ].map((skill, index) => (
              <motion.div key={index} className="mb-3" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                <p className="text-white drop-shadow-md">{skill.name}</p>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <motion.div className="bg-blue-500 h-4 rounded-full" style={{ width: `${skill.level}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/3 mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image src="/images/profile.jpg" width={300} height={300} className="rounded-full shadow-lg" alt="Profile Picture" />
          </motion.div>
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300">
              I am a passionate computer engineering student currently on my fourth year at Northeastern University pursuing a Bachelors and Masters of Science in the field. 
              My experience mostly takes place with lower level programming in embedded design and processor design as my upper level courses have tailored towards those topics.
              My relevant courses include Operating Systems, Computer Architecture, and Computer System, which have bolstered my skills in lower level software design and understanding 
              how all parts of a computer work. Additionally, I am the President of Club Baseball at Northeastern; my responsibilities include managing all team activities, including line-up,
              player communications, travel accommodations, fields, umpires, and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CPU Emulator", image: "cpu_emulator.png", description: "Designed a CPU emulator in C that translates binary machine code into instruction and completes assembly operations. Instruction Set included LOAD, STORE, MOVE, ALU operations, CALL, JUMP, IN, OUT, PUSH, POP and RET. CPU implementation controlled the memory and registered by storing 8 bits in memory and 16 bits in each register." },
              { title: "MedSafe", image: "medsafe.png", description: "Led a team of 5 electrical and computer engineers to design a Capstone project. The project was a medicine drop box that implemented a lock for security and a cooling mechanism to ensure medicine like Insulin remain effective. As part of the project, we created a Flask website including data base storage. We then connected the embedded components to the web application through an ESP-32 with a MQTT broker. This allowed the web application to set temperatures of the drop box along with the timing of medical deliveries." },
              { title: "Raspberry Pi Relay", image: "raspberry_pi_relay.png", description: "Configured the Raspberry PI to record movement data from any Dephy exoskeleton device and store the data in a data log folder. Developed python script to create and send csv files to the Django server. Wrote a shell script to automate the data transfer process in the Linux terminal." },
              { title: "Nexus Django Web Server", image: "nexus_django.png", description: "Automated python script to access URL to fill data types for each value being received from Dephy exoskeleton. Worked with AWS Elastic Beanstalk Environment to continuously run Django web server with nexus.dephy.com certificate. Moreover, we leveraged an EC2 instance to store all data values in an S3 bucket for all trials on a device. Developed methodology to allow data point object values to be zipped with JSON header." },
              { title: "Unit Testing", image: "unit_testing.png", description: "Wrote unit tests for both C and C++ code that managed the databus communication between each of the 3 chips running on Dephy exoskeleton devices. Additionally, wrote tests to ensure that the parameters were updated timely for the settings API." },
              { title: "Virtual Reality Games for Mice", image: "vr_games.png", description: "Designed virtual reality games in Python that were used for Neurobiology experiments on mice. Created various tasks that would fire different neurons in the brains of the mice by displaying visual textures and enabling real life interaction (i.e. air puffs and sugar water rewards). Rewards were utilized for scavenger hunt tasks with a circuit set up for a sugar waterspout. Movements were tracked and stored with National Instruments Data Acquisition device between virtual reality computer and auxiliary computer." },
              { title: "Homefinder", image: "homefinder.png", description: "Streamlit python application that created front end for a website that would be for realtors and people who need homes to track home prices and location with google maps API. I designed HTTP routes for MySQL database queries through Representational State Transfer (REST) API to have storage of all values in the backend of the website." },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image src={`/images/${project.image}`} width={500} height={300} className="rounded-md" alt={project.title} />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-blue-400 mx-auto mb-10"></div>

          {/* Experience Entries */}
          <div className="space-y-12">
            {[
              {
                company: "Dephy",
                title: "Software Engineer",
                date: "January 2024 – June 2024",
                description:
                  "Designed testing protocols for embedded C code that controlled wired communication between microprocessors. Developed data storage website through Django Python web server operated in AWS for testing exoskeletons. Created MySQL database for webserver to store users and data taken from exoskeleton. Implemented Raspberry PI with Bash and Python scripts to gather data from exoskeleton and upload to web server.",
                logo: "/images/dephy.png",
              },
              {
                company: "Harvard Medical School",
                title: "Virtual Reality Design Specialist for Neurobiology Research",
                date: "January 2023 – June 2023",
                description:
                  "Debugged and deployed Python code implementing virtual reality games in Panda3D module. Worked with Lab View to transfer data from games to an auxiliary computer through NIDAQ instruments. Developed interdisciplinary team skills through working and presenting project to neurobiology members. Augmented infrastructure skills by assembling virtual reality hardware setup with NI-DAQ.",
                logo: "/images/harvard.png",
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Company Logo */}
                <div className="w-24 h-24 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <Image
                    src={experience.logo}
                    width={100}
                    height={100}
                    className="rounded-full shadow-md"
                    alt={`${experience.company} Logo`}
                  />
                </div>

                {/* Experience Details */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold">{experience.company}</h3>
                  <p className="italic text-gray-400">{experience.title} | {experience.date}</p>
                  <p className="mt-2 text-gray-300">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <div className="flex justify-center mt-6">
          <iframe src="/resume.pdf" className="w-full md:w-3/4 h-96 border-2 border-gray-600 rounded-lg" />
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-300">Feel free to reach out if you have any questions at charles.sh@northeastern.edu!</p>
        <div className="flex justify-center mt-6">
          <a href="mailto:charles.sh@northeastern.edu">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
            >
              Email Me
            </motion.button>
          </a>
        </div>
      </section>
    </main>
    </>
  );
}