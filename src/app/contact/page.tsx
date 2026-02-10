import { Header } from "@/components/header";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />

      <section className="relative pt-32 pb-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Connect</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We operate as a digital-first agency, bridging the gap between craft and code from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-gray-50/50 border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-900 mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-500 mb-4 text-sm">For project inquiries and support.</p>
              <a href="mailto:hello@rollingtrunk.com" className="text-gray-900 font-semibold hover:underline">
                hello@rollingtrunk.com
              </a>
            </div>

            {/* Availability/Remote Messaging */}
            <div className="bg-gray-50/50 border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-900 mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-500 mb-4 text-sm">Working remotely, rooted in the Midwest.</p>
              <p className="text-gray-900 font-semibold">
                Digital Headquarters<br />
                Global Presence
              </p>
            </div>
          </div>

          {/* Inquiry Section (Neutralized) */}
          <div className="mt-16 bg-gray-900 rounded-[3rem] p-12 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something meaningful.</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We're currently accepting new projects and collaborations. Reach out today and let's discuss how we can help you achieve your goals.
              </p>
              <a 
                href="mailto:hello@rollingtrunk.com?subject=New Project Inquiry" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
              >
                Start a Conversation
              </a>
            </div>
            
            {/* Minimalist graphic element */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <div className="w-full h-full bg-linear-to-bl from-white to-transparent transform rotate-12 scale-150"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
