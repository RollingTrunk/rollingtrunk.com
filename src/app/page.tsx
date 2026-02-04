import { GradientBackground } from "@/components/gradient-background";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { MissionSection } from "@/components/mission-section";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* 3D Gradient Background */}
      <GradientBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-9xl tracking-tighter uppercase font-black font-(family-name:--font-notable) text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 drop-shadow-sm mb-6 animate-fade-in-up">
            Rolling Trunk
          </h1>
          <p className="text-lg md:text-2xl font-medium tracking-tight text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Design. Develop. Deploy.
          </p>
          <div className="relative z-50 mt-6 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm animate-fade-in-up delay-200">
            <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-900">
              Creative Agency
            </p>
          </div>
        </div>
      </section>



      {/* Mission Statement */}
      {/* Mission Statement */}
      <MissionSection />

      {/* Projects Section */}
      <section className="relative w-full py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-gray-200/50 pb-6">
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Selected Work
            </h2>
            <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-right">
                A collection of our recent digital experiences.
            </p>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Hest"
              description="Simplifying household management with a beautiful, intuitive interface."
              href="https://hest.page"
            />
             <ProjectCard
              title="Coming Soon"
              description="More exciting projects are in the works. Stay tuned."
              href="#"
            />
          </div>
        </div>
      </section>
      


      {/* Contact Section */}
      <section className="relative w-full py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to start your project?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let's build something amazing together.
          </p>
          <a
            href="mailto:hello@rollingtrunk.com?subject=Inquiry to work with rolling trunk"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out bg-gray-900 rounded-full hover:bg-gray-800 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Contact Us
          </a>
        </div>
      </section>
      
      <footer className="w-full py-12 text-center text-gray-500 text-sm font-medium tracking-wide">
        &copy; {new Date().getFullYear()} Rolling Trunk. All rights reserved.
      </footer>
    </main>
  );
}
