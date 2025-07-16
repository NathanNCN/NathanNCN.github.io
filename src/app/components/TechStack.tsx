'use client';

import React from 'react';
import { SiTypescript, SiJavascript, SiGo, SiReact, SiC, SiCss3, SiTailwindcss } from 'react-icons/si';
import { motion } from "framer-motion";

const PythonLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 128 128" className={className}>
        <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#5A9FD4"/>
            <stop offset="1" stopColor="#306998"/>
        </linearGradient>
        <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#FFD43B"/>
            <stop offset="1" stopColor="#FFE873"/>
        </linearGradient>
        <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10)"/>
        <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10)"/>
    </svg>
);

const technologies = [
    { icon: PythonLogo, name: 'Python', isCustom: true, delay: 1.2 },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-[#3178C6]', delay: 1.4 },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-[#F7DF1E]', delay: 1.6 },
    { icon: SiGo, name: 'Go (Golang)', color: 'text-[#00ADD8]', delay: 1.8 },
    { icon: SiReact, name: 'React', color: 'text-[#61DAFB]', delay: 2 },
    { icon: SiC, name: 'C', color: 'text-[#A8B9CC]', delay: 2.2 },
    { icon: SiCss3, name: 'CSS', color: 'text-[#1572B6]', delay: 2.4 },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-[#06B6D4]', delay: 2.6 }
];

const TechStack = () => {
    return (
        <div className="w-full sm:px-0">
            <div className="mx-auto">
                <div className="flex flex-row flex-wrap justify-center gap-4 w-full">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center gap-2 group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: tech.delay }}
                        >
                            {tech.isCustom ? (
                                <tech.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-110" />
                            ) : (
                                <tech.icon 
                                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-110 ${tech.color}`}
                                />
                            )}
                            <span className="text-xs sm:text-sm md:text-base text-neutral-600 font-medium text-center">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack; 