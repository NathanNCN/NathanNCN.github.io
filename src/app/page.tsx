import Image from "next/image";
import { HiArrowSmallDown } from "react-icons/hi2";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="grid place-items-center min-h-screen">
        <div className="flex flex-col items-start px-4 sm:px-8">
          {/* Name Container */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-6">
            <h1 
              className="text-[7vw] sm:text-6xl leading-[0.1] sm:leading-none font-[400] text-black tracking-wider
                         animate-[dropIn_1s_ease-in-out] opacity-0 animation-fill-mode-forwards">
              Nathan
            </h1>
            <h1 
              className="text-[7vw] sm:text-5xl leading-[0.1] sm:leading-none font-[400] text-black tracking-wider pl-[8vw] sm:pl-0
                         animate-[dropIn_1s_ease-in-out_0.3s] opacity-0 animation-fill-mode-forwards">
              Chau-Nguyen
            </h1>
          </div>
          
          {/* Subtle Divider */}
          <div className="w-16 h-px bg-neutral-200 my-6 ml-[1vw] 
                         animate-[fadeIn_1s_ease-in-out_0.6s] opacity-0 animation-fill-mode-forwards"/>
          
          {/* Role Description */}
          <p className="text-[2vw] sm:text-lg leading-relaxed font-[400] text-neutral-600 tracking-wide pl-[1vw]
                       animate-[fadeIn_1s_ease-in-out_0.8s] opacity-0 animation-fill-mode-forwards">
            Student @ University of Waterloo • Software Engineer
          </p>

          <p>
            <HiArrowSmallDown />
          </p>
        </div>
      </div>
    </main>
  );
}
