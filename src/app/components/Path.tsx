'use client';

import React from 'react';
import { ArrowRight } from 'react-feather';
import { motion } from 'framer-motion';

interface PathProps {
    name: string;
    description: string;
    theme?: 'recruiter' | 'adventure' | 'mystery';
    onClick?: () => void;
    index?: number;
}

const themeStyles = {
    recruiter: {
        card: "bg-white border-zinc-100",
        accent: "from-amber-200 to-amber-100",
        title: "from-zinc-900 to-zinc-800",
        button: "from-zinc-900 to-zinc-800 hover:from-zinc-800 hover:to-zinc-700",
        text: "text-zinc-500"
    },
    adventure: {
        card: "bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 border-emerald-700 shadow-emerald-900/20",
        accent: "from-yellow-400 via-lime-400 to-green-400",
        title: "from-emerald-300 to-lime-200",
        button: "from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600",
        text: "text-emerald-100"
    },
    mystery: {
        card: "bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 border-violet-700 shadow-violet-900/20",
        accent: "from-fuchsia-500 via-purple-500 to-violet-500",
        title: "from-violet-300 to-fuchsia-300",
        button: "from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700",
        text: "text-violet-100"
    }
};

const Path = ({ name, description, theme = 'recruiter', onClick, index = 0 }: PathProps) => {
    const styles = themeStyles[theme];
    
    return (
        <motion.div 
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                ease: [0.21, 1.02, 0.73, 0.97] // custom easing for bouncy effect
            }}
        >
            <div className={`relative h-full rounded-2xl ${styles.card} p-10 text-center shadow-[0_0_50px_-12px_rgb(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_0_50px_-6px_rgb(0,0,0,0.1)] hover:scale-[1.02] border`}>
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${styles.accent} rounded-t-2xl opacity-90`}></div>
                <div className="relative flex flex-col items-center">
                    <div className={`bg-gradient-to-r ${styles.title} bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 leading-none`}>
                        {name}
                    </div>
                    
                    <div className={`${styles.text} text-sm sm:text-base lg:text-lg font-light mb-10 max-w-xs mx-auto leading-relaxed`}>
                        {description}
                    </div>

                    <button 
                        className={`group flex items-center gap-2 bg-gradient-to-r ${styles.button} text-white px-6 py-3 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10`}
                        type="button"
                        onClick={onClick}
                    >
                        Let&apos;s Go
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Path; 