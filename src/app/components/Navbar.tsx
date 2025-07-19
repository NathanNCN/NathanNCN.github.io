'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Home, GitHub, Linkedin } from 'react-feather';

interface NavbarProps {
    theme?: 'recruiter' | 'adventure' | 'mystery';
}

const themeStyles = {
    recruiter: {
        gradient: "from-zinc-900 to-zinc-800",
        hover: "hover:from-zinc-800 hover:to-zinc-700",
        icon: "hover:text-amber-600"
    },
    adventure: {
        gradient: "from-emerald-600 to-emerald-500",
        hover: "hover:from-emerald-500 hover:to-emerald-400",
        icon: "hover:text-emerald-600"
    },
    mystery: {
        gradient: "from-violet-600 to-purple-500",
        hover: "hover:from-violet-500 hover:to-purple-400",
        icon: "hover:text-violet-600"
    }
};

export default function Navbar({ theme = 'recruiter' }: NavbarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const styles = themeStyles[theme];

    useEffect(() => {
        if (pathname === '/' && window.location.hash === '#paths') {
            const element = document.getElementById('paths');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname]);

    const navigateToHome = () => {
        if (pathname === '/') {
            const element = document.getElementById('paths');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push('/#paths');
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-zinc-200 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button 
                            className={`text-2xl font-semibold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent ${styles.hover} transition-all duration-300`}
                            onClick={navigateToHome}
                        >
                            NC
                        </button>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <button 
                            onClick={navigateToHome}
                            className={`p-2 text-zinc-600 ${styles.icon} transition-colors`}
                            aria-label="Home"
                        >
                            <Home className="w-5 h-5" />
                        </button>

                        <a 
                            href="https://github.com/NathanNCN" 
                            rel="noopener noreferrer"
                            className={`p-2 text-zinc-600 ${styles.icon} transition-colors`}
                            aria-label="GitHub"
                        >
                            <GitHub className="w-5 h-5" />
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/nathan-chau-nguyen-853716215/" 
                            rel="noopener noreferrer"
                            className={`p-2 text-zinc-600 ${styles.icon} transition-colors`}
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 