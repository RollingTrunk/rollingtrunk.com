import { Header } from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />

      <section className="relative pt-32 pb-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
              <p>
                Rolling Trunk ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website rollingtrunk.com or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Information We Collect</h2>
              <p>
                We may collect information that you provide directly to us, such as when you contact us via email. This may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Content of your messages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Operate and maintain our website</li>
                <li>Communicate with you about our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the data we hold about you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2 font-medium">
                Email: hello@rollingtrunk.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
