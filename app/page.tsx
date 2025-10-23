'use client';

import { lusitana } from '@/app/ui/fonts';
import { useState, useEffect } from 'react';

export default function Page() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className={`${lusitana.className} text-xl md:text-2xl font-bold ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
              JGH
            </h2>
            <div className="flex gap-4 md:gap-8">
              {['home', 'about', 'experience', 'education', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm md:text-base font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  } ${activeSection === section ? 'text-blue-600' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-purple-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          {/* Profile Avatar Placeholder */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-5xl md:text-6xl font-bold text-blue-800">
                JG
              </div>
            </div>
          </div>

          <h1 className={`${lusitana.className} text-5xl md:text-7xl font-bold mb-6 animate-fade-in`}>
            Jenny Gemayel Hatoum
          </h1>
          <div className="space-y-2 mb-8">
            <p className="text-xl md:text-3xl text-blue-100 animate-fade-in-delay-1">
              Lecturer | Business Intelligence Expert
            </p>
            <p className="text-lg md:text-xl text-blue-200 animate-fade-in-delay-2">
              Digital Strategy Consultant | Telecommunications Specialist
            </p>
          </div>

          {/* Contact Info with Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base animate-fade-in-delay-3">
            <a href="mailto:jgemayel@ogero.gov.lb" className="flex items-center gap-2 hover:text-blue-300 transition-all hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>jgemayel@ogero.gov.lb</span>
            </a>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Beit Mery, Lebanon</span>
            </div>
            <a href="https://linkedin.com/in/jenny-gemayel-22b0302" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-300 transition-all hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300">
              Download CV
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className={`${lusitana.className} text-5xl md:text-6xl font-bold mb-2`}>30+</div>
              <div className="text-blue-100 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className={`${lusitana.className} text-5xl md:text-6xl font-bold mb-2`}>4</div>
              <div className="text-blue-100 text-sm md:text-base">Advanced Degrees</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className={`${lusitana.className} text-5xl md:text-6xl font-bold mb-2`}>10+</div>
              <div className="text-blue-100 text-sm md:text-base">Leadership Roles</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className={`${lusitana.className} text-5xl md:text-6xl font-bold mb-2`}>3</div>
              <div className="text-blue-100 text-sm md:text-base">Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-6 justify-center">
            {['Arabic', 'French', 'English'].map((lang, idx) => (
              <div
                key={lang}
                className="group relative px-8 py-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                  </svg>
                  {lang}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-gray-800 mb-4`}>
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Seasoned professional with <span className="font-bold text-blue-600">three decades of experience</span> across telecoms, executive management,
              and higher education. Currently a university <span className="font-bold text-purple-600">Lecturer specializing in Data Management and Digital Strategy</span>.
              Expert in Business Intelligence, delivering actionable insights. Demonstrated strategic impact by leading
              consulting teams at the TRA focused on market and tariffs, and by crafting the <span className="font-bold text-blue-600">"Liban Telecom" Business Plan</span>.
              Skilled in marketing, global product development, and complex problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience - Interactive Timeline */}
      <section id="experience" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-gray-800 mb-4`}>
              Career Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600"></div>

            <div className="space-y-16">
              {[
                {
                  title: "Lecturer",
                  company: "University Saint Joseph",
                  period: "2017 - Present",
                  location: "Beirut, Lebanon",
                  description: "Designed and delivered courses for Master's degree programs focused on:",
                  points: ["Data Management & Analytics", "Digital Economy for Business", "Digital & Mobile Strategy", "Management"],
                  side: "left"
                },
                {
                  title: "Audit & Statistics Manager",
                  company: "OGERO",
                  period: "2017 - Present",
                  location: "Beirut, Lebanon",
                  description: "",
                  points: [
                    "Responsible for handling Business Intelligence tasks",
                    "Conducted audits and analyzed data from various sources, delivering actionable insights",
                    "Ensure that the organization complies with all applicable regulations"
                  ],
                  side: "right"
                },
                {
                  title: "Marketing Manager",
                  company: "OGERO",
                  period: "2002 - 2017",
                  location: "Beirut, Lebanon",
                  description: "",
                  points: [
                    "Consultancy for the Ministry of Telecoms' General Management",
                    "Project Management for multiple telecom products and solutions",
                    "Developed 'Liban Telecom' Business Plan",
                    "Led 'Eurostrategy' consulting team within TRA"
                  ],
                  side: "left"
                },
                {
                  title: "New Services Manager",
                  company: "OGERO",
                  period: "1998 - 2002",
                  location: "Beirut, Lebanon",
                  description: "",
                  points: ["Overseeing Marketing activities at Ogero, replacing consultants from Cable & Wireless"],
                  side: "right"
                },
                {
                  title: "Global Product Manager",
                  company: "BT Europe (British Telecom)",
                  period: "1995 - 1998",
                  location: "Paris-La Défense, France",
                  description: "",
                  points: [
                    "Launched new Network Services globally within BT",
                    "Service Definition and deployment across Europe (Satellite Services, Business TV, Gateways, Routers)"
                  ],
                  side: "left"
                },
                {
                  title: "Data Telecommunication Consultant",
                  company: "BT Europe (British Telecom)",
                  period: "1993 - 1995",
                  location: "Paris-La Défense, France",
                  description: "",
                  points: [
                    "Handled client installation and interconnectivity",
                    "Validated customer platforms and applications"
                  ],
                  side: "right"
                },
                {
                  title: "Trial Manager",
                  company: "BT Europe (British Telecom)",
                  period: "1992 - 1993",
                  location: "Paris-La Défense, France",
                  description: "",
                  points: [
                    "Technical validation of Concert Frame Relay services",
                    "Deployed Concert Frame Relay products in Europe"
                  ],
                  side: "left"
                },
                {
                  title: "System Engineer",
                  company: "BT Europe (British Telecom)",
                  period: "1990 - 1992",
                  location: "Paris-La Défense, France",
                  description: "",
                  points: [
                    "Second level support for Concert Packet Services portfolio",
                    "Technical support for BT email application"
                  ],
                  side: "right"
                },
                {
                  title: "Network Engineer",
                  company: "SILICOM",
                  period: "1989 - 1990",
                  location: "Paris-La Défense, France",
                  description: "",
                  points: [
                    "Developed simulator for Réseau Cartes Bancaires",
                    "Managed interface between ISO layers"
                  ],
                  side: "left"
                },
                {
                  title: "Development Engineer",
                  company: "SILICOM",
                  period: "1988 - 1989",
                  location: "Paris-La Défense, France",
                  description: "",
                  points: [
                    "Developed TGX25 emulation software in C",
                    "Created emulation software for Australian PTT in Sydney"
                  ],
                  side: "right"
                }
              ].map((job, idx) => (
                <div key={idx} className={`relative flex items-center ${job.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${job.side === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-600">
                      <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                        </div>
                        <span className="px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {job.location}
                      </p>
                      {job.description && <p className="text-gray-700 mb-3">{job.description}</p>}
                      <ul className="space-y-2">
                        {job.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm md:text-base">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-gray-800 mb-4`}>
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                degree: "Executive Doctorate Business Administration",
                school: "University Saint Joseph / Paris Dauphine",
                year: "2018",
                country: "France",
                dissertation: "Equilibrate the Value between OTT Players & Telcos",
                color: "blue"
              },
              {
                degree: "Master of Business Administration International Paris",
                school: "University Saint Joseph / Paris Dauphine / Sorbonne",
                year: "2009",
                country: "France",
                color: "purple"
              },
              {
                degree: "Master's Degree in Mathematics Engineering",
                school: "University Franche-Comté",
                year: "1987",
                country: "France",
                color: "indigo"
              },
              {
                degree: "Master's Degree in Computer Science",
                school: "University Franche-Comté",
                year: "1987",
                country: "France",
                color: "cyan"
              }
            ].map((edu, idx) => (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br from-white to-${edu.color}-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border-t-4 border-${edu.color}-600`}
              >
                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${edu.color}-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${edu.color}-500 to-${edu.color}-700 rounded-lg flex items-center justify-center text-white text-xl font-bold`}>
                      {edu.year.slice(2)}
                    </div>
                    <span className={`px-4 py-1 bg-${edu.color}-100 text-${edu.color}-800 rounded-full text-sm font-semibold`}>
                      {edu.country}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className={`text-${edu.color}-600 font-semibold mb-2 text-lg`}>{edu.school}</p>
                  {edu.dissertation && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-1 font-semibold">Dissertation Topic:</p>
                      <p className="text-gray-700 italic">"{edu.dissertation}"</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certificate */}
          <div className="max-w-2xl mx-auto">
            <h3 className={`${lusitana.className} text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center`}>
              Professional Certification
            </h3>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2">Digital Marketing for Professional Course</h4>
                  <p className="text-green-100 text-lg">WSI | 2016</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills with Progress Bars */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-gray-800 mb-4`}>
              Core Competencies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Business Strategy", level: 95, icon: "📊" },
              { name: "Analytical Skills", level: 98, icon: "🔍" },
              { name: "Digital Marketing", level: 90, icon: "💡" },
              { name: "Project Management", level: 96, icon: "📋" },
              { name: "Collaboration & Teamwork", level: 94, icon: "🤝" },
              { name: "Written & Oral Communication", level: 97, icon: "💬" }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">{skill.name}</h3>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-900 via-blue-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${lusitana.className} text-4xl md:text-5xl font-bold mb-6`}>
            Let's Connect
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Interested in collaboration or have a project in mind? I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:jgemayel@ogero.gov.lb" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-200 text-sm">jgemayel@ogero.gov.lb</p>
            </a>

            <a href="tel:9613269639" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-blue-200 text-sm">961 3 269639</p>
            </a>

            <a href="https://linkedin.com/in/jenny-gemayel-22b0302" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <svg className="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-blue-200 text-sm">Connect with me</p>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:jgemayel@ogero.gov.lb" className="px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Send Message
            </a>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${lusitana.className} text-2xl font-bold mb-2`}>Jenny Gemayel Hatoum</p>
          <p className="text-gray-400 mb-4">
            Expert in Business Intelligence | Digital Strategy | Telecommunications
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://linkedin.com/in/jenny-gemayel-22b0302" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="mailto:jgemayel@ogero.gov.lb" className="hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Jenny Gemayel Hatoum. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s both;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
