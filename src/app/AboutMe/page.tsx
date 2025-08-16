'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Globe, Target, ChevronLeft, ChevronRight } from 'react-feather';
import Navbar from '../components/Navbar';
import Image from 'next/image';

interface MediaItem {
    type: 'image' | 'video';
    url: string;
}

interface Hobby {
    title: string;
    description: string;
    media: MediaItem[];
}

interface ImageCarouselProps {
    media: MediaItem[];
}

const renderMedia = (item: MediaItem) => {
    if (item.type === 'video') {
        return (
            <div className="relative w-full h-full">
                <iframe
                    src={`${item.url}?autoplay=0&controls=1&rel=0`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    } else {
        return (
            <div className="relative w-full h-full">
                <Image 
                    src={item.url}
                    alt="Hobby image"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-opacity duration-500"
                />
            </div>
        );
    }
};

const hobbies: Hobby[] = [
    {
        title: "Wrestling",
        description: "I wrestled for two years and served as the team captain, competing with Matmen Wrestling. Despite an early injury in my first year, I came back stronger. I went undefeated and qualifying for OFSAA, where I unfortunately had to withdraw due to another injury placing top 16. I still wrestle and am on the Waterloo club wrestling team. Feel free to ask me about it or roll with me.",
        media: [
            {
                type: 'video',
                url: 'https://www.youtube.com/embed/wm2maMMQD68'
            },
            {
                type: 'video',
                url: 'https://www.youtube.com/embed/BjdnHFv3D2E'
            },
            {
                type: 'video',
                url: 'https://www.youtube.com/embed/IH4dVRAV7h8'
            }
        ]
    },
    {
        title: "Video Games",
        description: "Growing up, I've always loved video games, especially the thrill of competing against others online. These days, I'm hooked on Teamfight Tactics and Valorant. However, I see myself always coming back to my childhood favourite, Minecraft.",
        media: [
            { type: 'image', url: '/images/VideoGames1.jpeg' },
            { type: 'image', url: '/images/VideoGames2.jpg' },
            { type: 'image', url: '/images/VideoGames3.jpg' }
        ]
    },
    {
        title: "Fitness",
        description: "Before wrestling, I fell in love with fitness and living an active, healthy lifestyle. I'm all about pushing my limits, chasing PRs, staying consistent, and feeling strong both mentally and physically. There's nothing like the grind or the rush from a solid workout. Right now, I'm training hard to hit a 315 lb bench press.",
        media: [
            { type: 'video', url: 'https://www.youtube.com/embed/DSkwOm1eeew' },
            { type: 'image', url: '/images/Fitness1.png' },
            { type: 'video', url: 'https://www.youtube.com/embed/d5R7uY9Inj4' }
        ]
    },
    {
        title: "Traveling with Friends/Family",
        description: "I love experiencing new things, especially with the people I cherish most. My first time camping was with friends, and it couldn't have been better, new adventures, late-night laughs, and memories I'll never forget.",
        media: [
            { type: 'image', url: '/images/Camping1.png' },
            { type: 'image', url: '/images/Camping2.png' },
            { type: 'image', url: '/images/Camping3.png' }
        ]
    }
];

const ImageCarousel: React.FC<ImageCarouselProps> = ({ media }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative aspect-video">
            {renderMedia(media[currentIndex])}
            
            {/* Navigation Buttons */}
            <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {media.map((_: MediaItem, index: number) => (
                    <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

const adventures = [
    {
        title: "First Ever Hackathon",
        date: "June 2025",
        description: "Built a Web3 application for student verification tool in 72 hours"
    },
    {
        title: "OFSAA Wrestling in Hamilton",
        date: "March 2024",
        description: "Competed in the OFSAA Wrestling Championships in Hamilton, ON against the best wrestlers in the province"
    },
    {
        title: "Benching 225",
        date: "August 2023",
        description: "Bench Pressed 225lbs for the first time with all my friends cheering me on and recording the moment"
    }
];

const futureQuests = [
    "Bench 315lbs",
    "Complete a marathon",
    "Travel to Japan",
    "Go to a concert",
];

export default function AdventurePage() {
    return (
        <div className="min-h-screen bg-zinc-50">
            <Navbar theme="adventure" />

            {/* Content */}
            <div className="pt-24 px-4 pb-16">
                <div className="max-w-4xl mx-auto space-y-24">
                    {/* Hero Section */}
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-6">
                            My Life So Far
                        </h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-zinc-600"
                        >
                            Hey! Here are some of the hobbies and things I enjoy that make life more exciting. Whether it&apos;s my hobbies, travel, or music, I&apos;m always exploring something new.
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8 inline-block px-6 py-3 bg-emerald-100 rounded-full text-emerald-800"
                        >
                            &ldquo;We don&apos;t care what you can&apos;t do, we care what you can do&rdquo; - Coach Bird
                        </motion.div>
                    </motion.div>

                    {/* Hobbies Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Heart className="w-6 h-6 text-emerald-600" />
                            <h2 className="text-2xl font-light text-zinc-800">My hobbies</h2>
                        </div>
                        <div className="space-y-8">
                            {hobbies.map((hobby, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl overflow-hidden border border-zinc-200 
                                        hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: index * 0.15,
                                        ease: [0.21, 1.02, 0.73, 0.97] // smooth bouncy effect
                                    }}
                                >
                                    <ImageCarousel media={hobby.media} />
                                    <div className="p-8">
                                        <h3 className="text-2xl font-light text-zinc-800 mb-4">{hobby.title}</h3>
                                        <p className="text-zinc-600 leading-relaxed text-lg">{hobby.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Memories Highlights */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Globe className="w-6 h-6 text-emerald-600" />
                            <h2 className="text-2xl font-light text-zinc-800">Memories Highlights</h2>
                        </div>
                        <div className="space-y-6">
                            {adventures.map((adventure, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-200 
                                        hover:shadow-emerald-100/50 transition-shadow duration-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: 0.3 + (index * 0.1),
                                        ease: [0.21, 1.02, 0.73, 0.97]
                                    }}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-light text-zinc-800">{adventure.title}</h3>
                                        <span className="text-sm text-emerald-600">{adventure.date}</span>
                                    </div>
                                    <p className="text-zinc-600">{adventure.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Behind the Scenes */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Code className="w-6 h-6 text-emerald-600" />
                            <h2 className="text-2xl font-light text-zinc-800">My Motivation</h2>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-200 
                            hover:shadow-emerald-100/50 transition-shadow duration-300">
                            <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                                <Image 
                                    src="/images/Family1.jpg"
                                    alt="My family"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <p className="text-zinc-600 mb-4">
                                My biggest motivation comes from my family. Watching my parents work tirelessly at the nail salon
                                and seeing my brother push through to get into Waterloo Engineering and build a solid career 
                                reminds me why I need to stay focused. So I can do the same and make them proud.
                            </p>
                        </div>
                    </motion.section>

                    {/* Future Quests */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Target className="w-6 h-6 text-emerald-600" />
                            <h2 className="text-2xl font-light text-zinc-800">Future Quests</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {futureQuests.map((quest, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-200 
                                        hover:shadow-emerald-100/50 transition-shadow duration-300 flex items-center gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: 0.5 + (index * 0.1),
                                        ease: [0.21, 1.02, 0.73, 0.97]
                                    }}
                                >
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <p className="text-zinc-700">{quest}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    
                </div>
            </div>
        </div>
    );
} 