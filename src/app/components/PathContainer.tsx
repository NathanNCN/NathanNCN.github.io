import Path from "./Path";

function PathContainer() {
    return (
        <div className="relative min-h-[70vh] w-full py-24 px-8 bg-zinc-50">
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
                    Hey, I&apos;m glad you&apos;re here. There&apos;s a few ways you can get to know me, depending on what you&apos;re looking for. If you&apos;re a recruiter, I&apos;ve laid out my skills, projects, and what I can bring to your team, no fluff. 
                    If you&apos;re more the adventurous type, feel free to explore my story, the things I&apos;ve built, and the moments that shaped me. 
                    And if you&apos;re someone who likes to dig a little deeper or spontaneous, click the mystery button.
                </p>
                
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-7xl mx-auto px-4">
                    <Path 
                        name="Recruiter" 
                        description="If you&apos;re looking for a fast, focused overview, you&apos;re in the right place. This section gives you a concise summary of who I am, what I&apos;ve built, and the skills I bring to the table."
                        theme="recruiter"
                        index={0}
                    />
                    <Path 
                        name="Adventurous" 
                        description="If you&apos;re up for an adventure, this is the path to take. Here you&apos;ll find the deeper story of who I am, what I&apos;ve done, my hobbies and more"
                        theme="adventure"
                        index={1}
                    />
                    <Path 
                        name="Mystery" 
                        description="Want to get to know me beyond the resume? This is where I share the things I love, the moments that shaped me, and everything that doesn&apos;t fit on LinkedIn."
                        theme="mystery"
                        index={2}
                    />
                </div>
            </div>
        </div>
    );
}

export default PathContainer;