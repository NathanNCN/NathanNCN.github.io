'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shuffle } from 'react-feather';
import Navbar from '../components/Navbar';
import Image from 'next/image';

// Sample facts - you can replace these with your own
interface Fact {
    type: 'text' | 'video' | 'image';
    content: string;
    caption?: string;
}

const facts: Fact[] = [
    {
        type: 'text',
        content: 'My Favorite Food is Shawarma',
    },
    {
        type: 'text',
        content: 'My favourite sport right now is MMA',
    },
    {
        type: 'video',
        content: 'https://www.youtube.com/embed/aAUIKZEc43M',
        caption: 'Here is one of my wrestling highlights',
    },
    {
        type: 'video',
        content: 'https://www.youtube.com/embed/vDbZsoK4z80',
        caption: 'My cousin teasing me at her sisters birthday party',
    },
    {
        type: 'video',
        content: 'https://www.youtube.com/embed/CtRn6eqVnvY',
        caption: 'My Current Favorite Song',
    },
    {
        type: 'video',
        content: 'https://www.youtube.com/embed/7qrVQwjieac',
        caption: 'My Favourite UFC moment',
    }
];

export default function MysteriousPage() {
    const [currentFact, setCurrentFact] = React.useState(facts[0]);

    const randomizeFact = () => {
        const newIndex = Math.floor(Math.random() * facts.length);
        setCurrentFact(facts[newIndex]);
    };

    return (
        <div className="min-h-screen bg-zinc-50">
            <Navbar theme="mystery" />

            {/* Content */}
            <div className="pt-24 px-4 pb-16">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Hero Section */}
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent mb-6">
                            Random Facts About Me
                        </h1>
                        <p className="text-lg text-zinc-600">
                            Click the button below to discover something unexpected
                        </p>
                    </motion.div>

                    {/* Fact Display Box */}
                    <motion.div 
                        className="bg-white rounded-2xl p-8 shadow-lg shadow-purple-100/50 border border-zinc-200 
                            min-h-[200px] flex flex-col items-center justify-center text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {currentFact.type === 'text' && (
                            <p className="text-xl text-zinc-700 font-light">{currentFact.content}</p>
                        )}
                        {currentFact.type === 'image' && (
                            <div className="space-y-4 w-full">
                                <div className="relative w-full h-64">
                                    <Image 
                                        src={currentFact.content} 
                                        alt={currentFact.caption || ''} 
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <p className="text-sm text-zinc-500">{currentFact.caption}</p>
                            </div>
                        )}
                        {currentFact.type === 'video' && (
                            <div className="space-y-4 w-full">
                                <div className="relative aspect-video w-full">
                                    <iframe
                                        src={`${currentFact.content}?autoplay=0&controls=1&rel=0`}
                                        className="absolute inset-0 w-full h-full rounded-lg"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <p className="text-sm text-zinc-500">{currentFact.caption}</p>
                            </div>
                        )}
                    </motion.div>

                    {/* Randomize Button */}
                    <motion.div 
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <button
                            onClick={randomizeFact}
                            className="group flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-500 text-white px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-purple-100 hover:shadow-xl hover:shadow-purple-200 hover:scale-105"
                        >
                            <Shuffle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                            Randomize
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 