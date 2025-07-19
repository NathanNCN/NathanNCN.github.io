'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Tool } from 'react-feather';
import Navbar from '../components/Navbar';

// Project data
const projects = [
    {
        title: "LeetPrep",
        description: "An AI-powered coding interview preparation platform that simulates real coding interviews. Features include personalized technical and behavioral questions generated using Gemini API based on user preferences, intelligent answer analysis, and comprehensive feedback with tailored learning resources and performance ratings.",
        image: "./Images/LeetPrep.png",
        tech: ["TypeScript", "Next.js", "Tailwind", "Golang"],
        link: "https://leet-prep.vercel.app/",
        githubLink: "https://github.com/yourusername/leetprep"
    },
    {
        title: "UniLens",
        description: "A full-stack university application tracker that helps students explore and analyze successful admissions. Features include Google OAuth 2.0 Authentication for secure login, comprehensive application data management including grades and extracurriculars, and real admission statistics visualization.",
        image: "./Images/UniLens.png",
        tech: ["TypeScript", "Next.js", "Tailwind", "Golang", "Supabase"],
        link: "https://uni-lens.vercel.app/",
        githubLink: "https://github.com/yourusername/unilens"
    },
    {
        title: "Encompass",
        description: "A comprehensive full-stack productivity web application designed to enhance organization and efficiency. Features include an interactive Flashcard system for learning, customizable Pomodoro timer for time management, and Goal tracker for progress monitoring. Implemented secure user authentication through Google Authenticator with persistent data storage in MongoDB.",
        image: "./Images/Encompass.png",
        tech: ["Python", "Flask", "JavaScript", "HTML", "CSS", "Bootstrap", "MongoDB"],
        link: "https://youtu.be/FbfhiUuBTio",
        githubLink: "https://github.com/NathanNCN/Encompass"
    }
];

export default function RecruiterPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-zinc-50 px-4 sm:px-8 pt-24 pb-16">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.h1 
                    className="text-4xl sm:text-5xl lg:text-7xl font-light mb-8 bg-gradient-to-r from-zinc-900 to-zinc-800 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hey, I&apos;m Nathan!
                </motion.h1>

                {/* Location Info */}
                <motion.p 
                    className="text-lg sm:text-xl text-zinc-600 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                        I&apos;m 19, based in <span className="text-zinc-900 hover:text-amber-700 transition-colors">Kitchener Ontario</span> 
                        and I am a second year student majoring in Mathematics  at the University of Waterloo.
                </motion.p>

                    {/* Experience Section */}
                <motion.div 
                        className="mb-16 space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-light text-zinc-800 mb-6">My Experience</h2>
                        <ul className="space-y-8 text-zinc-600">
                            <li className="group">
                                <div className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:scale-110 transition-transform"></span>
                                    <span className="font-medium text-zinc-800">Plannery</span>
                                    <span className="text-sm text-zinc-500">• Company Name</span>
                                </div>
                                <div className="mt-1 ml-4 space-y-2">
                                    <p className="text-zinc-500 text-sm">May 2023 - Aug 2023</p>
                                    <ul className="list-disc list-inside space-y-1 text-zinc-600">
                                        <li>Developed and maintained full-stack web applications</li>
                                        <li>Collaborated with cross-functional teams on project deliverables</li>
                                        <li>Implemented new features and optimized existing codebase</li>
                                    </ul>
                                </div>
                        </li>

                            <li className="group">
                                <div className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:scale-110 transition-transform"></span>
                                    <span className="font-medium text-zinc-800">Digital Bootcamp @ Interaptix AI</span>
                                    <span className="text-sm text-zinc-500">• University of Waterloo</span>
                                </div>
                                <div className="mt-1 ml-4 space-y-2">
                                    <p className="text-zinc-500 text-sm">May 2025 - Aug 2025</p>
                                    <ul className="list-disc list-inside space-y-1 text-zinc-600">
                                        <li>Participating in a design-focused bootcamp covering digital strategy, UX principles, SEO, accessibility, and web design</li>
                                        <li>Worked with Interaptix.ai to design and SEO optimize a website for their product Doppl</li>
                                        <li>Collaborated with a team to gather feedback, iterate on designs, and implement changes based on user and stakeholder input.</li>
                    </ul>
                                </div>
                        </li>
                    </ul>
                </motion.div>

                {/* Projects Section */}
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-light text-zinc-800 mb-6">Featured Projects</h2>
                        <div className="space-y-8">
                            {projects.map((project, index) => (
                                <motion.div 
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-200 hover:shadow-xl transition-shadow duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative h-[200px] md:h-[300px] bg-zinc-100 rounded-lg overflow-hidden">
                                            <img 
                                                src={project.image}
                                                alt={project.title}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-2xl font-light text-zinc-900 mb-3">
                                                    {project.title}
                                                </h3>
                                                <p className="text-zinc-600 mb-4">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.tech.map((tech, techIndex) => (
                                                        <span 
                                                            key={techIndex}
                                                            className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <a 
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-amber-600 hover:text-amber-700 transition-colors"
                                                >
                                                    Live Demo →
                                                </a>
                                                <a 
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-zinc-600 hover:text-zinc-700 transition-colors"
                                                >
                                                    GitHub →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technical Skills Section */}
                    <motion.div 
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-light text-zinc-800 mb-6">Technical Skills</h2>
                        <div className="space-y-6">
                            {/* Languages */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Code className="w-5 h-5 text-amber-600" />
                                    <h3 className="text-lg font-medium text-zinc-800">Languages</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Python", "JavaScript", "TypeScript", "Go (Golang)", "HTML", "CSS"].map((skill, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Libraries & Frameworks */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Terminal className="w-5 h-5 text-amber-600" />
                                    <h3 className="text-lg font-medium text-zinc-800">Frameworks & Libraries</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Flask", "Jinja", "Next.js", "Tailwind CSS"].map((skill, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Developer Tools */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Tool className="w-5 h-5 text-amber-600" />
                                    <h3 className="text-lg font-medium text-zinc-800">Developer Tools</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["GitHub", "Visual Studio", "PyCharm", "MongoDB", "Supabase", "Docker", "PostgreSQL"].map((skill, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                </motion.div>

                  
                </div>
            </div>
        </>
    );
}
    