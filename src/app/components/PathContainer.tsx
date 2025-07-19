'use client';

import Path from "./Path";
import { useRouter } from 'next/navigation';

function PathContainer() {
    const router = useRouter();

    return (
        <div id="paths" className="relative min-h-[70vh] w-full py-24 px-8 bg-zinc-50 scroll-mt-16">
            {/* Background with pattern overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-white">
                <div className="absolute inset-0 opacity-25" 
                    style={{ 
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
                        backgroundSize: '32px 32px' 
                    }}>
                </div>
            </div>

            {/* Content */}
            <div className="relative">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-center text-zinc-900 mb-8 tracking-tight">
                    What <span className="font-normal text-zinc-800">Matches</span> You?
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-700 text-center max-w-3xl mx-auto mb-20 leading-relaxed">
                    Hey, thanks for stopping by!
                    Pick the path that fits you best or explore them all to get the full picture of who I am.
                </p>
                
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-7xl mx-auto px-4">
                    <Path 
                        name="Recruiter" 
                        description="If you're looking for a fast, focused overview, you're in the right place. This section gives you a concise summary of who I am, what I've built, and the skills I bring to the table."
                        theme="recruiter"
                        onClick={() => router.push('/Recruiter')}
                        index={0}
                    />
                    <Path 
                        name="About Me" 
                        description="Curious about the person behind the projects? Dive in to explore my story, hobbies, and the moments that shaped me."
                        theme="adventure"
                        onClick={() => router.push('/AboutMe')}
                        index={1}
                    />
                    <Path 
                        name="Mysterious" 
                        description="Want to get to know me beyond the resume? This is where I share the things I love, the moments that shaped me, and everything that doesn't fit on LinkedIn."
                        theme="mystery"
                        onClick={() => router.push('/Mysterious')}
                        index={2}
                    />
                </div>
            </div>
        </div>
    );
}

export default PathContainer;