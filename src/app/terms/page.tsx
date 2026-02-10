import { Header } from "@/components/header";

export default function TermsOfService() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />

      <section className="relative pt-32 pb-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h2>
              <p>
                By accessing and using rollingtrunk.com, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Description of Services</h2>
              <p>
                Rolling Trunk is a creative agency providing design, development, and digital strategy services. Our website provides information about our services and work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of Rolling Trunk or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. User Conduct</h2>
              <p>
                You agree to use our website for lawful purposes only and in a manner that does not infringe the rights of others or restrict their use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Limitation of Liability</h2>
              <p>
                Rolling Trunk shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the State of Wisconsin, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Your continued use of the website after such changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Contact Information</h2>
              <p>
                For any questions regarding these Terms of Service, please contact us at hello@rollingtrunk.com.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
